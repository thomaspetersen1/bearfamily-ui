import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Sidebar from "../components/Sidebar";
import HelpMenu from "../components/HelpMenu";

interface Service {
  id: string;
  label: string;
  icon: string;
  description: string;
  mdFile: string;
}

const services: Service[] = [
  {
    id: "vault",
    label: "Vault",
    icon: "lock_person",
    description:
      "Password manager — store and share family passwords securely.",
    mdFile: "/instructions/vault.md",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleOpen() {
    if (!open && content === null) {
      setLoading(true);
      try {
        const res = await fetch(service.mdFile);
        setContent(await res.text());
      } catch {
        setContent("Failed to load instructions.");
      } finally {
        setLoading(false);
      }
    }
    setOpen((v) => !v);
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container overflow-hidden shadow-sm">
      {/* Card header */}
      <button
        onClick={handleOpen}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-surface-container-high transition-colors duration-150"
      >
        <span className="material-symbols-outlined text-primary text-3xl">
          {service.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-headline font-black text-lg text-on-surface tracking-tight">
            {service.label}
          </h3>
          <p className="text-sm text-on-surface-variant mt-0.5">
            {service.description}
          </p>
        </div>
        <span
          className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>

      {/* Expandable markdown content */}
      {open && (
        <div className="border-t border-outline-variant px-8 py-6">
          {loading ? (
            <p className="text-on-surface-variant text-sm">Loading...</p>
          ) : (
            <div
              className="prose prose-sm max-w-none text-on-surface
              [&_h1]:font-headline [&_h1]:font-black [&_h1]:text-2xl [&_h1]:text-primary [&_h1]:mb-4 [&_h1]:mt-0
              [&_h2]:font-headline [&_h2]:font-bold [&_h2]:text-base [&_h2]:text-on-surface [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:mt-6 [&_h2]:mb-2
              [&_p]:text-on-surface-variant [&_p]:leading-relaxed
              [&_li]:text-on-surface-variant [&_li]:leading-relaxed
              [&_a]:text-primary [&_a]:underline
              [&_code]:bg-surface-container-highest [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:text-on-surface
            "
            >
              <ReactMarkdown>{content ?? ""}</ReactMarkdown>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Instructions() {
  useEffect(() => {
    document.title = "Instructions — Bear Family";
    return () => {
      document.title = "Bear Family";
    };
  }, []);

  return (
    <>
      <Sidebar />

      <main className="md:ml-64 min-h-screen pt-16 md:pt-0 overflow-y-auto">
        <div className="p-6 md:p-12 max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-5xl font-headline font-black text-primary tracking-tighter mb-3">
              Instructions
            </h2>
            <p className="text-on-surface-variant text-base">
              Setup guides and usage info for each Bear Family service.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </main>

      <HelpMenu />
    </>
  );
}
