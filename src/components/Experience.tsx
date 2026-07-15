import { Briefcase } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const EXPERIENCES = [
  {
    role: 'Web Development Intern',
    company: 'InAmigos Foundation',
    companyUrl: 'https://inamigosfoundation.org.in/',
    duration: 'May 2026 – June 2026',
    description:
      'Working as a Web Development Intern at InAmigos Foundation through Internshala. Responsible for creating websites using modern website builders and development tools. Gaining hands-on experience in website design, personal branding, content creation, and digital presentation skills.',
  },
  {
    role: 'Data Analytics Intern',
    company: 'InAmigos Foundation',
    companyUrl: 'https://inamigosfoundation.org.in/',
    duration: 'June 2026 – July 2026',
    description:
      'Worked as a Data Analytics Intern at InAmigos Foundation through Internshala, gaining hands-on experience in data analytics, research, digital projects, and modern analytical tools. The internship strengthened my analytical, technical, and problem-solving skills through practical, real-world tasks.',
  },
  {
    role: 'Mathematics & Science Lecturer',
    company: 'Mind Mentorium Academy'
    duration: 'Sept 2024 – Present',
    description:
      'Planned and delivered interactive science and mathematics lessons to Secondary & Highger Secondary grade students, improving student performance through personalized teaching and effective exam preparation strategies.',
  },
  {
    role: 'FrontEnd Developer',
    company: 'Confederation of Indian Industry (CII)',
    companyUrl: 'https://www.cii.in/',
    duration: 'June 2026 – Present',
    description:
      'Working as a Frontend Developer Intern at the Confederation of Indian Industry (CII), where I gained hands-on experience in building responsive web applications, developing reusable UI components, and collaborating on real-world frontend projects using modern web technologies.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4 mb-12"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
        >
          Where I've worked
        </h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map(({ role, company, companyUrl, duration, description }) => (
            <div
              key={role}
              className="p-7 rounded-2xl flex gap-5"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 24px rgba(44,31,14,0.09)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-1"
                style={{ backgroundColor: '#f0e8dc' }}
              >
                <Briefcase size={20} style={{ color: '#8b5e3c' }} />
              </div>
              <div>
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
                >
                  {role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: '#8b5e3c' }}
                  >
                    {company}
                  </a>
                  <span style={{ color: '#c4a882' }}>·</span>
                  <span className="text-xs font-medium" style={{ color: '#7a6450' }}>{duration}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#7a6450' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
