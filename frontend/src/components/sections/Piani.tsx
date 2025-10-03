"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Building2 } from "lucide-react";

const Piani = () => {
  const plans = [
    {
      name: "Base",
      icon: Check,
      price: "12.90",
      originalPrice: "19.90",
      period: "/mese",
      description: "Protezione essenziale per uso personale",
      badge: "Più Popolare",
      badgeColor: "bg-green-100 text-green-800",
      features: [
        "Tracciamento GPS in tempo reale",
        "Allarmi antifurto automatici",
        "App mobile iOS/Android",
        "Notifiche push istantanee",
        "Storico percorsi 30 giorni",
        "Supporto clienti standard",
        "Installazione professionale inclusa",
        "Garanzia 12 mesi",
      ],
      notIncluded: [
        "Servizio di recupero garantito",
        "Dashboard web avanzata",
        "Report dettagliati",
      ],
    },
    {
      name: "Pro",
      icon: Star,
      price: "24.90",
      originalPrice: "34.90",
      period: "/mese",
      description: "Protezione completa con garanzia di ritrovamento",
      badge: "Consigliato",
      badgeColor: "bg-blue-100 text-blue-800",
      features: [
        "Tutto del piano Base",
        "Garanzia di ritrovamento 100%",
        "Servizio recupero H24",
        "Dashboard web completa",
        "Storico percorsi illimitato",
        "Geofence personalizzabili",
        "Report mensili dettagliati",
        "Supporto prioritario",
        "Integrazione assicurazioni",
        "Backup dati cloud",
        "Allarmi avanzati personalizzabili",
      ],
      notIncluded: ["Gestione flotta multi-veicolo", "API per integrazioni"],
    },
    {
      name: "Fleet",
      icon: Building2,
      price: "Su misura",
      originalPrice: null,
      period: "",
      description: "Soluzione enterprise per flotte aziendali",
      badge: "Enterprise",
      badgeColor: "bg-purple-100 text-purple-800",
      features: [
        "Tutto del piano Pro",
        "Gestione flotta illimitata",
        "Dashboard centralizzata",
        "Ruoli e permessi granulari",
        "API complete per integrazioni",
        "Report personalizzati",
        "Export dati CSV/Excel",
        "Supporto dedicato 24/7",
        "SLA garantito 99.9%",
        "Formazione team inclusa",
        "Installazione su larga scala",
        "Fatturazione centralizzata",
      ],
      notIncluded: [],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="piani" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Scegli il Piano Perfetto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Piani flessibili per ogni esigenza, dal singolo veicolo alle grandi
            flotte aziendali.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            /* const isPopular = plan.name === "Base"; */
            const isPro = plan.name === "Pro";

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  isPro ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 left-0">
                    <div className="text-center">
                      <Badge
                        className={`${plan.badgeColor} px-4 py-1 rounded-b-lg inline-block`}
                      >
                        {plan.badge}
                      </Badge>
                    </div>
                  </div>
                )}

                <CardHeader
                  className={`text-center pb-4 ${
                    plan.badge ? "pt-12" : "pt-6"
                  }`}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Piano {plan.name}
                  </h3>

                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through mb-1">
                        €{plan.originalPrice}/mese
                      </div>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price === "Su misura" ? "" : "€"}
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included */}
                  {plan.notIncluded.length > 0 && (
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                            <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                          </div>
                          <span className="text-gray-400 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      isPro
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    onClick={() => scrollToSection("#contatti")}
                  >
                    {plan.name === "Fleet"
                      ? "Richiedi Preventivo"
                      : "Inizia Ora"}
                  </Button>

                  {plan.name !== "Fleet" && (
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Primo mese gratuito • Disdici quando vuoi
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Confronto Dettagliato
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Caratteristiche
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Base
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Fleet
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Tracciamento GPS</td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">
                    Garanzia ritrovamento
                  </td>
                  <td className="py-3 px-4 text-center">-</td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Gestione flotta</td>
                  <td className="py-3 px-4 text-center">-</td>
                  <td className="py-3 px-4 text-center">-</td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Supporto</td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    Standard
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    Prioritario
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    Dedicato 24/7
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Non sei sicuro quale piano scegliere?
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#wizard")}
            className="border-blue-600 text-blue-600 hover:bg-blue-50 mr-4"
          >
            Usa il Wizard
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("#contatti")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Parla con un Esperto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Piani;
