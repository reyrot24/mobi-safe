'use client'

import { Button } from '@/components/ui/button'
import { Shield, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="pt-40 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">MOBILITY</span>
                <br />
                <span className="text-orange-500">safe</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                Satellitare con garanzia di ritrovamento
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Proteggi il tuo veicolo con la tecnologia satellitare più avanzata. 
              Monitoraggio in tempo reale, allarmi istantanei e servizio di recupero garantito.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Protezione 24/7</h3>
                  <p className="text-sm text-gray-600">Monitoraggio continuo</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">GPS Preciso</h3>
                  <p className="text-sm text-gray-600">Localizzazione esatta</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="h-8 w-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Risposta Rapida</h3>
                  <p className="text-sm text-gray-600">Intervento immediato</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('#wizard')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Trova il tuo piano
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#come-funziona')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Come funziona
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Il tuo veicolo</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Stato:</span>
                    <span className="font-semibold">Protetto</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Posizione:</span>
                    <span className="font-semibold">Tracciata</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Batteria:</span>
                    <span className="font-semibold">98%</span>
                  </div>
                </div>
                <div className="mt-6 bg-white/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Via Roma 123, Milano</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

