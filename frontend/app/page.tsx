import Sidebar from "@/components/Siderbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        <Sidebar />
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