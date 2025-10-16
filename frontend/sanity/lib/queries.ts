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
    sortOrder
  }
`);

export const newsQuery = defineQuery(`
  *[_type == "news"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    category,
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
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
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

export const singleNewsQuery = defineQuery(`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    content,
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
      extra
    },
    "agreements": *[_type == "partner" && group == "agreements"] | order(coalesce(sortOrder, 9999) asc, title asc) {
      _id,
      title,
      extra
    }
  }
`);

// Manual order via singleton array of references:
// 1) If contactsPage exists and has items, return contacts in that specific order
// 2) Otherwise, fall back to createdAt order
export const contactsQuery = defineQuery(`
  {
    "ordered": *[_type == "contactsPage" && _id == "contactsPage"][0].items[]-> {
      _id, kind, name, position, phone, email, address
    },
    "fallback": *[_type == "contact"] | order(_createdAt asc) {
      _id, kind, name, position, phone, email, address
    }
  }
`);

// Removed unused queries for pages, posts, and people since those document types are no longer needed
