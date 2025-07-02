"use server";

import { draftMode } from "next/headers";

export async function disableDraftMode() {
  "use server";
  await Promise.allSettled([
    (await draftMode()).disable(),
    // Simulate a delay to show the loading state
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);
}

export async function ensureDraftModeDisabledInProduction() {
  "use server";
  
  // Automatically disable draft mode if we're in production and it's enabled
  if (process.env.NODE_ENV === 'production') {
    const { isEnabled } = await draftMode();
    if (isEnabled) {
      (await draftMode()).disable();
      console.warn('Draft mode was enabled in production and has been automatically disabled');
    }
  }
}
