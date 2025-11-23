import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import { member } from './documents/member'
import { leadership } from './documents/leadership'
import { news } from './documents/news'
import { strategicDirection } from './documents/strategicDirection'
import { activityReport } from './documents/activityReport'
import { contactInfo } from './singletons/contactInfo'
import { legalDocuments } from './singletons/legalDocuments'
import { membershipInfo } from './singletons/membershipInfo'
import { istorija } from './singletons/istorija'
import { partneriai } from './singletons/partneriai'
// Removed contactsSettings singleton, pastPresident document, and partner document (replaced by partneriai singleton)

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  contactInfo,
  legalDocuments,
  membershipInfo,
  istorija,
  partneriai,
  // Documents
  member,
  leadership,
  news,
  strategicDirection,
  activityReport,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
