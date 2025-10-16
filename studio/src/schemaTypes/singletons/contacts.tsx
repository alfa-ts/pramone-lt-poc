import {defineArrayMember, defineField, defineType} from 'sanity'

// Contacts page singleton used to control manual order by drag-and-drop via reference array
export const contactsPage = defineType({
  name: 'contactsPage',
  title: 'Kontaktai (puslapis)',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Rikiavimas (nutempkite, kad pakeistumėte tvarką)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'contact'}],
          options: {disableNew: false},
        }),
      ],
      validation: (rule) => rule.unique(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Kontaktų tvarka'}
    },
  },
})


