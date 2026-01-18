export default function TestPage() {
  return (
    <div className="p-10 text-center bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">DaisyUI Testing</h1>
      {/* যদি এটি সুন্দর নীল বাটন হয় তবে DaisyUI কাজ করছে */}
      <button className="btn btn-primary">It Works!</button>
      
      {/* একটি কার্ড টেস্ট */}
      <div className="card w-96 bg-blue-500 shadow-xl mx-auto mt-10">
        <div className="card-body">
          <h2 className="card-title justify-center text-secondary">Styled Card</h2>
          <p>If you see this styled, DaisyUI is active.</p>
        </div>
      </div>
    </div>
  );
}