import {CogIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'assist.instruction.context']

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      // Contacts singleton
      S.listItem()
        .title('Kontaktai')
        .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
      // Įstatai singleton
      S.listItem()
        .title('Įstatai')
        .child(S.document().schemaType('istatai').documentId('istatai')),
      // Rest of types excluding disabled ones and the explicitly added contact list
      ...S.documentTypeListItems()
        .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()) && listItem.getId() !== 'contact' && listItem.getId() !== 'contactsSettings' && listItem.getId() !== 'contactsPage' && listItem.getId() !== 'contactInfo' && listItem.getId() !== 'istatai'),
      // Settings Singleton
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])
