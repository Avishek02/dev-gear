import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("devstack_db");
    
    // to find all tools
    const tools = await db.collection("tools").find({}).toArray();
    
    return NextResponse.json(tools);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tools" }, { status: 500 });
  }
}