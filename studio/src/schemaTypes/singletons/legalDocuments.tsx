import {defineField, defineType} from 'sanity'

export const legalDocuments = defineType({
  name: 'istatai',
  title: 'Įstatai',
  type: 'document',
  fields: [
    defineField({
      name: 'statutesFile',
      title: 'KKPDA įstatai (PDF)',
      type: 'file',
      options: {storeOriginalFilename: true},
      description: 'Įkelkite naujausią įstatų redakciją PDF formatu',
    }),
    defineField({
      name: 'ethicsFile',
      title: 'Etikos kodeksas (PDF)',
      type: 'file',
      options: {storeOriginalFilename: true},
      description: 'Įkelkite etikos kodeksą PDF formatu',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Įstatai'}
    },
  },
})


