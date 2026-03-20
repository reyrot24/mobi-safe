"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    prodotto: [
      { label: "Come Funziona", href: "#come-funziona" },
      { label: "Piani e Prezzi", href: "#piani" },
      { label: "Tecnologia", href: "#vantaggi" },
      { label: "App Mobile", href: "#" },
      { label: "Dashboard Web", href: "#" },
    ],
    supporto: [
      { label: "Centro Assistenza", href: "#faq" },
      { label: "Contatti", href: "#contatti" },
      { label: "Installazione", href: "#" },
      { label: "Manuali", href: "#risorse" },
      { label: "Video Tutorial", href: "#risorse" },
    ],
    azienda: [
      { label: "Chi Siamo", href: "#" },
      { label: "Carriere", href: "#" },
      { label: "Press Kit", href: "#risorse" },
      { label: "Partner", href: "#dealer" },
      { label: "Certificazioni", href: "#sla" },
    ],
    legale: [
      { label: "Privacy Policy", href: "#" },
      { label: "Termini di Servizio", href: "#sla" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Rimani Sempre Aggiornato
              </h3>
              <p className="text-blue-100">
                Ricevi le ultime novità, consigli di sicurezza e offerte
                esclusive direttamente nella tua casella email.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="La tua email"
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="./logo-mobility-safe.png"
                alt="Mobility Safe"
                width={200}
                height={45}
                className="h-10 w-auto "
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              La soluzione più avanzata per la sicurezza del tuo veicolo.
              Tecnologia satellitare con garanzia di ritrovamento.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>081 17676699</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@mobilitysafe.it</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Via Emanuele Gianturco 92, 80146 Napoli (NA)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Prodotto */}
            <div>
              <h4 className="font-semibold text-white mb-4">Prodotto</h4>
              <ul className="space-y-3">
                {footerLinks.prodotto.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supporto */}
            <div>
              <h4 className="font-semibold text-white mb-4">Supporto</h4>
              <ul className="space-y-3">
                {footerLinks.supporto.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Azienda */}
            <div>
              <h4 className="font-semibold text-white mb-4">Azienda</h4>
              <ul className="space-y-3">
                {footerLinks.azienda.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legale */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legale</h4>
              <ul className="space-y-3">
                {footerLinks.legale.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Legal Info */}
        <div className="mb-6 text-center">
          <div className="text-sm text-gray-400 space-y-2">
            <div className="font-semibold text-gray-300">
              MOBILITY EXPRESS S.R.L.
            </div>
            <div>Via Emanuele Gianturco 92 – 80146 Napoli (NA)</div>
            <div className="flex flex-wrap justify-center gap-4">
              <span>P.IVA: 09643751218</span>
              <span>•</span>
              <span>C.F.: 09643751218</span>
              <span>•</span>
              <span>REA: NA-1047390</span>
            </div>
            <div>VAT Europeo: IT09643751218</div>
            <div>PEC: mobilityexpress@pec.it</div>
          </div>
        </div>

        {/* Insurance Broker Info */}
        <div className="mb-6 p-4 bg-gray-800 rounded-lg">
          <div className="text-sm text-gray-400 text-center space-y-2">
            <div className="text-blue-400 font-semibold">
              Distribuzione convenzioni e prodotti assicurativi a cura di:
            </div>
            <div className="font-semibold text-gray-300">
              ALCA BROKER S.R.L.
            </div>
            <div>Via Vittoria Colonna 14 – 80121 Napoli (NA)</div>
            <div className="flex flex-wrap justify-center gap-4">
              <span>P.IVA: 07965051217</span>
              <span>•</span>
              <span>C.F.: 07965051217</span>
            </div>
            <div>VAT Europeo: IT07965051217</div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mb-6 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
          <div className="text-sm text-blue-200 text-center">
            <div className="font-semibold mb-2">📢 Nota importante:</div>
            <div>
              I dispositivi e servizi offerti da MOBILITY EXPRESS S.R.L. danno
              diritto a vantaggi esclusivi e sconti dedicati sulla polizza furto
              e incendio stipulata tramite ALCA BROKER S.R.L., riservati ai
              clienti aderenti alle convenzioni.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4 border-t border-gray-800">
          <div className="text-sm text-gray-400">
            © 2024 MOBILITY EXPRESS S.R.L. Tutti i diritti riservati.
          </div>

          <div className="text-sm text-gray-400">
            Mobility Safe - Tecnologia satellitare avanzata
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">Emergenza Furto 24/7:</span>
            <span className="font-bold">800 EMERGENCY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
