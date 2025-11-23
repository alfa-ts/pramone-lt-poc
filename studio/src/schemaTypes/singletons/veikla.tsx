import {defineArrayMember, defineField, defineType} from 'sanity'

export const veikla = defineType({
  name: 'veikla',
  title: 'Veikla',
  type: 'document',
  fields: [
    defineField({
      name: 'misija',
      title: 'Misija',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: 'Asociacijos misijos aprašymas',
    }),
    defineField({
      name: 'vizija',
      title: 'Vizija',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: 'Asociacijos vizijos aprašymas',
    }),
    defineField({
      name: 'strategicDirections',
      title: 'Strateginės veiklos kryptys',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Krypties pavadinimas',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title || 'Neįvardinta kryptis',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'ataskaitos',
      title: 'Ataskaitos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'period',
              title: 'Laikotarpis',
              type: 'string',
              validation: (Rule) => Rule.required().min(4).max(32),
              description:
                'Įveskite ataskaitos laikotarpį, pvz.: 2015–2016, 2021, 2022 ir pan.',
            }),
            defineField({
              name: 'file',
              title: 'Ataskaitos failas (PDF)',
              type: 'file',
              options: {
                storeOriginalFilename: true,
                accept: '.pdf,application/pdf',
              },
              validation: (Rule) => Rule.required(),
              description: 'Įkelkite veiklos ataskaitą PDF formatu.',
            }),
          ],
          preview: {
            select: {
              period: 'period',
              filename: 'file.asset.originalFilename',
            },
            prepare(selection) {
              const {period, filename} = selection
              return {
                title: period || 'Neįvardintas laikotarpis',
                subtitle: filename || 'Failas neįkeltas',
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Veikla',
      }
    },
  },
})

