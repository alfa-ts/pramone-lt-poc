import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
// Removed: contacts settings singleton no longer used

export const leadershipQuery = defineQuery(`
  *[_type == "leadership"] | order(role asc, sortOrder asc, name asc) {
    _id,
    name,
    position,
    role,
    "photo": photo{
      asset->{
        _id,
        url
      },
      alt
    },
    sortOrder,
    phone,
    email
  }
`);

export const newsQuery = defineQuery(`
  *[_type == "news"] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    type,
    isFeatured,
    excerpt,
    "coverImage": coverImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  }
`);

export const allNewsQuery = defineQuery(`
  *[_type == "news"] | order(isFeatured desc, publishedAt desc) {
    _id,
    title,
    slug,
    type,
    isFeatured,
    excerpt,
    "coverImage": coverImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    eventStartDate,
    eventEndDate,
    organizers,
    location,
    googleMapsLocation
  }
`);

export const recentNewsQuery = defineQuery(`
  *[_type == "news"] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    type,
    publishedAt
  }
`);

export const singleNewsQuery = defineQuery(`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    type,
    excerpt,
    content,
    "coverImage": coverImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    eventStartDate,
    eventEndDate,
    organizers,
    location,
    googleMapsLocation,
    entrance,
    registrationUrl,
    timeSlots,
    program,
    "documents": documents[]{
      title,
      "file": file.asset->{
        _id,
        url,
        originalFilename,
        size
      }
    },
    additionalInfo
  }
`);

export const pastPresidentsQuery = defineQuery(`
  *[_type == "pastPresident"] | order(startYear asc) {
    _id,
    name,
    startYear,
    endYear
  }
`);

export const membersCountQuery = defineQuery(`
  count(*[_type == "member"])
`);

export const membersQuery = defineQuery(`
  *[_type == "member"] | order(company asc) {
    _id,
    person,
    title,
    company,
    address,
    activity,
    "logo": logo{
      asset->{
        _id,
        url
      },
      alt
    }
  }
`);

export const strategicDirectionsQuery = defineQuery(`
  *[_type == "strategicDirection"] | order(coalesce(sortOrder, 9999) asc, _createdAt asc) {
    _id,
    title,
    sortOrder
  }
`);

export const partnersQuery = defineQuery(`
  {
    "cooperate": *[_type == "partner" && group == "cooperate"] | order(coalesce(sortOrder, 9999) asc, title asc) {
      _id,
      title,
      "logo": logo.asset->url,
      extra,
      isMinistry
    },
    "agreements": *[_type == "partner" && group == "agreements"] | order(coalesce(sortOrder, 9999) asc, title asc) {
      _id,
      title,
      "logo": logo.asset->url,
      extra,
      isMinistry
    }
  }
`);

export const contactInfoQuery = defineQuery(`
  *[_type == "contactInfo"][0] {
    address,
    phone,
    email,
    googleAddress
  }
`);

export const legalDocumentsQuery = defineQuery(`
  *[_type == "istatai"][0] {
    "statutesUrl": statutesFile.asset->url,
    "statutesName": statutesFile.asset->originalFilename,
    "ethicsUrl": ethicsFile.asset->url,
    "ethicsName": ethicsFile.asset->originalFilename
  }
`);

export const activityReportsQuery = defineQuery(`
  *[_type == "activityReport"] | order(_createdAt asc) {
    _id,
    period,
    "fileUrl": file.asset->url,
    "fileName": file.asset->originalFilename,
    _createdAt
  }
`);

export const eventsListQuery = defineQuery(`
  *[_type == "event" &&
    (!defined($from) || $from == null || coalesce(startAt, dateTime(date)) >= dateTime($from)) &&
    (!defined($to) || $to == null || coalesce(startAt, dateTime(date)) <= dateTime($to))
  ] | order(coalesce(startAt, dateTime(date)) desc) {
    _id,
    title,
    slug,
    date,
    startAt,
    endAt,
    time,
    location,
    organizers,
    excerpt,
    "plainContent": pt::text(content),
    "cover": images[0]{ asset->{ _id, url } }
  }
`);

export const singleEventQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    startAt,
    endAt,
    time,
    location,
    locationLat,
    locationLng,
    organizers,
    excerpt,
    content,
    images[]{ asset->{ _id, url } }
  }
`);

export const membershipInfoQuery = defineQuery(`
  *[_type == "membershipInfo"][0] {
    whyJoinTitle,
    whyJoinText,
    "whyJoinFileUrl": whyJoinFile.asset->url,
    "whyJoinFileName": whyJoinFile.asset->originalFilename,
    benefitsTitle,
    benefitsText,
    "benefitsFileUrl": benefitsFile.asset->url,
    "benefitsFileName": benefitsFile.asset->originalFilename,
    feeTitle,
    feeText,
    "feeImage": feeImage{
      asset->{
        _id,
        url
      },
      alt
    },
    requiredDocumentsTitle,
    requiredDocuments[] {
      _key,
      title,
      description,
      "fileUrl": file.asset->url,
      "fileName": file.asset->originalFilename
    }
  }
`);

// Removed unused queries for pages, posts, and people since those document types are no longer needed
