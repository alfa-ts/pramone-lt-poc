import {defineField, defineType} from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Kontaktinė informacija (puslapis)',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Adresas',
      type: 'string',
      description: 'Fizinis adresas, rodomas puslapyje',
    }),
    defineField({
      name: 'phone',
      title: 'Kontaktinis telefonas',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'El. pašto adresas',
      type: 'string',
      validation: (rule) => rule.email().error('Neteisingas el. pašto formatas'),
    }),
    defineField({
      name: 'googleAddress',
      title: 'Google žemėlapio adresas / užklausa',
      type: 'string',
      description:
        'Tekstas, naudojamas Google Maps paieškai (pvz., "Asklepios Tower, Vilnius"). Jei neįrašysite, bus naudojamas laukelis "Adresas".',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Kontaktinė informacija'}
    },
  },
})


