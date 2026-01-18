"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function ItemsPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 font-bold">Loading Tools...</div>;

  return (
    <div className="container mx-auto p-10 min-h-screen">
      <h1 className="text-4xl font-black mb-10 text-center uppercase">DevStack Toolkit</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map(tool => (
          <div key={tool.id} className="card bg-base-100 shadow-xl border border-base-300">
            <figure><img src={tool.img} alt={tool.name} className="h-52 w-full object-cover" /></figure>
            <div className="card-body">
              <div className="badge badge-primary font-bold">{tool.category}</div>
              <h2 className="card-title text-2xl">{tool.name}</h2>
              <p className="opacity-70 text-sm">{tool.description}</p>
              <div className="card-actions justify-end mt-5">
                <Link href={`/items/${tool.id}`} className="btn btn-primary btn-sm">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}