import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import { member } from './documents/member'
import { leadership } from './documents/leadership'
import { news } from './documents/news'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  member,
  leadership,
  news,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
