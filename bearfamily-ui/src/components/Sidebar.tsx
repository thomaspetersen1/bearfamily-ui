import { useState, useEffect } from "react";
import teddy from "../assets/teddy.png";

const navItems = [
  { icon: "dashboard", label: "Dashboard", href: "#", enabled: true },
  {
    icon: "lock_person",
    label: "Vault",
    href: "https://vault.bearfamily.net",
    enabled: true,
    external: true,
  },
  { icon: "menu_book", label: "Instructions", href: "#instructions", enabled: true },
  { icon: "build", label: "More Services Soon", href: "#", enabled: false },
];

export default function Sidebar() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handler = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  function isActive(href: string) {
    if (href === "#") return hash === "" || hash === "#";
    return hash === href;
  }

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 px-6 bg-surface shadow-[4px_0_24px_rgba(27,29,14,0.06)] z-50">
      {/* Brand */}
      <div className="mb-12">
        <h1 className="flex items-center gap-2 text-2xl font-headline font-black text-primary leading-none">
          <img src={teddy} alt="Teddy Bear" className="w-8 h-8 object-contain" />
          Bear Family
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map(({ icon, label, href, enabled, external }) =>
          enabled ? (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={
                isActive(href) && !external
                  ? "flex items-center gap-4 py-2 pl-4 text-primary font-bold border-l-4 border-primary transition-transform active:scale-95"
                  : "flex items-center gap-4 py-2 pl-5 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-lg transition-colors duration-200"
              }
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
