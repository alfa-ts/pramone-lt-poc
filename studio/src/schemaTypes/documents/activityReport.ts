import {defineField, defineType} from 'sanity'

export const activityReport = defineType({
  name: 'activityReport',
  title: 'Veiklos ataskaita',
  type: 'document',
  fields: [
    defineField({
      name: 'period',
      title: 'Laikotarpis (pvz. 2015–2016)',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(32),
      description:
        'Įveskite ataskaitos laikotarpį, pvz.: 2015–2016, 2021, 2022 ir pan.',
    }),
    defineField({
      name: 'file',
      title: 'Ataskaitos failas (PDF)',
      type: 'file',
      options: {storeOriginalFilename: true},
      validation: (Rule) => Rule.required(),
      description: 'Įkelkite veiklos ataskaitą (pageidautina PDF formatu).',
    }),
  ],
  preview: {
    select: {title: 'period', filename: 'file.asset->originalFilename'},
    prepare(selection) {
      const {title, filename} = selection as {title?: string; filename?: string}
      return {
        title: title || 'Neįvardintas laikotarpis',
        subtitle: filename || 'Failas neįkeltas',
      }
    },
  },
})


