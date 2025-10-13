import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const pastPresident = defineType({
  name: 'pastPresident',
  title: 'Buvę prezidentai',
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
      name: 'startYear',
      title: 'Pradžios metai',
      type: 'number',
      validation: (rule) => rule.required().min(1930).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'endYear',
      title: 'Pabaigos metai',
      type: 'number',
      description: 'Palikite tuščią, jei tai dabartinis prezidentas',
      validation: (rule) => rule.min(1930).max(new Date().getFullYear()),
    }),
  ],
  orderings: [
    {
      title: 'Pagal pradžios metus',
      name: 'byStartYear',
      by: [
        {field: 'startYear', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      startYear: 'startYear',
      endYear: 'endYear',
    },
    prepare({title, startYear, endYear}) {
      const period = endYear ? `${startYear} - ${endYear}` : `${startYear} - dabartis`
      return {
        title,
        subtitle: period,
      }
    },
  },
})

