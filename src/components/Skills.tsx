import {
  Code2,
  Layers,
  Brain,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const SKILLS = [
  { name: 'HTML & CSS', icon: Code2, level: 80 },
  { name: 'JavaScript', icon: Layers, level: 65 },
  { name: 'React.js', icon: Layers, level: 55 },
  { name: 'Python', icon: Brain, level: 60 },
  { name: 'MS Office', icon: FileText, level: 85 },
  { name: 'Communication Skills', icon: MessageSquare, level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ backgroundColor: '#f0e8dc' }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4 mb-12"
          style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
        >
          What I bring to the table
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ name, icon: Icon, level }) => (
            <div
              key={name}
              className="p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: '#faf7f2',
                boxShadow: '0 2px 16px rgba(44,31,14,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#f0e8dc' }}
              >
                <Icon size={20} style={{ color: '#8b5e3c' }} />
              </div>
              <p className="text-sm font-semibold mb-3" style={{ color: '#1a110a' }}>{name}</p>
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: '6px', backgroundColor: '#e5d9ce' }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${level}%`, backgroundColor: '#8b5e3c' }}
                />
              </div>
              <p className="text-xs mt-2 font-medium" style={{ color: '#8b5e3c' }}>{level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
