'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Wrench, Smartphone, Shield } from 'lucide-react'

const ComeFunziona = () => {
  const steps = [
    {
      number: '01',
      icon: ShoppingCart,
      title: 'Scegli il Piano',
      description: 'Seleziona il piano più adatto alle tue esigenze utilizzando il nostro wizard guidato.',
      details: [
        'Confronta le caratteristiche',
        'Calcola il prezzo personalizzato',
        'Scegli le opzioni aggiuntive'
      ]
    },
    {
      number: '02',
      icon: Wrench,
      title: 'Installazione',
      description: 'I nostri tecnici certificati installano il dispositivo direttamente presso di te.',
      details: [
        'Appuntamento a domicilio',
        'Installazione professionale',
        'Test di funzionamento completo'
      ]
    },
    {
      number: '03',
      icon: Smartphone,
      title: 'Configurazione App',
      description: 'Scarica l\'app e configura il tuo profilo per iniziare il monitoraggio.',
      details: [
        'Download app gratuita',
        'Registrazione dispositivo',
        'Personalizzazione allarmi'
      ]
    },
    {
      number: '04',
      icon: Shield,
      title: 'Protezione Attiva',
      description: 'Il tuo veicolo è ora protetto 24/7 con monitoraggio continuo e intervento rapido.',
      details: [
        'Monitoraggio in tempo reale',
        'Allarmi automatici',
        'Servizio di recupero attivo'
      ]
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="come-funziona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come Funziona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In soli 4 semplici passaggi, il tuo veicolo sarà protetto con la tecnologia più avanzata.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-700 transition-colors">
                        {step.number}
                      </div>
                    </div>

                    <div className="mb-6 mt-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Processo Semplice e Veloce
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dall\'ordine alla protezione attiva in meno di 48 ore. Il nostro team si occupa di tutto, 
                tu devi solo scegliere il piano e rilassarti.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Installazione gratuita inclusa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Nessun costo nascosto</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Garanzia soddisfatti o rimborsati</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 48h</div>
                <div className="text-gray-600">Dall\'ordine alla protezione attiva</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={() => scrollToSection('#wizard')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Inizia Ora - È Gratis
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Nessun impegno • Preventivo gratuito • Installazione inclusa
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComeFunziona

