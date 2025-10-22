import {defineField, defineType} from 'sanity'

export const membershipInfo = defineType({
  name: 'membershipInfo',
  title: 'Narystė – Kaip tapti nariu',
  type: 'document',
  fields: [
    defineField({
      name: 'whyJoinTitle',
      title: 'Kodėl verta tapti KKPDA nariu? – pavadinimas',
      type: 'string',
      initialValue: 'Kodėl verta tapti KKPDA nariu?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whyJoinText',
      title: 'Kodėl verta – tekstas',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'whyJoinFile',
      title: 'Kodėl verta – papildomas failas (nebūtina)',
      type: 'file',
      options: {storeOriginalFilename: true},
    }),

    defineField({
      name: 'benefitsTitle',
      title: 'Narystės privalumai – pavadinimas',
      type: 'string',
      initialValue: 'Narystės Kauno krašto pramoninkų ir darbdavių asociacijoje privalumai',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefitsText',
      title: 'Privalumai – tekstas',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'benefitsFile',
      title: 'Privalumai – papildomas failas (nebūtina)',
      type: 'file',
      options: {storeOriginalFilename: true},
    }),

    defineField({
      name: 'feeTitle',
      title: 'Koks yra nario mokestis? – pavadinimas',
      type: 'string',
      initialValue: 'Koks yra KKPDA nario mokestis?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feeText',
      title: 'Nario mokestis – tekstas',
      type: 'text',
    }),
    defineField({
      name: 'feeFile',
      title: 'Nario mokestis – papildomas failas (nebūtina)',
      type: 'file',
      options: {storeOriginalFilename: true},
    }),

    defineField({
      name: 'requiredDocumentsTitle',
      title: 'Kokie dokumentai reikalingi? – pavadinimas',
      type: 'string',
      initialValue: 'Kokie dokumentai reikalingi?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'requiredDocuments',
      title: 'Dokumentų sąrašas',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'documentItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Pavadinimas',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Aprašymas (nebūtina)',
              type: 'text',
            }),
            defineField({
              name: 'file',
              title: 'Failas',
              type: 'file',
              options: {storeOriginalFilename: true},
            }),
          ],
          preview: {
            select: {title: 'title', file: 'file.asset->originalFilename'},
            prepare({title, file}) {
              return {title: title || 'Dokumentas', subtitle: file || 'Failas'}
            },
          },
        },
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Narystė – Kaip tapti nariu'})},
})


