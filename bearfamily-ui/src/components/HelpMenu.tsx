import { useState } from "react";

const helpItems = [
  { icon: "menu_book", label: "Instructions", href: "#instructions" },
];

export default function HelpMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Options */}
      <div
        className={`
          flex flex-col items-end gap-2 pb-1
          transition-all duration-200 ease-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}
        `}
      >
        {helpItems.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-surface border border-outline-variant/40 text-on-surface px-4 py-2 rounded-full shadow-md text-sm font-body font-medium whitespace-nowrap hover:bg-surface-container transition-colors"
          >
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontSize: "18px" }}
            >
              {icon}
            </span>
            {label}
          </a>
        ))}
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Help menu"
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${open ? "rotate-[30deg]" : ""}`}
        >
          help
        </span>
      </button>
    </div>
  );
}
