const helpItems = [
  { icon: 'menu_book', label: 'Instructions', href: '#' },
  { icon: 'quiz',      label: 'FAQ',          href: '#' },
  { icon: 'mail',      label: 'Contact',      href: '#' },
]

export default function HelpMenu() {
  return (
    <div className="group fixed bottom-4 -right-10">
      {/* Options — slide up when the group is hovered */}
      <div
        className="
          flex flex-col items-end gap-2 pb-3
          opacity-0 translate-y-2 pointer-events-none
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          transition-all duration-200 ease-out
        "
      >
        {helpItems.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2 bg-surface border border-outline-variant/40 text-on-surface px-4 py-2 rounded-full shadow-md text-sm font-body font-medium whitespace-nowrap hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
              {icon}
            </span>
            {label}
          </a>
        ))}
      </div>

      {/* Trigger button */}
      <button
        className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Help menu"
      >
        <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[30deg]">
          help
        </span>
      </button>
    </div>
  )
}
