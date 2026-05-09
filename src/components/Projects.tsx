import { ExternalLink } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const PROJECTS = [
  {
    title: 'NGOConnect – NGO Resource & Volunteer Management System',
    description:
      'A full-stack NGO management platform designed to connect volunteers, donors, and organizations through secure authentication, event management, donation tracking, and community engagement features with a responsive and scalable architecture.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Python Flask', 'MongoDB Atlas', 'JWT Authentication'],
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://ngo-resource-volunteer-management-s.vercel.app',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A clean and modern personal portfolio to showcase skills, projects, and professional background. Designed with a minimalist aesthetic and fully responsive layout.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://prince-lalbahadur-barnwal.vercel.app',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4 mb-12"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
        >
          Selected work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map(({ title, description, tags, image, url }) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 24px rgba(44,31,14,0.09)',
              }}
            >
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(26,17,10,0.45) 100%)',
                  }}
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
                  >
                    {title}
                  </h3>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={url === '#' ? (e) => e.preventDefault() : undefined}
                    className="mt-1 shrink-0 hover:opacity-70 transition-opacity"
                    style={{ color: url === '#' ? '#c4a882' : '#8b5e3c', cursor: url === '#' ? 'default' : 'pointer' }}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#7a6450' }}>
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#f0e8dc', color: '#8b5e3c' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
