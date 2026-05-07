import { SectionLabel } from './SectionLabel';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About Me</SectionLabel>
        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <div>
            <img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional workspace"
              className="w-full rounded-2xl object-cover"
              style={{
                height: '420px',
                boxShadow: '0 8px 40px rgba(44,31,14,0.12)',
              }}
            />
          </div>
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a110a' }}
            >
              Building experiences that matter
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#6b5240' }}>
              I am a Computer Science graduate with an interest in web development, AI-based tools, and modern technologies. I enjoy learning new technical skills and working on practical projects that improve creativity and problem-solving abilities.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6b5240' }}>
              Based in Mumbai, I am eager to contribute to meaningful digital products and grow as a developer in a collaborative environment.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Degree', value: 'B.Sc. Computer Science' },
                { label: 'Location', value: 'Mira Road, Mumbai, India' },
                { label: 'Focus', value: 'Web Development' },
                { label: 'Status', value: 'Open to Work' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#8b5e3c', letterSpacing: '0.12em' }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#2c1f0e' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
