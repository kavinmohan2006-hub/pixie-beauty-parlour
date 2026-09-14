import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CATEGORIES = ["All", "Bridal Makeup", "Reception", "Engagement", "Ear Piercing", "Baby Shower", "Party Makeup", "Mehendi"];

const WORKS = [
  { id:"w1",  category:"Bridal Makeup", title:"Traditional Bridal Makeup",   desc:"Full South Indian bridal look with silk saree & temple jewellery",          src:"/images/services/bridal_makeup.jpg" },
  { id:"w2",  category:"Engagement",    title:"Nischayathartham Look",        desc:"Soft and radiant engagement day makeup with beautiful silk saree",            src:"/images/services/engagement_makeup.jpg" },
  { id:"w3",  category:"Reception",     title:"Reception Night Glow",         desc:"Glamorous reception makeup with smoky eyes & elegant gown",                  src:"/images/gallery/work_reception.jpg" },
  { id:"w4",  category:"Baby Shower",   title:"Valaikaapu / Seemantham",      desc:"Beautiful traditional baby shower glowing makeup for mom-to-be",             src:"/images/gallery/work_babyshower.jpg" },
  { id:"w5",  category:"Ear Piercing",  title:"Karnavedham Function",         desc:"Mom styled with traditional look for Karnavedham family function",           src:"/images/gallery/work_earpiercing.jpg" },
  { id:"w6",  category:"Party Makeup",  title:"Event & Party Glam",           desc:"Bold and beautiful party makeup for special celebrations",                   src:"/images/services/party_makeup.jpg" },
  { id:"w7",  category:"Mehendi",       title:"Bridal Mehendi Design",        desc:"Intricate full hand bridal mehendi with traditional motifs",                 src:"/images/services/mehendi.jpg" },
  { id:"w8",  category:"Bridal Makeup", title:"Bridal Skin Glow",             desc:"Perfect skin finish and facial prep for the big wedding day",                src:"/images/services/facial.jpg" },
  { id:"w9",  category:"Engagement",    title:"Engagement Saree Styling",     desc:"Flawless saree draping and styling for the bride-to-be",                     src:"/images/services/saree_draping.jpg" },
  { id:"w10", category:"Party Makeup",  title:"Modern Hair Styling",          desc:"Elegant and modern hair styling for graduation and parties",                 src:"/images/services/haircut.jpg" },
  { id:"w11", category:"Reception",     title:"Reception Hair Prep",          desc:"Luxurious hair spa and styling prep for evening reception",                  src:"/images/services/hairspa.jpg" },
  { id:"w12", category:"Baby Shower",   title:"Pre-function Glow",            desc:"Refreshing skincare and herbal pack for a natural glowing look",             src:"/images/services/skincare.jpg" },
];

export const OurWorks: React.FC = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof WORKS[0]>(null);
  const [ref, isVisible] = useScrollAnimation(0.05);

  const filtered = active === "All" ? WORKS : WORKS.filter(w => w.category === active);

  return (
    <section id="ourworks" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg,#e91e8c,#d4af37,#e91e8c)" }} aria-hidden="true" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-5" style={{ background: "radial-gradient(circle,#e91e8c,transparent)", transform: "translate(40%,-40%)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="eyebrow-pink mb-4 inline-flex">? Our Works</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "#0f0f2d", fontFamily: "var(--font-display)" }}>
            Real Events, <span className="pink-text">Real Beauty</span>
          </h2>
          <div className="divider-ornament mt-5 mb-5 max-w-xs mx-auto"><span className="text-gold text-lg">?</span></div>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From traditional Tamil Nadu weddings to baby showers and ear piercing ceremonies — a glimpse of our beautiful transformations for real clients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-250 ${active === cat ? "text-white shadow-md shadow-primary/30 scale-105" : "bg-white text-gray-500 hover:text-primary hover:shadow-sm border border-gray-100"}`}
              style={active === cat ? { background: "linear-gradient(135deg,#e91e8c,#c2185b)" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {filtered.map((work, i) => (
            <div
              key={work.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid rgba(233,30,140,0.08)", animationDelay: `${i * 50}ms` }}
              onClick={() => setLightbox(work)}
            >
              <img src={work.src} alt={work.title} className="w-full h-auto object-cover" loading="lazy" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(0deg,rgba(15,15,45,0.85) 0%,rgba(233,30,140,0.2) 70%,transparent 100%)" }}>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">{work.title}</p>
                    <p className="text-white/65 text-[10px] mt-0.5 line-clamp-1">{work.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(233,30,140,0.85)" }}>
                    <ZoomIn size={14} color="white" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <span className="absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: "rgba(233,30,140,0.9)", backdropFilter: "blur(4px)" }}>
                {work.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-10 italic">? More real event photos coming soon from Pixie Beauty Parlour, Needamangalam.</p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }} onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto object-cover" />
            <div className="px-5 py-4" style={{ background: "linear-gradient(135deg,#1a1a3e,#2d1b4e)" }}>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white inline-block mb-2" style={{ background: "rgba(233,30,140,0.8)" }}>{lightbox.category}</span>
              <h3 className="font-display text-lg font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{lightbox.title}</h3>
              <p className="text-white/60 text-sm">{lightbox.desc}</p>
            </div>
            <button className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white" style={{ background: "rgba(0,0,0,0.65)" }} onClick={() => setLightbox(null)} aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
