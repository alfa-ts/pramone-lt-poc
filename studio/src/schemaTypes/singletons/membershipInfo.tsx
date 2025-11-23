import {defineField, defineType} from 'sanity'

export const membershipInfo = defineType({
  name: 'membershipInfo',
  title: 'Narystė – Kaip tapti nariu',
  type: 'document',
  fields: [
    defineField({
      name: 'whyJoinText',
      title: 'Kodėl verta tapti KKPDA nariu? – tekstas',
      type: 'blockContent',
    }),

    defineField({
      name: 'benefitsText',
      title: 'Narystės privalumai – tekstas',
      type: 'text',
      rows: 8,
    }),

    defineField({
      name: 'feeText',
      title: 'Koks yra nario mokestis? – tekstas',
      type: 'text',
    }),
    defineField({
      name: 'feeImage',
      title: 'Nario mokestis – paveikslėlis (nebūtina)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'requiredDocuments',
      title: 'Kokie dokumentai reikalingi? – dokumentų sąrašas',
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


