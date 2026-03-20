import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Clock, Award } from "lucide-react";

const Vantaggi = () => {
  const mainAdvantages = [
    {
      icon: Shield,
      title: "Garanzia di Ritrovamento",
      description:
        "Se il tuo veicolo viene rubato, lo ritroviamo o ti rimborsiamo. È la nostra promessa.",
      highlight: "Garanzia 100%",
    },
    {
      icon: Zap,
      title: "Tecnologia Avanzata",
      description:
        "GPS di ultima generazione con precisione centimetrica e connettività 4G/5G.",
      highlight: "Precisione GPS",
    },
    {
      icon: Clock,
      title: "Monitoraggio 24/7",
      description:
        "Il nostro centro operativo monitora il tuo veicolo 24 ore su 24, 365 giorni l'anno.",
      highlight: "Sempre Attivo",
    },
  ];

  const features = [
    "Installazione professionale inclusa",
    "App mobile per iOS e Android",
    "Notifiche push in tempo reale",
    "Storico percorsi dettagliato",
    "Allarmi personalizzabili",
    "Supporto clienti dedicato",
    "Aggiornamenti firmware automatici",
    "Crittografia dati end-to-end",
    "Backup su cloud sicuro",
    "Integrazione con assicurazioni",
    "Report mensili dettagliati",
    "Accesso web dashboard",
  ];

  const stats = [
    { number: "99.8%", label: "Tasso di recupero" },
    { number: "< 2min", label: "Tempo di risposta" },
    { number: "50k+", label: "Veicoli protetti" },
    { number: "24/7", label: "Supporto attivo" },
  ];

  return (
    <section id="vantaggi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            I Nostri Vantaggi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perché Scegliere Mobility Safe?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Non siamo solo un sistema di tracciamento. Siamo il tuo partner per
            la sicurezza del veicolo.
          </p>
        </div>

        {/* Main Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainAdvantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {advantage.highlight}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-blue-600 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Tutto Incluso nel Servizio
            </h3>
            <p className="text-gray-600">
              Ogni piano include tutte queste funzionalità avanzate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
            <Award className="h-5 w-5" />
            <span className="font-semibold">
              Certificato ISO 27001 per la sicurezza dei dati
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vantaggi;
