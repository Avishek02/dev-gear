import { NextResponse } from "next/server";

export async function GET() {
  const devTools = [
    { id: 1, name: "Cursor AI", category: "IDE", rating: 4.9, description: "The AI-first code editor.", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400" },
    { id: 2, name: "DaisyUI", category: "CSS Library", rating: 4.8, description: "Component library for Tailwind CSS.", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400" },
    { id: 3, name: "Supabase", category: "Database", rating: 4.7, description: "Firebase alternative for backend.", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400" }
  ];

  return NextResponse.json(devTools);
}