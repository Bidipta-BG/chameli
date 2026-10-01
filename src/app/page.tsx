import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 font-sans selection:bg-[#a67c52] selection:text-white">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#a67c52]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#1a432b] tracking-wider font-serif">
              CHAMELI
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#a67c52] uppercase font-semibold">
              — Chai —
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-[#1a432b] border-b-2 border-[#a67c52] pb-1"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#1a432b] transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/our-story"
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#1a432b] transition-colors"
            >
              Our Story
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button aria-label="Search" className="text-gray-600 hover:text-[#1a432b]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <button aria-label="Cart" className="text-gray-600 hover:text-[#1a432b] relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span className="absolute -top-2 -right-2 bg-[#a67c52] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image Placeholder (Assam Tea Garden) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop"
            alt="Assam Tea Garden"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7] via-[#fdfbf7]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#1a432b] mb-4">
              Assam's Finest
            </p>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#1a432b] leading-[1.1] mb-2">
              From Assam.
            </h1>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#a67c52] leading-[1.1] mb-6">
              For your cup.
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Carefully selected Assam tea from local gardens, bringing the
              authentic taste to your everyday cup.
            </p>

            <div className="flex items-center gap-6 mb-10">
              <p className="text-2xl font-bold text-[#1a432b]">
                350g <span className="font-light text-gray-400 mx-2">|</span> ₹299
              </p>
              <button className="bg-[#a67c52] hover:bg-[#8e6842] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all flex items-center gap-3">
                Shop Chameli Chai
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            {/* Feature Icons */}
            <div className="flex items-center gap-8 text-sm font-medium text-[#1a432b]">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[#1a432b] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <span className="w-24">Direct from Assam gardens</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[#1a432b] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                </div>
                <span className="w-24">Single origin Assam tea</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[#1a432b] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <span className="w-24">Premium quality leaves</span>
              </div>
            </div>
          </div>

          {/* Right Content (Product Image Placeholder) */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* You will replace this with your actual product pouch image */}
            <div className="absolute inset-0 bg-[#a67c52]/10 rounded-3xl flex items-center justify-center border-2 border-dashed border-[#a67c52]/30">
               <p className="text-[#a67c52] font-semibold text-center px-4">Place Product Packaging Image Here <br/>(Transparent PNG)</p>
            </div>
          </div>
        </div>
        
        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#fdfbf7]">
                <path d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" fill="currentColor"/>
            </svg>
        </div>
      </section>

      {/* ===== STORY SECTION 1 ===== */}
      <section className="py-24 bg-[#f4ebd9] relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop"
              alt="Tea Picker"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl font-serif font-bold text-[#1a432b] mb-2 leading-tight">
              Not every <br />
              great tea leaves
            </h2>
            <h2 className="text-5xl font-serif font-bold text-[#a67c52] mb-6">
              Assam.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Some of Assam's finest tea is grown in smaller gardens and has
              always been enjoyed close to home. Chameli brings that authentic
              Assam tea experience beyond Assam.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-3 bg-[#1a432b] hover:bg-[#12311f] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all"
            >
              Discover Our Story
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#fdfbf7]">
                <path d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" fill="currentColor"/>
            </svg>
        </div>
      </section>

      {/* ===== STORY SECTION 2 ===== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-5xl font-serif font-bold text-[#1a432b] mb-2 leading-tight">
              Why the name
            </h2>
            <h2 className="text-5xl font-serif font-bold text-[#a67c52] mb-8">
              Chameli?
            </h2>
            <div className="w-16 h-0.5 bg-[#a67c52] mb-8"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The name Chameli is inspired by the women who work in Assam's tea
              gardens — the women who move through the tea bushes every day,
              carefully picking the leaves that become a part of Assam's tea
              heritage. Their hard work, strength and dedication inspire
              everything we do.
            </p>
            <p className="text-2xl font-serif font-bold text-[#a67c52]">
              A name inspired by the<br/>women behind the leaves.
            </p>
          </div>
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl order-1 md:order-2 rounded-tl-full rounded-tr-[5rem] rounded-bl-[4rem]">
            <Image
              src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop"
              alt="Smiling Tea Worker"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-[1px]">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#f4ebd9]">
                <path d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" fill="currentColor"/>
            </svg>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-[#f4ebd9] relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#a67c52] mb-4">
              Loved by tea lovers
            </p>
            <h2 className="text-5xl font-serif font-bold text-[#1a432b] mb-1">
              Real people.
            </h2>
            <h2 className="text-5xl font-serif font-bold text-[#a67c52] mb-6">
              Real chai.
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              A taste that feels like home.<br/>Here's what our customers say.
            </p>
          </div>
          
          <div className="lg:col-span-8 flex gap-6 overflow-x-auto pb-8 snap-x">
             {/* Review 1 */}
             <div className="min-w-[300px] bg-[#fdfbf7] p-8 rounded-2xl shadow-sm snap-center">
                <div className="flex gap-1 text-[#a67c52] mb-4">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-gray-800 font-serif italic text-lg mb-6 leading-relaxed">
                  "Rich flavour and perfect for my daily chai. Feels truly like Assam in every cup."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="Rohit Sharma" width={48} height={48} className="object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a432b]">Rohit Sharma</h4>
                    <p className="text-xs text-gray-500">Guwahati, Assam</p>
                  </div>
                </div>
             </div>

             {/* Review 2 */}
             <div className="min-w-[300px] bg-[#fdfbf7] p-8 rounded-2xl shadow-sm snap-center">
                <div className="flex gap-1 text-[#a67c52] mb-4">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-gray-800 font-serif italic text-lg mb-6 leading-relaxed">
                  "Strong, refreshing and full of flavour. Our whole family loves it."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Priya Das" width={48} height={48} className="object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a432b]">Priya Das</h4>
                    <p className="text-xs text-gray-500">Bengaluru, Karnataka</p>
                  </div>
                </div>
             </div>

             {/* Review 3 */}
             <div className="min-w-[300px] bg-[#fdfbf7] p-8 rounded-2xl shadow-sm snap-center">
                <div className="flex gap-1 text-[#a67c52] mb-4">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-gray-800 font-serif italic text-lg mb-6 leading-relaxed">
                  "Authentic taste and great quality. Finally a tea that tastes like home."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Manoj Verma" width={48} height={48} className="object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a432b]">Manoj Verma</h4>
                    <p className="text-xs text-gray-500">Delhi, India</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop"
            alt="Sunrise at Tea Garden"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1a432b]/80"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-white">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#f4ebd9] mb-4">
            Good tea brings <br/> good people together
          </p>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
            Bring Assam home.
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light">
            Chameli Chai — a taste of Assam, for brighter days.
          </p>
          <button className="bg-[#a67c52] hover:bg-[#8e6842] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all inline-flex items-center gap-3">
            Shop Chameli Chai
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#122e1d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 items-center border-b border-white/10 pb-12 mb-8">
            <div className="md:col-span-1 flex flex-col items-start">
               <Link href="/" className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white tracking-wider font-serif">
                    CHAMELI
                  </span>
                  <span className="text-xs tracking-[0.2em] text-[#a67c52] uppercase font-semibold">
                    — Chai —
                  </span>
                </Link>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-4">
                  A taste of Assam.<br/>For brighter days.
                </p>
            </div>

            <div className="md:col-span-2 flex justify-center gap-12">
               <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
               <Link href="/shop" className="text-sm text-gray-300 hover:text-white transition-colors">Shop</Link>
               <Link href="/our-story" className="text-sm text-gray-300 hover:text-white transition-colors">Our Story</Link>
               <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="md:col-span-1 flex justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 Chameli Chai. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
              <span>|</span>
              <Link href="/shipping" className="hover:text-gray-300">Shipping Policy</Link>
              <span>|</span>
              <Link href="/refunds" className="hover:text-gray-300">Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
