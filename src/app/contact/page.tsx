import Link from 'next/link';
import { Mail, Phone, Clock, FileText, Building2, MessageCircle, Handshake, UserPlus, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Contact Us - O\'MARS Radio',
  description: 'Get in touch with O\'MARS Radio for inquiries, partnerships, and feedback.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Get in Touch</h1>
            <p className="text-xl text-white/90 font-medium">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-2 uppercase tracking-wide">Contact Information</h2>
                <p className="text-gray-600">Reach out through any of these channels</p>
              </div>

              <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-foreground mb-2 uppercase text-sm">Email</h3>
                    <a href="mailto:omarscomandedultd@gmail.com" className="text-primary hover:underline font-medium text-lg">
                      omarscomandedultd@gmail.com
                    </a>
                    <p className="text-xs text-gray-500 mt-2">We respond within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-foreground mb-2 uppercase text-sm">Phone</h3>
                    <p className="font-medium text-lg text-foreground">+234 (placeholder)</p>
                    <p className="text-xs text-gray-500 mt-2">Available during business hours</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-foreground mb-3 uppercase text-sm">Follow Us</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm font-medium">TikTok</span>
                        <a
                          href="https://www.tiktok.com/@whispersnwords_"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium text-sm"
                        >
                          @whispersnwords_
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm font-medium">Instagram</span>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium text-sm">
                          @oarsradio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purpose Categories */}
            <div>
              <h2 className="text-3xl font-black text-foreground mb-2 uppercase tracking-wide">Reason for Contacting</h2>
              <p className="text-gray-600 mb-6">Select the best option for your inquiry</p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Reach Out Today',
                    description: 'General inquiries and feedback',
                    email: 'omarscomandedultd@gmail.com',
                    icon: Mail,
                    gradient: 'from-blue-500 to-blue-600',
                  },
                  {
                    title: 'Partner With Us',
                    description: 'Advertising, sponsorships, and collaborations',
                    email: 'omarscomandedultd@gmail.com',
                    icon: Handshake,
                    gradient: 'from-amber-500 to-amber-600',
                  },
                  {
                    title: 'Join Our Programs',
                    description: 'Apply to be a presenter, contribute content, or participate',
                    email: 'omarscomandedultd@gmail.com',
                    icon: UserPlus,
                    gradient: 'from-emerald-500 to-emerald-600',
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${item.email}?subject=${encodeURIComponent(item.title)}`}
                    className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-foreground mb-1 uppercase text-sm group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all self-center" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Clock,
                title: 'Response Time',
                description: 'We typically respond to inquiries within 24-48 hours during business days.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: FileText,
                title: 'Rate Card Requests',
                description: 'For advertising and partnership rates,',
                link: { href: '/rate-card', text: 'visit our Rate Card page' },
                gradient: 'from-amber-500 to-amber-600',
              },
              {
                icon: Building2,
                title: 'Office',
                description: "O'MARS Communication and Education Promotion Ltd.",
                gradient: 'from-emerald-500 to-emerald-600',
              },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full`} />
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-foreground mb-2 uppercase text-sm">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                  {item.link && (
                    <>
                      {' '}
                      <Link href={item.link.href} className="text-primary hover:underline font-medium">
                        {item.link.text}
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-12 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4 uppercase">Ready to Connect?</h3>
              <p className="text-white/80 mb-8 font-medium max-w-md mx-auto">Choose one of the options above to get started, or call us directly</p>
              <CTAButton href="mailto:omarscomandedultd@gmail.com" variant="secondary">Send Email Now</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
