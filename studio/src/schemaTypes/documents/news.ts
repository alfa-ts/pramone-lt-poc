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
      name: 'type',
      title: 'Tipas',
      type: 'string',
      options: {
        list: [
          {title: 'Naujiena', value: 'naujiena'},
          {title: 'Renginys', value: 'renginys'},
        ],
        layout: 'radio',
      },
      initialValue: 'naujiena',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Rodomas viršuje',
      type: 'boolean',
      description: 'Pažymėkite, jei šis įrašas turėtų būti rodomas kaip pagrindinis viršuje puslapio. Tik vienas įrašas gali būti pažymėtas vienu metu.',
      initialValue: false,
      validation: (rule) =>
        rule.custom(async (isFeatured, context) => {
          if (!isFeatured) return true;

          const {document, getClient} = context;
          const client = getClient({apiVersion: '2023-01-01'});

          // Get the current document ID (without 'drafts.' prefix)
          const currentId = document?._id?.replace('drafts.', '');

          // Check if there's another document with isFeatured = true
          const existingFeatured = await client.fetch(
            `*[_type == "news" && isFeatured == true && !(_id in [$draftId, $publishedId])][0]`,
            {
              draftId: `drafts.${currentId}`,
              publishedId: currentId
            }
          );

          if (existingFeatured) {
            return 'Jau yra kitas įrašas pažymėtas kaip rodomas viršuje. Pirmiausia atžymėkite tą įrašą.';
          }

          return true;
        }),
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
          description: 'Aprašo nuotrauką. Palikus tuščią, Sanity AI automatiškai sugeneruos aprašymą.',
          placeholder: 'Pvz: Nuotrauka apie...',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return {
                  message: 'Rekomenduojama nurodyti alternatyvų tekstą geresniam prieinamumui',
                  level: 'warning'
                }
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
      type: 'type',
      isFeatured: 'isFeatured',
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare({title, type, isFeatured, media, publishedAt}) {
      const typeLabel = type === 'naujiena' ? 'Naujiena' : type === 'renginys' ? 'Renginys' : 'Nenurodyta';
      const featuredLabel = isFeatured ? '⭐ Viršuje' : '';
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('lt-LT') : '';
      
      const subtitle = featuredLabel 
        ? `${typeLabel} • ${featuredLabel} • ${date}`
        : `${typeLabel} • ${date}`;
      
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}) 