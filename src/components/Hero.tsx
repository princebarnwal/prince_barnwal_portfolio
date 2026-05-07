import { Download, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
      style={{
        background: 'linear-gradient(160deg, #f5ede0 0%, #faf7f2 50%, #efe8dc 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-14">
        {/* Profile Picture - Left */}
        <div className="shrink-0">
          <img
            src="/Image123.jpg"
            alt="Prince Lalbahadur Barnwal"
            className="object-cover object-top"
            style={{
              width: '280px',
              height: '340px',
              borderRadius: '24px',
              boxShadow: '0 8px 40px rgba(44,31,14,0.18)',
              border: '4px solid #8b5e3c',
            }}
          />
        </div>

        {/* Text Content - Right */}
        <div className="flex-1 text-left">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: '#8b5e3c', letterSpacing: '0.2em' }}
          >
            Welcome to my portfolio
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-5 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
          >
            Prince<br />
            <span style={{ color: '#8b5e3c' }}>Lalbahadur</span> Barnwal
          </h1>
          <p
            className="text-lg md:text-xl font-light mb-4"
            style={{ color: '#6b5240' }}
          >
            Computer Science Graduate &nbsp;&middot;&nbsp; Aspiring Web Developer
          </p>
          <p
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{ color: '#7a6450' }}
          >
            Passionate about web development, AI tools, and building user-friendly digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Prince Barnwal CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#8b5e3c', color: '#faf7f2' }}
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{
                backgroundColor: 'transparent',
                color: '#8b5e3c',
                border: '1.5px solid #8b5e3c',
              }}
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-medium opacity-50 hover:opacity-80 transition-opacity"
        style={{ color: '#8b5e3c' }}
      >
        <span>Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
