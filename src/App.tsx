import { useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "search"
  | "megaphone"
  | "chart"
  | "chat"
  | "bell"
  | "arrow"
  | "users"
  | "handshake"
  | "eye"
  | "heart"
  | "calendar"
  | "location"
  | "close"
  | "menu"
  | "chevron"
  | "building"
  | "link"
  | "copy"
  | "info"
  | "send";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a2 2 0 0 0 2 2h2l8 4V5L7 9H5a2 2 0 0 0-2 2Z" />
      <path d="M7 15v4h4M19 9a4 4 0 0 1 0 6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20V7" />
      <path d="M2 20h21" />
    </>
  ),
  chat: (
    <>
      <path d="M20 15a3 3 0 0 1-3 3H8l-5 3 1.5-4A7.7 7.7 0 0 1 2 11c0-4 4-7 9-7s9 3 9 7Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  handshake: (
    <>
      <path d="m8 12 2 2a2 2 0 0 0 3 0l4-4" />
      <path d="m2 12 5-5 4 1 2-1 4 1 5 5-7 7a2 2 0 0 1-3 0L2 12Z" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  building: (
    <>
      <path d="M4 21V5l8-3v19M12 8h8v13M2 21h20" />
      <path d="M7 8h2M7 12h2M7 16h2M16 12h1M16 16h1" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
};

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navItems: { label: string; icon: IconName }[] = [
  { label: "Inicio", icon: "home" },
  { label: "Explorar emprendimientos", icon: "search" },
  { label: "Centro de promoción", icon: "megaphone" },
  { label: "Mi impacto", icon: "chart" },
  { label: "Consultas y contactos", icon: "chat" },
  { label: "Notificaciones", icon: "bell" },
];

const ventures = [
  {
    name: "Sumaq Textiles",
    sector: "Moda sostenible",
    city: "La Paz",
    initials: "ST",
    color: "bg-[#E8F0FD] text-[#1E3A8A]",
    accent: "bg-[#1E3A8A]",
    description:
      "Prendas de diseño boliviano elaboradas con fibras naturales y procesos responsables.",
  },
  {
    name: "Kawsay Foods",
    sector: "Alimentos",
    city: "Cochabamba",
    initials: "KF",
    color: "bg-[#E5F7EA] text-[#15803D]",
    accent: "bg-[#16A34A]",
    description:
      "Snacks nutritivos a base de superalimentos andinos, listos para llegar a nuevos mercados.",
  },
  {
    name: "Nexo Circular",
    sector: "Tecnología verde",
    city: "Santa Cruz",
    initials: "NC",
    color: "bg-[#F2EAFE] text-[#7C3AED]",
    accent: "bg-[#7C3AED]",
    description: "Soluciones digitales que conectan empresas con cadenas de reciclaje eficientes.",
  },
];

const products = [
  {
    name: "Bolso tejido Wayra",
    category: "Accesorios",
    price: "Bs 280",
    image:
      "https://images.unsplash.com/photo-1527383214149-cb7be04ae387?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=620",
    alt: "Bolso artesanal tejido sostenido por una persona",
  },
  {
    name: "Canasto Palma",
    category: "Hogar y decoración",
    price: "Bs 165",
    image:
      "https://images.unsplash.com/photo-1751725154557-b10ab73f1564?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=620",
    alt: "Canastos artesanales de fibras naturales",
  },
  {
    name: "Manta Andina Luru",
    category: "Textiles",
    price: "Bs 390",
    image:
      "https://images.unsplash.com/photo-1672302255324-28009cc288b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=620",
    alt: "Artesana trabajando sobre una pieza textil",
  },
  {
    name: "Set Cerámica Uma",
    category: "Hogar y decoración",
    price: "Bs 220",
    image:
      "https://images.unsplash.com/photo-1740478949628-ff562c3c3923?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=620",
    alt: "Vajilla artesanal de cerámica clara",
  },
];

function Sidebar({
  open,
  onClose,
  active,
  setActive,
}: {
  open: boolean;
  onClose: () => void;
  active: string;
  setActive: (item: string) => void;
}) {
  return (
    <>
      {open && (
        <button
          className="fixed inset-0 z-30 bg-slate-950/30 backdrop-blur-[2px] lg:hidden"
          onClick={onClose}
          aria-label="Cerrar menú"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-[#E7EAF0] bg-white px-4 py-6 transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-9 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1E3A8A] text-white shadow-sm">
              <Icon name="handshake" size={22} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#64748B]">
                Hub Empresarial
              </p>
              <p className="text-[15px] font-bold leading-tight text-[#172554]">Red de Impulso</p>
            </div>
          </div>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>

        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[.12em] text-[#94A3B8]">
          Menú principal
        </p>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const selected = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  onClose();
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[14px] font-medium transition ${selected ? "bg-[#EEF3FF] text-[#1E3A8A]" : "text-[#64748B] hover:bg-slate-50 hover:text-[#1E3A8A]"}`}
              >
                <Icon name={item.icon} size={19} />
                <span className="flex-1">{item.label}</span>
                {item.label === "Notificaciones" && (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#1E3A8A] px-1 text-[10px] font-bold text-white">
                    3
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto rounded-xl bg-[#F6F8FC] p-4">
          <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-white text-[#1E3A8A] shadow-sm">
            <Icon name="building" size={19} />
          </div>
          <p className="text-sm font-bold text-[#1E293B]">¿Necesitas orientación?</p>
          <p className="mt-1 text-xs leading-5 text-[#64748B]">
            Nuestro equipo puede ayudarte a crear nuevas conexiones.
          </p>
          <button className="mt-3 text-xs font-bold text-[#1E3A8A] hover:underline">
            Contactar al Hub
          </button>
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-[#EDF0F4] px-2 pt-5">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#DCE7FF] text-sm font-bold text-[#1E3A8A]">
            AM
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-semibold text-[#1E293B]">Ana Mendoza</p>
              <span className="shrink-0 rounded-full bg-[#E6F7EC] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[.04em] text-[#15803D]">
                Aliado de Impulso
              </span>
            </div>
            <p className="truncate text-xs text-[#94A3B8]">Inversionista aliada</p>
          </div>
          <button className="text-[#94A3B8] hover:text-[#1E3A8A]">
            <Icon name="chevron" size={17} />
          </button>
        </div>
      </aside>
    </>
  );
}

function PromotionCenter() {
  const [campaign, setCampaign] = useState("Sumaq Textiles · Colección Raíces");
  const [copied, setCopied] = useState(false);
  const [sharedProduct, setSharedProduct] = useState("");
  const promotionLink = "impulso.bo/ana/sumaq-raices";

  const copyLink = async () => {
    await navigator.clipboard?.writeText(`https://${promotionLink}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const shareCampaign = (network: string) => {
    const url = encodeURIComponent(`https://${promotionLink}`);
    const text = encodeURIComponent("Conoce la Colección Raíces de Sumaq Textiles");

    if (network === "WhatsApp") {
      window.open(`https://wa.me/?text=${text}%20${url}`, "_blank", "noopener,noreferrer");
    } else if (network === "Facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      copyLink();
    }
  };

  const shareProduct = async (name: string) => {
    if (navigator.share) {
      await navigator.share({
        title: name,
        text: `Conoce ${name}, un producto boliviano de Sumaq Textiles.`,
        url: `https://${promotionLink}`,
      });
    } else {
      await navigator.clipboard?.writeText(`Conoce ${name}: https://${promotionLink}`);
      setSharedProduct(name);
      window.setTimeout(() => setSharedProduct(""), 1800);
    }
  };

  return (
    <>
      <section className="mb-7 flex flex-col justify-between gap-5 min-[1440px]:flex-row min-[1440px]:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#16A34A]">
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            Campaña activa
          </div>
          <h1 className="text-[28px] font-bold tracking-[-.025em] text-[#172554] md:text-[34px]">
            Centro de promoción
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64748B] md:text-[15px]">
            Comparte contenido autorizado y conecta este emprendimiento con nuevas oportunidades.
          </p>
        </div>
        <label className="block w-full min-[1440px]:w-[390px]">
          <span className="mb-2 block text-xs font-semibold text-[#475569]">
            Emprendimiento o campaña que apoyas
          </span>
          <div className="relative">
            <div className="pointer-events-none absolute left-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg bg-[#EAF0FF] text-[#1E3A8A]">
              <Icon name="building" size={15} />
            </div>
            <select
              value={campaign}
              onChange={(event) => setCampaign(event.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-[#DDE3EC] bg-white pl-12 pr-10 text-sm font-semibold text-[#1E293B] outline-none transition focus:border-[#93A9DE] focus:ring-3 focus:ring-[#1E3A8A]/8"
            >
              <option>Sumaq Textiles · Colección Raíces</option>
              <option>Kawsay Foods · Sabores de origen</option>
              <option>Nexo Circular · Empresas sin residuos</option>
            </select>
            <Icon
              name="chevron"
              size={17}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#64748B]"
            />
          </div>
        </label>
      </section>

      <section className="mb-7 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            icon: "eye" as IconName,
            value: "1.248",
            label: "Visitas generadas",
            change: "+18%",
            color: "bg-[#EAF0FF] text-[#1E3A8A]",
          },
          {
            icon: "chat" as IconName,
            value: "86",
            label: "Consultas recibidas",
            change: "+12%",
            color: "bg-[#F2EAFE] text-[#7C3AED]",
          },
          {
            icon: "handshake" as IconName,
            value: "24",
            label: "Solicitudes de contacto",
            change: "+6",
            color: "bg-[#E6F7EC] text-[#15803D]",
          },
        ].map((stat) => (
          <article
            key={stat.label}
            className="flex items-center gap-4 rounded-xl border border-[#E6EAF0] bg-white p-5"
          >
            <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${stat.color}`}>
              <Icon name={stat.icon} size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold tracking-tight text-[#172554]">{stat.value}</p>
                <span className="text-[10px] font-bold text-[#16A34A]">{stat.change}</span>
              </div>
              <p className="truncate text-xs font-medium text-[#64748B]">{stat.label}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="grid grid-cols-1 items-start gap-6 min-[1440px]:grid-cols-[minmax(0,1fr)_350px]">
        <section>
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="text-xl font-bold tracking-[-.01em] text-[#172554]">
                Catálogo autorizado
              </h2>
              <p className="mt-1 text-sm text-[#64748B]">
                Productos de <span className="font-semibold text-[#475569]">{campaign}</span> listos
                para compartir.
              </p>
            </div>
            <span className="w-fit rounded-full bg-[#F0FDF4] px-3 py-1.5 text-[11px] font-bold text-[#15803D]">
              {products.length} productos publicados
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-xl border border-[#E6EAF0] bg-white transition hover:border-[#C8D4ED] hover:shadow-[0_12px_30px_rgba(30,58,138,.08)]"
              >
                <div className="relative h-44 overflow-hidden bg-[#EEF2F6]">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#15803D] shadow-sm backdrop-blur">
                    Autorizado
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium text-[#64748B]">{product.category}</p>
                  <div className="mt-1 flex items-start justify-between gap-3">
                    <h3 className="font-bold text-[#172554]">{product.name}</h3>
                    <span className="shrink-0 text-sm font-bold text-[#1E3A8A]">
                      {product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => shareProduct(product.name)}
                    className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#EEF3FF] text-xs font-bold text-[#1E3A8A] transition hover:bg-[#1E3A8A] hover:text-white"
                  >
                    <Icon name={sharedProduct === product.name ? "copy" : "send"} size={16} />
                    {sharedProduct === product.name ? "Enlace copiado" : "Compartir"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-xl border border-[#E6EAF0] bg-white p-5 min-[1440px]:sticky min-[1440px]:top-[100px]">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EAF0FF] text-[#1E3A8A]">
              <Icon name="megaphone" size={19} />
            </div>
            <div>
              <h2 className="font-bold text-[#172554]">Herramientas de difusión</h2>
              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Todo lo necesario para compartir esta campaña.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-xs font-semibold text-[#475569]">
              Tu enlace personalizado
            </label>
            <div className="flex rounded-xl border border-[#DDE3EC] bg-[#F8FAFC] p-1">
              <div className="flex min-w-0 flex-1 items-center gap-2 px-2 text-xs text-[#475569]">
                <Icon name="link" size={15} className="shrink-0 text-[#94A3B8]" />
                <span className="truncate">{promotionLink}</span>
              </div>
              <button
                onClick={copyLink}
                className={`grid h-9 min-w-9 place-items-center rounded-lg px-2 transition ${copied ? "bg-[#16A34A] text-white" : "bg-[#1E3A8A] text-white hover:bg-[#172E6E]"}`}
                aria-label="Copiar enlace"
              >
                <Icon name={copied ? "handshake" : "copy"} size={16} />
              </button>
            </div>
            <p
              className={`mt-2 h-4 text-[10px] font-semibold ${copied ? "text-[#16A34A]" : "text-[#94A3B8]"}`}
            >
              {copied
                ? "Enlace copiado al portapapeles"
                : "Tus visitas se registran desde este enlace."}
            </p>
          </div>

          <div className="my-5 border-t border-[#EDF0F4]" />
          <div className="flex items-center gap-4">
            <div className="grid h-[108px] w-[108px] shrink-0 grid-cols-7 gap-[2px] rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm">
              {Array.from({ length: 49 }, (_, index) => {
                const dark = [
                  0, 1, 2, 7, 9, 14, 15, 16, 4, 5, 6, 11, 13, 18, 19, 20, 28, 29, 30, 35, 37, 42,
                  43, 44, 24, 25, 31, 33, 38, 40, 45, 47, 48,
                ].includes(index);
                return <span key={index} className={dark ? "rounded-[1px] bg-[#172554]" : ""} />;
              })}
            </div>
            <div>
              <p className="text-sm font-bold text-[#172554]">Código QR</p>
              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Ideal para eventos, tiendas y material impreso.
              </p>
              <button className="mt-2 text-xs font-bold text-[#1E3A8A] hover:underline">
                Descargar PNG
              </button>
            </div>
          </div>

          <div className="my-5 border-t border-[#EDF0F4]" />
          <p className="mb-3 text-xs font-semibold text-[#475569]">Compartir campaña</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "WhatsApp", mark: "W", color: "hover:border-[#25D366] hover:text-[#15803D]" },
              { name: "Facebook", mark: "f", color: "hover:border-[#1877F2] hover:text-[#1E3A8A]" },
              {
                name: "Instagram",
                mark: "◎",
                color: "hover:border-[#D946EF] hover:text-[#A21CAF]",
              },
            ].map((network) => (
              <button
                key={network.name}
                onClick={() => shareCampaign(network.name)}
                className={`flex min-w-0 flex-col items-center gap-1.5 rounded-xl border border-[#E2E8F0] px-1 py-3 text-[#64748B] transition ${network.color}`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F1F5F9] text-sm font-bold">
                  {network.mark}
                </span>
                <span className="text-[9px] font-semibold">{network.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 flex gap-2 rounded-xl bg-[#F8FAFC] p-3 text-[#64748B]">
            <Icon name="info" size={17} className="mt-0.5 shrink-0 text-[#1E3A8A]" />
            <p className="text-[11px] leading-5">
              Solo se muestran contenidos publicados y autorizados por el emprendedor.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Inicio");
  const [favorites, setFavorites] = useState<string[]>(["Kawsay Foods"]);
  const [query, setQuery] = useState("");

  const toggleFavorite = (name: string) =>
    setFavorites((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#1E293B]">
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
        setActive={setActive}
      />

      <main className="min-h-screen lg:ml-[272px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#E7EAF0]/90 bg-white/90 px-5 backdrop-blur-md md:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#E2E8F0] text-[#1E3A8A] lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Icon name="menu" />
            </button>
            <div className="hidden items-center gap-2 text-sm text-[#94A3B8] md:flex">
              <span>Red comercial</span>
              <Icon name="chevron" size={14} />
              <span className="font-medium text-[#475569]">{active}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Icon
                name="search"
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en la red..."
                className="h-10 w-[235px] rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-10 pr-4 text-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#93A9DE] focus:bg-white focus:ring-3 focus:ring-[#1E3A8A]/8"
              />
            </div>
            <button
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-[#475569] transition hover:border-[#B8C7EA] hover:text-[#1E3A8A]"
              aria-label="Notificaciones"
            >
              <Icon name="bell" size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#16A34A]" />
            </button>
            <button
              onClick={() => setActive("Centro de promoción")}
              className="hidden h-10 items-center gap-2 rounded-xl bg-[#1E3A8A] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#172E6E] md:flex"
            >
              <Icon name="megaphone" size={17} />
              Promocionar
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-5 py-7 md:px-8 lg:px-10 lg:py-9">
          {active === "Centro de promoción" ? (
            <PromotionCenter />
          ) : (
            <>
              <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#16A34A]">
                    <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                    La red sigue creciendo
                  </div>
                  <h1 className="text-[28px] font-bold tracking-[-.025em] text-[#172554] md:text-[34px]">
                    Buenos días, Ana
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64748B] md:text-[15px]">
                    Conecta con emprendimientos bolivianos, crea oportunidades y acompaña su
                    crecimiento.
                  </p>
                </div>
                <button className="flex h-11 w-fit items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#334155] transition hover:border-[#93A9DE] hover:text-[#1E3A8A]">
                  <Icon name="search" size={17} />
                  Explorar emprendimientos
                </button>
              </section>

              <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 min-[1440px]:grid-cols-4">
                {[
                  {
                    icon: "users" as IconName,
                    value: "248",
                    label: "Emprendimientos activos",
                    change: "+12 este mes",
                    color: "bg-[#EAF0FF] text-[#1E3A8A]",
                  },
                  {
                    icon: "handshake" as IconName,
                    value: "34",
                    label: "Conexiones realizadas",
                    change: "+4 esta semana",
                    color: "bg-[#E6F7EC] text-[#15803D]",
                  },
                  {
                    icon: "eye" as IconName,
                    value: "1.840",
                    label: "Personas alcanzadas",
                    change: "+18% este mes",
                    color: "bg-[#F2EAFE] text-[#7C3AED]",
                  },
                  {
                    icon: "chart" as IconName,
                    value: "Bs 42k",
                    label: "Impacto movilizado",
                    change: "+9% este mes",
                    color: "bg-[#FFF3DF] text-[#C76B12]",
                  },
                ].map((stat) => (
                  <article
                    key={stat.label}
                    className="rounded-xl border border-[#E6EAF0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.02)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(30,58,138,.07)]"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className={`grid h-10 w-10 place-items-center rounded-xl ${stat.color}`}>
                        <Icon name={stat.icon} size={19} />
                      </div>
                      <span className="rounded-full bg-[#F0FDF4] px-2.5 py-1 text-[10px] font-bold text-[#15803D]">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold tracking-tight text-[#172554]">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-[#64748B]">{stat.label}</p>
                  </article>
                ))}
              </section>

              <section className="mb-8 grid grid-cols-1 gap-5 min-[1440px]:grid-cols-[1.55fr_.85fr]">
                <article className="overflow-hidden rounded-xl bg-[#1E3A8A] text-white shadow-[0_12px_35px_rgba(30,58,138,.16)]">
                  <div className="relative p-6 md:p-8">
                    <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full border-[34px] border-white/5" />
                    <div className="absolute bottom-[-90px] right-32 h-48 w-48 rounded-full bg-[#16A34A]/15 blur-sm" />
                    <div className="relative max-w-xl">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-blue-100">
                        <Icon name="megaphone" size={14} />
                        Oportunidad destacada
                      </span>
                      <h2 className="mt-5 text-2xl font-bold tracking-[-.02em] md:text-[28px]">
                        Rueda de Negocios
                        <br className="hidden md:block" /> Bolivia Conecta 2025
                      </h2>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100/85">
                        Encuentra proveedores, clientes y aliados estratégicos en el encuentro
                        comercial más importante de nuestra comunidad.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-blue-100">
                        <span className="flex items-center gap-2">
                          <Icon name="calendar" size={15} />
                          24 de junio
                        </span>
                        <span className="flex items-center gap-2">
                          <Icon name="location" size={15} />
                          La Paz · Presencial
                        </span>
                      </div>
                      <button className="mt-6 flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-[#1E3A8A] transition hover:bg-blue-50">
                        Reservar mi espacio
                        <Icon name="arrow" size={17} />
                      </button>
                    </div>
                  </div>
                </article>

                <article className="rounded-xl border border-[#E6EAF0] bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[.09em] text-[#94A3B8]">
                        Tu progreso
                      </p>
                      <h2 className="mt-1 text-lg font-bold text-[#172554]">Meta de impacto</h2>
                    </div>
                    <span className="text-sm font-bold text-[#16A34A]">68%</span>
                  </div>
                  <div
                    className="relative mx-auto grid h-32 w-32 place-items-center rounded-full"
                    style={{ background: "conic-gradient(#16A34A 0 68%, #E8EEF5 68% 100%)" }}
                  >
                    <div className="grid h-[102px] w-[102px] place-items-center rounded-full bg-white text-center">
                      <div>
                        <p className="text-2xl font-bold text-[#172554]">34</p>
                        <p className="text-[10px] font-medium text-[#94A3B8]">de 50 conexiones</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-center text-xs leading-5 text-[#64748B]">
                    Estás a <strong className="text-[#334155]">16 conexiones</strong> de alcanzar tu
                    meta anual.
                  </p>
                  <button className="mt-4 w-full rounded-xl bg-[#F0FDF4] py-2.5 text-xs font-bold text-[#15803D] transition hover:bg-[#DCFCE7]">
                    Ver mi impacto
                  </button>
                </article>
              </section>

              <section>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold tracking-[-.01em] text-[#172554]">
                      Emprendimientos para ti
                    </h2>
                    <p className="mt-1 text-sm text-[#64748B]">
                      Seleccionados según tus intereses y conexiones.
                    </p>
                  </div>
                  <button className="hidden items-center gap-1 text-sm font-bold text-[#1E3A8A] hover:underline md:flex">
                    Ver todos
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 min-[1440px]:grid-cols-3">
                  {ventures
                    .filter(
                      (venture) =>
                        !query ||
                        `${venture.name} ${venture.sector} ${venture.city}`
                          .toLowerCase()
                          .includes(query.toLowerCase()),
                    )
                    .map((venture) => {
                      const favorite = favorites.includes(venture.name);
                      return (
                        <article
                          key={venture.name}
                          className="group rounded-xl border border-[#E6EAF0] bg-white p-5 transition hover:border-[#C8D4ED] hover:shadow-[0_12px_30px_rgba(30,58,138,.07)]"
                        >
                          <div className="flex items-start justify-between">
                            <div
                              className={`relative grid h-12 w-12 place-items-center rounded-xl text-sm font-bold ${venture.color}`}
                            >
                              <span
                                className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${venture.accent}`}
                              />
                              {venture.initials}
                            </div>
                            <button
                              onClick={() => toggleFavorite(venture.name)}
                              aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                              className={`grid h-9 w-9 place-items-center rounded-full border transition ${favorite ? "border-red-100 bg-red-50 text-red-500" : "border-[#E2E8F0] text-[#94A3B8] hover:text-red-500"}`}
                            >
                              <Icon
                                name="heart"
                                size={17}
                                className={favorite ? "fill-current" : ""}
                              />
                            </button>
                          </div>
                          <h3 className="mt-4 text-base font-bold text-[#172554]">
                            {venture.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-2 text-[11px] font-medium text-[#64748B]">
                            <span>{venture.sector}</span>
                            <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
                            <span>{venture.city}</span>
                          </div>
                          <p className="mt-3 line-clamp-2 text-xs leading-5 text-[#64748B]">
                            {venture.description}
                          </p>
                          <div className="mt-5 flex items-center gap-2">
                            <button className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#D7DFEC] px-3 text-[11px] font-bold text-[#1E3A8A] transition hover:border-[#93A9DE] hover:bg-[#F8FAFC]">
                              Conocer
                              <Icon
                                name="arrow"
                                size={14}
                                className="transition group-hover:translate-x-0.5"
                              />
                            </button>
                            <button
                              onClick={() => setActive("Centro de promoción")}
                              className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1E3A8A] px-3 text-[11px] font-bold text-white transition hover:bg-[#172E6E]"
                            >
                              <Icon name="handshake" size={14} />
                              Apoyar
                            </button>
                          </div>
                        </article>
                      );
                    })}
                </div>
                {query &&
                  ventures.filter((venture) =>
                    `${venture.name} ${venture.sector} ${venture.city}`
                      .toLowerCase()
                      .includes(query.toLowerCase()),
                  ).length === 0 && (
                    <div className="rounded-xl border border-dashed border-[#CBD5E1] bg-white py-10 text-center text-sm text-[#64748B]">
                      No encontramos emprendimientos para “{query}”.
                    </div>
                  )}
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
