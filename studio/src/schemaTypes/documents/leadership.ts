import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const leadership = defineType({
  name: 'leadership',
  title: 'Valdymas',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Vardas ir pavardė',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Pareigos',
      type: 'string',
      // Optional
    }),
    defineField({
      name: 'role',
      title: 'Vaidmuo asociacijoje',
      type: 'string',
      options: {
        list: [
          {title: 'Prezidentas', value: 'prezidentas'},
          {title: 'Viceprezidentas', value: 'viceprezidentas'},
          {title: 'Prezidiumo narys', value: 'prezidiumoNarys'},
          {title: 'Prezidiumo garbės narys', value: 'prezidiumoGarbesNarys'},
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Nuotrauka',
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
          description: 'Aprašo asmens nuotrauką. Sanity AI gali automatiškai sugeneruoti aprašymą.',
          placeholder: 'Pvz: Asociacijos prezidento nuotrauka',
          // Optional alt text
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Rikiavimo tvarka',
      type: 'number',
      description: 'Mažesnis skaičius = aukštesnė pozicija sąraše',
      initialValue: 0,
    }),
    defineField({
      name: 'phone',
      title: 'Telefono numeris',
      type: 'string',
      description: 'Kontaktinis telefono numeris (pvz., +370 600 12345)',
      validation: (rule) => rule.regex(/^\+?[0-9\s\-()]+$/, {
        name: 'phone',
        invert: false,
      }).error('Neteisingas telefono numerio formatas'),
    }),
    defineField({
      name: 'email',
      title: 'El. paštas',
      type: 'string',
      description: 'Kontaktinis el. pašto adresas',
      validation: (rule) => rule.email().error('Neteisingas el. pašto formatas'),
    }),
  ],
  orderings: [
    {
      title: 'Pagal vaidmenį ir tvarką',
      name: 'roleAndOrder',
      by: [
        {field: 'role', direction: 'asc'},
        {field: 'sortOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      role: 'role',
      media: 'photo',
    },
    prepare({title, subtitle, role, media}) {
      const roleTitle = role === 'prezidentas'
        ? 'Prezidentas'
        : role === 'viceprezidentas'
          ? 'Viceprezidentas'
          : role === 'prezidiumoNarys'
            ? 'Prezidiumo narys'
            : 'Prezidiumo garbės narys'
      return {
        title,
        subtitle: `${roleTitle} - ${subtitle}`,
        media,
      }
    },
  },
}) 