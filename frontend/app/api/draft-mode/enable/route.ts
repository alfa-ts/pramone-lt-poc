import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { NextRequest, NextResponse } from "next/server";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

/**
 * defineEnableDraftMode() is used to enable draft mode. Set the route of this file
 * as the previewMode.enable option for presentationTool in your sanity.config.ts
 * Learn more: https://github.com/sanity-io/next-sanity?tab=readme-ov-file#5-integrating-with-sanity-presentation-tool--visual-editing
 */

// Create a custom GET handler that checks for production environment
export async function GET(request: NextRequest) {
  // Prevent draft mode from being enabled in production
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { message: 'Draft mode is disabled in production' },
      { status: 403 }
    );
  }

  // In non-production environments, use the standard draft mode handler
  const { GET: draftModeHandler } = defineEnableDraftMode({
    client: client.withConfig({ token }),
  });
  
  return draftModeHandler(request);
}
