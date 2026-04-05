const navItems = [
  { icon: "dashboard", label: "Dashboard", href: "#", active: true },
  {
    icon: "lock_person",
    label: "Vault",
    href: "https://vault.bearfamily.net",
    active: true,
  },
  { icon: "build", label: "More Services Soon", href: "#", active: false },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 px-6 bg-surface shadow-[4px_0_24px_rgba(27,29,14,0.06)] z-50">
      {/* Brand */}
      <div className="mb-12">
        <h1 className="text-2xl font-headline font-black text-primary leading-none">
          Bear Family
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map(({ icon, label, href, active }) =>
          active ? (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 py-2 pl-4 text-primary font-bold border-l-4 border-primary transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-headline font-bold text-base uppercase tracking-tight">
                {label}
              </span>
            </a>
          ) : (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 py-2 pl-5 text-tertiary opacity-80 hover:opacity-100 hover:bg-surface-variant rounded-lg transition-colors duration-200"
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-headline font-bold text-base uppercase tracking-tight">
                {label}
              </span>
            </a>
          ),
        )}
      </nav>
    </aside>
  );
}
