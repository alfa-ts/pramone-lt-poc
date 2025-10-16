import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Kontaktai',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Įrašo pavadinimas (rodoma viršuje ir sąrašuose)',
      type: 'string',
      description:
        'Jei neįrašysite – bus rodomas automatiškai sudarytas pavadinimas pagal tipą (vardas arba adresas).',
    }),
    defineField({
      name: 'orderRank',
      title: 'Rikiavimas (drag & drop)',
      type: 'string',
      hidden: true, // managed by orderable plugin
    }),
    defineField({
      name: 'kind',
      title: 'Įrašo tipas',
      type: 'string',
      initialValue: 'person',
      options: {
        list: [
          {title: 'Asmuo', value: 'person'},
          {title: 'Adresas', value: 'address'},
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Vardas ir pavardė',
      type: 'string',
      hidden: ({parent}) => parent?.kind !== 'person',
      validation: (rule) => rule.custom((val, ctx) => {
        return ctx.parent?.kind === 'person' ? (!!val || 'Privaloma nurodyti asmeniui') : true
      }),
    }),
    defineField({
      name: 'position',
      title: 'Pareigos',
      type: 'string',
      hidden: ({parent}) => parent?.kind !== 'person',
      validation: (rule) => rule.custom((val, ctx) => {
        return ctx.parent?.kind === 'person' ? (!!val || 'Privaloma nurodyti asmeniui') : true
      }),
    }),
    defineField({
      name: 'phone',
      title: 'Telefonas',
      type: 'string',
      hidden: ({parent}) => parent?.kind !== 'person',
    }),
    defineField({
      name: 'email',
      title: 'El. paštas',
      type: 'string',
      hidden: ({parent}) => parent?.kind !== 'person',
      validation: (rule) => rule.custom((val, ctx) => {
        if (ctx.parent?.kind === 'person') {
          return (!!val && /.+@.+\..+/.test(val)) || 'Neteisingas el. pašto adresas'
        }
        return true
      }),
    }),
    defineField({
      name: 'address',
      title: 'Adresas',
      type: 'string',
      description: 'Bendras korespondencijos adresas (naudojamas tik „Adresas“ tipe).',
      hidden: ({parent}) => parent?.kind !== 'address',
      validation: (rule) => rule.custom((val, ctx) => {
        return ctx.parent?.kind === 'address' ? (!!val || 'Nurodykite adresą') : true
      }),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Rikiavimo tvarka',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Pagal tvarką',
      name: 'order',
      by: [
        {field: 'sortOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {
      manualTitle: 'title',
      name: 'name',
      position: 'position',
      address: 'address',
      kind: 'kind',
    },
    prepare({manualTitle, name, position, address, kind}) {
      const autoTitle = kind === 'address' ? address : name
      return {
        title: manualTitle || autoTitle || 'Kontaktas',
        subtitle: kind === 'address' ? 'Adresas' : position,
      }
    },
  },
})


