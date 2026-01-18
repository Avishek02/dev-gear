"use client";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function DetailsPage() {
  const { id } = useParams();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;
  if (!tool || tool.error) return <div className="text-center py-20 font-bold text-error">Tool not found!</div>;

  return (
    <div className="container mx-auto p-10 min-h-screen">
      <Link href="/items" className="btn btn-ghost mb-8 hover:bg-base-200">← Back to Toolkit</Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative group">
          <img src={tool.img} alt={tool.name} className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover border-4 border-base-200" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="space-y-8">
          <div className="badge badge-primary badge-lg p-4 font-bold uppercase tracking-widest">{tool.category}</div>
          <h1 className="text-6xl font-black tracking-tighter">{tool.name}</h1>
          
          <div className="flex items-center gap-2">
            <span className="text-3xl">⭐</span>
            <span className="text-4xl font-black text-primary">{tool.rating}</span>
            <span className="text-lg opacity-50 ml-2">/ 5.0 Rating</span>
          </div>

          <div className="divider"></div>
          
          <div>
            <h3 className="text-xl font-bold mb-3 uppercase opacity-50">About this tool</h3>
            <p className="text-xl leading-relaxed opacity-80 bg-base-200 p-8 rounded-3xl border-l-8 border-primary italic">
              "{tool.description}"
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary btn-lg flex-1 shadow-xl">Try {tool.name}</button>
            <button className="btn btn-outline btn-lg flex-1">Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}