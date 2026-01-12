import PrimaryNav from "@/components/primary-nav";

function App() {
  return (
    <div className="px-6 py-8">
      <header className="group flex items-start sticky top-0">
        <h3 className="absolute flex items-center h-12 w-30 sm:w-40 md:w-50 lg:w-60 xl:w-72.5">
          <img src="/images/logo.svg" alt="shortly" className="block w-full" />
        </h3>
        <PrimaryNav className="grow" />
      </header>
      <main className="h-500">
        <div className="size-50 bg-body"></div>
      </main>
    </div>
  );
}

export default App;
