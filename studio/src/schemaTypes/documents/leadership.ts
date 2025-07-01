import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const leadership = defineType({
  name: 'leadership',
  title: 'Vadovybė',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Vardas ir pavardė',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Pareigos',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Vaidmuo asociacijoje',
      type: 'string',
      options: {
        list: [
          {title: 'Prezidentas', value: 'prezidentas'},
          {title: 'Viceprezidentas', value: 'viceprezidentas'},
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Nuotrauka',
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
              if ((context.document?.photo as any)?.asset?._ref && !alt) {
                return 'Privaloma nurodyti alternatyvų tekstą'
              }
              return true
            })
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Rikiavimo tvarka',
      type: 'number',
      description: 'Mažesnis skaičius = aukštesnė pozicija sąraše',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Pagal vaidmenį ir tvarką',
      name: 'roleAndOrder',
      by: [
        {field: 'role', direction: 'asc'},
        {field: 'sortOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      role: 'role',
      media: 'photo',
    },
    prepare({title, subtitle, role, media}) {
      const roleTitle = role === 'prezidentas' ? 'Prezidentas' : 'Viceprezidentas'
      return {
        title,
        subtitle: `${roleTitle} - ${subtitle}`,
        media,
      }
    },
  },
}) 