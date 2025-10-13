import {defineField, defineType} from 'sanity'

export const strategicDirection = defineType({
  name: 'strategicDirection',
  title: 'Strateginės veiklos kryptys',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Krypties pavadinimas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Rikiavimo tvarka',
      type: 'number',
      description: 'Mažesni skaičiai rodomi aukščiau',
    }),
  ],
  orderings: [
    {
      name: 'sortOrderAsc',
      by: [
        {field: 'sortOrder', direction: 'asc'},
        {field: '_createdAt', direction: 'asc'},
      ],
    },
  ],
})


