import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

/**
 * API route to manually disable draft mode
 * Useful for debugging or emergency situations
 */
export async function POST() {
  try {
    (await draftMode()).disable();
    
    return NextResponse.json(
      { 
        message: 'Draft mode has been disabled',
        success: true 
      }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Failed to disable draft mode',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  const { isEnabled } = await draftMode();
  
  return NextResponse.json(
    { 
      draftMode: isEnabled,
      environment: process.env.NODE_ENV
    }, 
    { status: 200 }
  );
} 