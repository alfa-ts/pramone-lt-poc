// Do not import "server-only" because this module is referenced by both
// server and client contexts via the live preview utilities.
export const token = process.env.SANITY_API_READ_TOKEN;

// Avoid throwing at build time in client bundles; the live utilities will
// handle absence of token gracefully unless draft/preview is enabled.
