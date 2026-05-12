import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bcs-dark-navy text-primary-foreground">
      <div className="bcs-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo1.png" alt="BCS Cadet School" className="h-12 w-auto" />
              <div>
                <div className="text-sm font-bold font-lufga">BCS</div>
                <div className="text-sm font-bold font-lufga">CADET SCHOOL</div>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Loyalty - Discipline - Leadership.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold font-lufga mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-bcs-green transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-bcs-green transition-colors">Vision & Mission</a></li>
              <li><a href="#" className="hover:text-bcs-green transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-bcs-green transition-colors">Why Choose BCS</a></li>
              <li><a href="#" className="hover:text-bcs-green transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold font-lufga mb-4">Core Values</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Responsibility</li>
              <li>Honesty</li>
              <li>Unity</li>
              <li>Discipline</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold font-lufga mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-bcs-green flex-shrink-0" />
                <span>Contact our admissions office for updated helpline numbers.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-bcs-green flex-shrink-0" />
                <span>Official email details are available at the campus office.</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bcs-green flex-shrink-0 mt-0.5" />
                <span>Bahar Cadet School (BCS)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="bcs-container text-center text-xs text-primary-foreground/50">
          © 2026 BCS Cadet School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
