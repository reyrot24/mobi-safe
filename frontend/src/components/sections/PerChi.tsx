import { Card, CardContent } from '@/components/ui/card'
import { Car, Truck, Bike, Building2 } from 'lucide-react'

const PerChi = () => {
  const targets = [
    {
      icon: Car,
      title: 'Proprietari di Auto',
      description: 'Proteggi la tua auto da furti e vandalismi con il monitoraggio satellitare più avanzato.',
      features: ['Allarme antifurto', 'Tracciamento GPS', 'Notifiche push']
    },
    {
      icon: Bike,
      title: 'Motociclisti',
      description: 'Sicurezza totale per la tua moto con dispositivi discreti e resistenti alle intemperie.',
      features: ['Impermeabile', 'Batteria lunga durata', 'Installazione nascosta']
    },
    {
      icon: Truck,
      title: 'Veicoli Commerciali',
      description: 'Monitora la tua flotta aziendale e ottimizza i percorsi con dati in tempo reale.',
      features: ['Gestione flotta', 'Report dettagliati', 'Controllo carburante']
    },
    {
      icon: Building2,
      title: 'Aziende',
      description: 'Soluzioni enterprise per la gestione completa di flotte aziendali di qualsiasi dimensione.',
      features: ['Dashboard centralizzata', 'API integrate', 'Supporto dedicato']
    }
  ]

  return (
    <section id="per-chi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Per Chi è Mobility Safe?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La nostra tecnologia si adatta a ogni esigenza, dal singolo proprietario 
            alle grandi flotte aziendali.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((target, index) => {
            const IconComponent = target.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {target.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {target.description}
                  </p>
                  
                  <div className="space-y-2">
                    {target.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Non importa che tipo di veicolo possiedi, abbiamo la soluzione giusta per te.
          </p>
          <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold">
            <span>Scopri tutti i nostri piani</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerChi

