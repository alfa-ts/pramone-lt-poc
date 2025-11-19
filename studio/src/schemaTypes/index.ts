import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import { member } from './documents/member'
import { leadership } from './documents/leadership'
import { news } from './documents/news'
import { pastPresident } from './documents/pastPresident'
import { strategicDirection } from './documents/strategicDirection'
import { partner } from './documents/partner'
import { activityReport } from './documents/activityReport'
import { contactInfo } from './singletons/contactInfo'
import { legalDocuments } from './singletons/legalDocuments'
import { membershipInfo } from './singletons/membershipInfo'
// Removed contactsSettings singleton

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  contactInfo,
  legalDocuments,
  membershipInfo,
  // Documents
  member,
  leadership,
  news,
  pastPresident,
  strategicDirection,
  partner,
  activityReport,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
