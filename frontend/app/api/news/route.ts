import { client } from "@/sanity/lib/client";
import { allNewsQuery } from "@/sanity/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await client.fetch(allNewsQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

