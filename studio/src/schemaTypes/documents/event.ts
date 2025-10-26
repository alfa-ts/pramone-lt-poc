import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Renginys',
  icon: CalendarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pavadinimas',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Nuoroda (slug)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'date',
      description: 'Pasirinkite šį metodą su lauku „Laikas“, arba naudokite Pradžia/Pabaiga.',
      validation: (Rule) =>
        Rule.custom((date, context) => {
          const doc: any = context?.document || {};
          const hasRange = !!doc.startAt && !!doc.endAt;
          const hasDateTime = !!date && !!doc.time;
          if (hasRange || hasDateTime) return true;
          return 'Nurodykite datą ir laiką arba pradžią ir pabaigą';
        }),
    }),
    defineField({
      name: 'startAt',
      title: 'Pradžia (data ir laikas)',
      type: 'datetime',
      description: 'Alternatyva laukams „Data“ ir „Laikas“.',
      validation: (Rule) =>
        Rule.custom((startAt, context) => {
          const doc: any = context?.document || {};
          if (doc.endAt && !startAt) {
            return 'Įveskite pradžios datą ir laiką';
          }
          return true;
        }),
    }),
    defineField({
      name: 'endAt',
      title: 'Pabaiga (data ir laikas)',
      type: 'datetime',
      description: 'Privaloma, jei nurodyta pradžia.',
      validation: (Rule) =>
        Rule.custom((endAt, context) => {
          const doc: any = context?.document || {};
          if (doc.startAt && !endAt) {
            return 'Įveskite pabaigos datą ir laiką, arba vietoj to naudokite Datą ir Laiką';
          }
          return true;
        }),
    }),
    defineField({
      name: 'time',
      title: 'Laikas',
      type: 'string',
      description: 'Pvz.: 9:00 – 17:00. Būtina, jei užpildyta „Data“',
      validation: (Rule) =>
        Rule.custom((time, context) => {
          const doc: any = context?.document || {};
          if (doc.date && !time && !(doc.startAt && doc.endAt)) {
            return 'Įveskite laiką arba naudokite Pradžia/Pabaiga';
          }
          return true;
        }),
    }),
    defineField({
      name: 'location',
      title: 'Vieta',
      type: 'string',
    }),
    defineField({
      name: 'locationLat',
      title: 'Vietos platuma (latitude)',
      type: 'number',
      description: 'Neprivaloma. Naudojama Google žemėlapiui rodyti.',
    }),
    defineField({
      name: 'locationLng',
      title: 'Vietos ilguma (longitude)',
      type: 'number',
      description: 'Neprivaloma. Naudojama Google žemėlapiui rodyti.',
    }),
    defineField({
      name: 'organizers',
      title: 'Organizatoriai',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Nuotraukos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'excerpt',
      title: 'Trumpas aprašas (sąrašui)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Pagrindinis tekstas',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
      ],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'images.0', date: 'date'},
    prepare({title, media, date}) {
      return {title, subtitle: date, media}
    },
  },
})


