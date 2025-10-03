'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Handshake, TrendingUp, Users, Award, MapPin, Phone } from 'lucide-react'

const Dealer = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Crescita del Fatturato',
      description: 'Aggiungi un nuovo servizio ad alto margine al tuo portfolio'
    },
    {
      icon: Users,
      title: 'Clienti Fidelizzati',
      description: 'Offri un servizio continuativo che genera ricavi ricorrenti'
    },
    {
      icon: Award,
      title: 'Formazione Inclusa',
      description: 'Training completo su prodotti, installazione e vendita'
    },
    {
      icon: Handshake,
      title: 'Supporto Dedicato',
      description: 'Account manager dedicato e supporto tecnico specializzato'
    }
  ]

  const requirements = [
    'Officina autorizzata o centro assistenza',
    'Esperienza in installazioni elettroniche',
    'Certificazioni tecniche automotive',
    'Copertura territoriale definita'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="dealer" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Partnership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diventa Partner Mobility Safe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unisciti alla nostra rete di partner autorizzati e offri ai tuoi clienti 
            la tecnologia di sicurezza più avanzata del mercato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Perché Diventare Partner?
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Inizia Subito
                </h4>
                <p className="text-gray-600">
                  Compila il form e ti contatteremo entro 24 ore
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection('#contatti')}
                >
                  Richiedi Informazioni Partner
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Oppure contattaci direttamente:</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4" />
                      <span>800 123 456</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>partner@mobilitysafe.it</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Requisiti per Diventare Partner
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">
            La Nostra Rete di Partner
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Partner Attivi</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Soddisfazione Partner</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">€2.5k</div>
              <div className="text-blue-100">Ricavo Medio Mensile</div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Come Funziona la Partnership
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Candidatura', desc: 'Compila il form di richiesta informazioni' },
              { step: '2', title: 'Valutazione', desc: 'Analizziamo la tua candidatura e territorio' },
              { step: '3', title: 'Formazione', desc: 'Training su prodotti e procedure' },
              { step: '4', title: 'Attivazione', desc: 'Inizi a vendere e installare i nostri sistemi' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dealer

