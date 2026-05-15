import { footerLinks, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <img src="/images/logos/el-logo-full.png" alt="East Leviathans" className="h-16 w-auto mb-4" />
            <p className="text-[var(--color-text-muted)] text-sm">Precision-focused development studio crafting digital experiences that scale.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors text-sm">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-[var(--color-text-muted)] text-xs">&copy; {new Date().getFullYear()} East Leviathans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
