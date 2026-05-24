import Sidebar from '../components/Sidebar'
import HelpMenu from '../components/HelpMenu'

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="md:ml-64 h-dvh pt-16 md:pt-0 overflow-hidden">
        <div className="p-6 md:p-12 max-w-7xl mx-auto h-full overflow-hidden flex flex-col">
          {/* Page Header */}
          <div className="mb-6 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary tracking-tighter mb-4 whitespace-nowrap">
              Welcome Home
            </h2>
          </div>

          {/* Hero Canvas */}
          <div className="relative w-full flex-1 min-h-0 rounded-xl bg-surface-container-highest overflow-hidden shadow-sm flex items-center justify-center border-2 border-dashed border-outline-variant/40">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary via-surface-container to-tertiary" />
            <div className="relative z-10 text-center px-6">
              <h3 className="text-2xl font-headline font-bold text-on-surface-variant mb-2">
                Picture Placeholder
              </h3>
            </div>
          </div>
        </div>
      </main>

      <HelpMenu />
    </>
  )
}
