import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useGSAP(() => {
    gsap.from(".contact-content", {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
    });
  }, { scope: containerRef });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-4">Let's Build Something</h2>
        <p className="text-center text-[var(--color-text-muted)] mb-16 max-w-xl mx-auto">Have a project in mind? We'd love to hear about it.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-content space-y-6">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="form-input w-full" />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="form-input w-full" />
            <textarea name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required rows={6} className="form-input w-full resize-none" />
            <button type="submit" disabled={loading} className="shimmer-button px-8 py-3 font-medium w-full sm:w-auto">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {/* Contact Info */}
          <div className="contact-content flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">Ready to start?</h3>
            <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">Drop us a message and we'll get back to you within 24 hours. Let's discuss how we can bring your vision to life.</p>
            <div className="space-y-3 mb-8">
              <p className="text-[var(--color-text-muted)] text-sm">contact@eastleviathans.com</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors text-sm border border-[var(--color-border)] px-4 py-2 rounded-lg hover:border-[var(--color-accent-primary)]">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
