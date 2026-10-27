export default function Home() {
  return (
    <main>
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#171B1A]">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#6B7474]">
            Financial overview
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F1F0] text-sm font-medium text-[#343B3B]">
          JD
        </div>
      </header>

      <section className="mt-12">
        <p className="text-gray-500">
          Your financial overview will appear here.
        </p>
      </section>
    </main>
  );
}