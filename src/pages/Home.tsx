
import { Link } from '@tanstack/react-router';
import { Search, Cpu, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import InterestForm from '@/components/forms/InterestForm';

export default function Home() {
  const valueProps = [
    {
      icon: Search,
      title: 'Semantic Search',
      description: 'Find exactly what you need with natural language queries. Search by task, environment, object, and more.',
    },
    {
      icon: Cpu,
      title: 'Ergonomic Capture',
      description: 'High-quality egocentric data captured with our custom hardware stack. Video, IMU, force, audio, and depth.',
    },
    {
      icon: Package,
      title: 'Standardized Delivery',
      description: 'Clean, well-formatted data ready for training. Consistent formats, clear metadata, and easy integration.',
    },
  ];

  const partnerLogos = ['OpenAI', 'Meta', 'Google', 'Tesla', 'Boston Dynamics', 'Figure'];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Hero gradient */}
        <div className="absolute inset-0 hero-gradient" />

        <div className="container mx-auto px-4 relative z-10">
          <div
            className="max-w-4xl mx-auto text-center"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-tight"
            >
              Egocentric data for{' '}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
                foundational robot models
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-3xl mx-auto"
            >
              A curated marketplace of high-quality egocentric demonstrations, plus an ergonomic capture stack to collect your own.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent)]/90 shadow-xl shadow-[var(--glow-cyan)] text-lg px-8 h-14"
              >
                Request Data
                <ArrowRight className="ml-2" size={20} />
              </Button>

              <Link to="/search">
                <GlassButton variant="secondary" size="lg" className="text-lg px-8 h-14">
                  Explore Search
                </GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Strip */}
      <section className="py-16 border-y border-[var(--border)] bg-[var(--panel)]">
        <div className="container mx-auto px-4">
          <p
            className="text-center text-[var(--text-secondary)] mb-8 text-sm uppercase tracking-wider"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by leading robotics teams
          </p>

          <div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {partnerLogos.map((logo) => (
              <Badge
                key={logo}
                variant="outline"
                className="px-6 py-3 text-[var(--text-secondary)] border-[var(--border)] bg-transparent hover:border-[var(--accent)] transition-colors text-base"
              >
                {logo}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 container mx-auto px-4">
        <div
          className="text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Why Asimov?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Everything you need to build the next generation of embodied AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <GlassCard key={index} className="text-center">
              <div
                className="inline-flex p-4 rounded-full bg-[var(--panel-strong)] mb-6"
              >
                <prop.icon size={32} className="text-[var(--accent)]" />
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {prop.title}
              </h3>
              <p className="text-[var(--text-secondary)]">
                {prop.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-24 bg-[var(--panel)]">
        <div className="container mx-auto px-4">
          <InterestForm />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 container mx-auto px-4">
        <div
          className="max-w-4xl mx-auto text-center glass rounded-2xl p-12"
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Ready to pilot?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Join our early access program and get custom data for your robotics project.
          </p>
          <Button
            size="lg"
            className="bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent)]/90 shadow-xl shadow-[var(--glow-cyan)] text-lg px-10 h-14"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
