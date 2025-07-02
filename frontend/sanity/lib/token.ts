import "server-only";

// Only use the token in non-production environments
export const token = process.env.NODE_ENV === 'production' 
  ? undefined 
  : process.env.SANITY_API_READ_TOKEN;

if (process.env.NODE_ENV !== 'production' && !token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}
