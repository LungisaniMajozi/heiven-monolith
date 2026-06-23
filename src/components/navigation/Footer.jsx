import React from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, MapPin } from "lucide-react";
import HeivenLogo from "@/components/HeivenLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand — SVG logo, transparent bg */}
          <div className="sm:col-span-2 lg:col-span-1">
            <HeivenLogo
              variant="group"
              size="md"
              inverted={false}
              className="mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A diversified African industrial conglomerate operating across
              Telecommunications, Energy, Minerals, and Electronics sectors.
            </p>
          </div>

          {/* Our Sectors */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-6">
              Our Sectors
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/telecoms"
                className="text-sm text-white/60 hover:text-[#29ABE2] transition-colors"
              >
                Heiven Telecoms
              </Link>
              <Link
                to="/energy"
                className="text-sm text-white/60 hover:text-[#29ABE2] transition-colors"
              >
                Heiven Energy
              </Link>
              <Link
                to="/minerals"
                className="text-sm text-white/60 hover:text-[#29ABE2] transition-colors"
              >
                Heiven Minerals
              </Link>
              <Link
                to="/electronics"
                className="text-sm text-white/60 hover:text-[#29ABE2] transition-colors"
              >
                Heiven Electronics
              </Link>
              <Link
                to="/shipping"
                className="text-sm text-white/60 hover:text-[#29ABE2] transition-colors"
              >
                Heiven Shipping
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Home
              </Link>
              <a
                href="/#sectors"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Sectors
              </a>
              <a
                href="/#about"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact
              </a>
              <Link
                to="/ceo"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                CEO Message
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0 text-white/30" />
                Johannesburg, Gauteng, South Africa
              </div>
              <a
                href="mailto:info@heivengroup.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-white/30" />
                info@heivengroup.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Globe className="w-4 h-4 shrink-0 text-white/30" />
                www.heivengroup.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Heiven Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/#contact"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/#contact"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
