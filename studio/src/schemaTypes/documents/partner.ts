import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partneriai',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'group',
      title: 'Grupė',
      type: 'string',
      options: {
        list: [
          {title: 'Mes bendradarbiaujame su', value: 'cooperate'},
          {title: 'Pasirašytos bendradarbiavimo sutartys', value: 'agreements'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      initialValue: 'cooperate',
    }),
    defineField({
      name: 'title',
      title: 'Pavadinimas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'extra',
      title: 'Papildoma informacija (pvz., data)',
      type: 'string',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Rikiavimo tvarka',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Pagal grupę ir tvarką',
      name: 'groupOrder',
      by: [
        {field: 'group', direction: 'asc'},
        {field: 'sortOrder', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'extra'},
  },
})


