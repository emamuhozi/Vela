export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        <aside className="min-h-screen w-64 border-r border-gray-200 p-6">
          <h1 className="text-2xl font-semibold">Vela</h1>

          <nav className="mt-10 space-y-4">
            <p>Dashboard</p>
            <p>Accounts</p>
            <p>Transactions</p>
            <p>Spending</p>
            <p>Settings</p>
          </nav>
        </aside>

        <section className="flex-1 p-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overview</p>
              <h2 className="text-3xl font-semibold">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
              <button>Notifications</button>
              <div>Account</div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-gray-500">Your financial overview will appear here.</p>
          </div>
        </section>
      </div>
    </main>
  );
}