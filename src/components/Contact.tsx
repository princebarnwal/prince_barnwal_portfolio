import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#f0e8dc' }}>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4 mb-5"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
        >
          Let's work together
        </h2>
        <p className="text-base mb-14" style={{ color: '#7a6450' }}>
          I'm open to new opportunities, collaborations, and conversations. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 items-stretch">
          <ContactCard
            icon={<Mail size={24} />}
            label="Email"
            value="barnwalprince84@gmail.com"
            href="mailto:barnwalprince84@gmail.com"
          />
          <ContactCard
            icon={<Linkedin size={24} />}
            label="LinkedIn"
            value="Prince Barnwal"
            href="https://www.linkedin.com/in/prince-barnwal-a8a127296"
          />
          <ContactCard
            icon={<Github size={24} />}
            label="GitHub"
            value="princebarnwal"
            href="https://github.com/princebarnwal"
          />
          <ContactCard
            icon={<MapPin size={22} />}
            label="Location"
            value="Mumbai, Maharashtra, India"
            href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India"
          />
        </div>

        <a
          href="mailto:barnwalprince84@gmail.com"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          style={{ backgroundColor: '#8b5e3c', color: '#faf7f2' }}
        >
          <Mail size={16} />
          Send me a message
        </a>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      className="p-6 rounded-2xl flex flex-col items-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md h-full"
      style={{
        backgroundColor: '#faf7f2',
        boxShadow: '0 2px 16px rgba(44,31,14,0.07)',
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: '#f0e8dc', color: '#8b5e3c' }}
      >
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#8b5e3c', letterSpacing: '0.12em' }}>
        {label}
      </p>
      <p className="text-sm text-center font-medium leading-snug break-all" style={{ color: '#2c1f0e' }}>{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }
  return <div className="h-full">{content}</div>;
}
