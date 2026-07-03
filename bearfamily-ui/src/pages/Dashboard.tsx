import Sidebar from "../components/Sidebar";
import HelpMenu from "../components/HelpMenu";
import campsiteLandscape from "../assets/campsite-landscape.webp";
import campsitePortrait from "../assets/campsite-portrait.webp";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="md:ml-64 h-dvh pt-16 md:pt-0 overflow-hidden">
        <div className="p-6 md:p-12 max-w-7xl mx-auto h-full overflow-hidden flex flex-col">
          {/* Page Header */}
          <div className="mb-2 md:mb-4">
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary tracking-tighter whitespace-nowrap">
              Welcome Home
            </h2>
            <p className="text-sm md:text-lg font-headline font-semibold text-on-surface-variant tracking-tight">
              Bear Family
            </p>
          </div>

          {/* Hero Canvas */}
          <div className="relative w-full flex-1 min-h-0">
            {/* Desktop: wide 16:9 campsite art fills the frame */}
            <img
              src={campsiteLandscape}
              alt="Bear family at the campsite"
              className="hidden md:block w-full h-full object-cover object-center rounded-2xl shadow-md"
            />
            {/* Mobile: 9:16 portrait art made to fit the tall phone canvas */}
            <img
              src={campsitePortrait}
              alt="Bear family at the campsite"
              className="md:hidden w-full h-full object-cover object-center rounded-2xl shadow-md"
            />
          </div>
        </div>
      </main>

      <HelpMenu />
    </>
  );
}
