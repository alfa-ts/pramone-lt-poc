import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const member = defineType({
  name: 'member',
  title: 'Nariai',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'person',
      title: 'Asmuo',
      type: 'string',
      description: 'Nario vardas ir pavardė',
    }),
    defineField({
      name: 'title',
      title: 'Pareigos',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Įmonė',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Adresas',
      type: 'string',
    }),
    defineField({
      name: 'activity',
      title: 'Veikla',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logotipas',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternatyvus tekstas',
          description: 'Aprašo įmonės logotipą. Sanity AI gali automatiškai sugeneruoti aprašymą.',
          placeholder: 'Pvz: [Įmonės pavadinimas] logotipas',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.logo as any)?.asset?._ref && !alt) {
                return {
                  message: 'Rekomenduojama nurodyti alternatyvų tekstą',
                  level: 'warning'
                }
              }
              return true
            })
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'person',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
