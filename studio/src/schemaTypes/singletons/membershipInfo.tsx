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
      title: 'Narystės naudos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'benefitItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Pavadinimas',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description1',
              title: 'Aprašymas 1 (nebūtina)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'description2',
              title: 'Aprašymas 2 (nebūtina)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'description3',
              title: 'Aprašymas 3 (nebūtina)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'description4',
              title: 'Aprašymas 4 (nebūtina)',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              description1: 'description1',
            },
            prepare({title, description1}) {
              return {
                title: title || 'Nauda',
                subtitle: description1 ? description1.substring(0, 50) + '...' : 'Nėra aprašymo',
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'entryFee',
      title: 'Stojamasis įnašas (eurais)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'annualFeeDescription',
      title: 'Metinio įnašo aprašymas',
      type: 'text',
      rows: 2,
      placeholder: 'Pvz.: Nustatomas pagal 2022 m. gruodžio 5 d. konferencijos sprendimą',
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


