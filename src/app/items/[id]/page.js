"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';

// dataset of developer tools
const devTools = [
  { id: 1, name: "Cursor AI", category: "IDE", rating: 4.9, description: "The AI-first code editor built for pair programming. It helps you write, edit, and chat with your code like never before.", fullInfo: "Cursor is a fork of VS Code that integrates powerful AI models to suggest code changes and explain complex logic.", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800" },
  { id: 2, name: "DaisyUI", category: "CSS Library", rating: 4.8, description: "The most popular component library for Tailwind CSS.", fullInfo: "DaisyUI adds clean, semantic class names to Tailwind CSS, making your HTML smaller and development faster.", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800" },
  { id: 3, name: "Supabase", category: "Database", rating: 4.7, description: "The open source Firebase alternative for backend.", fullInfo: "Supabase provides a full Postgres database, authentication, instant APIs, edge functions, and real-time subscriptions.", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" },
  { id: 4, name: "Vercel", category: "Deployment", rating: 5.0, description: "The platform for frontend teams to ship fast.", fullInfo: "Vercel is optimized for Next.js and provides a seamless workflow for previewing and deploying frontend applications.", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800" }
];

export default function DetailsPage() {
  const { id } = useParams();
  
  // search for the tool by id
  const tool = devTools.find((item) => item.id === parseInt(id));

  if (!tool) {
    return <div className="text-center py-20">Tool not found!</div>;
  }

  return (
    <div className="container mx-auto p-10 min-h-screen">
      <Link href="/items" className="btn btn-ghost mb-6">← Back to Toolkit</Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <img src={tool.img} alt={tool.name} className="rounded-3xl shadow-2xl w-full h-96 object-cover" />
        
        <div className="space-y-6">
          <div className="badge badge-primary badge-lg">{tool.category}</div>
          <h1 className="text-5xl font-black">{tool.name}</h1>
          <p className="text-2xl font-bold text-primary">Rating: ⭐ {tool.rating}</p>
          <div className="divider"></div>
          <p className="text-xl opacity-80 leading-relaxed">{tool.description}</p>
          <p className="bg-base-200 p-6 rounded-2xl italic">{tool.fullInfo}</p>
          
          <div className="flex gap-4 pt-6">
            <button className="btn btn-primary btn-lg">Official Website</button>
            <button className="btn btn-outline btn-lg">Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}