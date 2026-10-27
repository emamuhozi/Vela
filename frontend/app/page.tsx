import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        <Sidebar />
        <section className="flex-1 p-10">
          <header className="flex items-start justify-between">
  <div>
    <h1 className="text-4xl font-semibold tracking-tight text-[#171B1A]">
      Dashboard
    </h1>

    <p className="mt-2 text-sm text-[#6B7474]">
      October 2026
      <span className="mx-3">·</span>
      Updated just now
    </p>
  </div>

  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F1F0] text-sm font-medium text-[#343B3B]">
    JD
  </div>
</header>

          <div className="mt-10">
            <p className="text-gray-500">Your financial overview will appear here.</p>
          </div>
        </section>
      </div>
    </main>
  );
}