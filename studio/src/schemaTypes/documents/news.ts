import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const news = defineType({
  name: 'news',
  title: 'Naujienos',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pavadinimas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL kelias',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          {title: 'Bendros', value: 'bendros'},
          {title: 'Renginiai', value: 'renginiai'},
          {title: 'Projektai', value: 'projektai'},
          {title: 'Pranešimai spaudai', value: 'spaudai'},
        ],
        layout: 'dropdown'
      },
      initialValue: 'bendros',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Trumpas aprašymas',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'content',
      title: 'Turinys',
      type: 'blockContent',
    }),
    defineField({
      name: 'coverImage',
      title: 'Pagrindinė nuotrauka',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternatyvus tekstas',
          description: 'Svarbu SEO ir prieinamumui',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Privaloma nurodyti alternatyvų tekstą'
              }
              return true
            })
          },
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publikavimo data',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Svarbus straipsnis',
      type: 'boolean',
      description: 'Ar šis straipsnis turėtų būti rodomas kaip svarbus',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Pagal publikavimo datą (naujausios pirmos)',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
      publishedAt: 'publishedAt',
      featured: 'featured',
    },
    prepare({title, subtitle, media, publishedAt, featured}) {
      const categoryTitle = subtitle === 'bendros' ? 'Bendros' : 
                           subtitle === 'renginiai' ? 'Renginiai' :
                           subtitle === 'projektai' ? 'Projektai' :
                           subtitle === 'spaudai' ? 'Pranešimai spaudai' : subtitle;
      
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('lt-LT') : '';
      const featuredText = featured ? '⭐ ' : '';
      
      return {
        title: `${featuredText}${title}`,
        subtitle: `${categoryTitle} • ${date}`,
        media,
      }
    },
  },
}) 