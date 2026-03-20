import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Newspaper, Award, Video, Download, ExternalLink } from 'lucide-react'

const Risorse = () => {
  const resources = [
    {
      category: 'Case Study',
      icon: BookOpen,
      items: [
        {
          title: 'Recupero Record: Auto Rubata Ritrovata in 45 Minuti',
          description: 'Come la nostra tecnologia ha permesso il recupero più veloce dell\'anno.',
          type: 'PDF',
          date: '15 Nov 2024',
          featured: true
        },
        {
          title: 'Flotta Aziendale: -80% di Furti con Mobility Safe',
          description: 'Caso studio di un\'azienda di trasporti che ha ridotto drasticamente i furti.',
          type: 'PDF',
          date: '8 Nov 2024',
          featured: false
        },
        {
          title: 'Moto d\'Epoca: Protezione per Veicoli di Valore',
          description: 'Come proteggere veicoli storici e di collezione con la nostra tecnologia.',
          type: 'PDF',
          date: '1 Nov 2024',
          featured: false
        }
      ]
    },
    {
      category: 'Blog & Guide',
      icon: Newspaper,
      items: [
        {
          title: 'Guida Completa alla Sicurezza del Veicolo 2024',
          description: 'Tutto quello che devi sapere per proteggere il tuo veicolo dai furti.',
          type: 'Articolo',
          date: '20 Nov 2024',
          featured: true
        },
        {
          title: '10 Consigli per Prevenire il Furto della Tua Auto',
          description: 'Strategie pratiche e tecnologie per aumentare la sicurezza.',
          type: 'Articolo',
          date: '18 Nov 2024',
          featured: false
        },
        {
          title: 'GPS vs Satellitare: Quale Tecnologia Scegliere?',
          description: 'Confronto dettagliato tra le diverse tecnologie di tracciamento.',
          type: 'Articolo',
          date: '12 Nov 2024',
          featured: false
        }
      ]
    },
    {
      category: 'Press & Media',
      icon: Award,
      items: [
        {
          title: 'Mobility Safe Vince il Premio Innovazione 2024',
          description: 'Riconoscimento per la migliore soluzione di sicurezza veicolare.',
          type: 'Comunicato',
          date: '25 Nov 2024',
          featured: true
        },
        {
          title: 'Partnership con le Principali Assicurazioni Italiane',
          description: 'Accordi strategici per sconti sui premi assicurativi.',
          type: 'Comunicato',
          date: '10 Nov 2024',
          featured: false
        },
        {
          title: 'Espansione in Europa: 50.000 Veicoli Protetti',
          description: 'Milestone importante nel percorso di crescita internazionale.',
          type: 'Comunicato',
          date: '3 Nov 2024',
          featured: false
        }
      ]
    },
    {
      category: 'Video & Tutorial',
      icon: Video,
      items: [
        {
          title: 'Come Funziona l\'App Mobility Safe',
          description: 'Video tutorial completo per utilizzare al meglio la nostra app.',
          type: 'Video',
          date: '22 Nov 2024',
          featured: true
        },
        {
          title: 'Installazione Dispositivo: Guida Passo-Passo',
          description: 'Procedura di installazione professionale spiegata nel dettaglio.',
          type: 'Video',
          date: '15 Nov 2024',
          featured: false
        },
        {
          title: 'Webinar: Sicurezza Flotte Aziendali',
          description: 'Sessione formativa per responsabili fleet e aziende.',
          type: 'Webinar',
          date: '5 Nov 2024',
          featured: false
        }
      ]
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return Download
      case 'Video':
      case 'Webinar':
        return Video
      default:
        return ExternalLink
    }
  }

  return (
    <section id="risorse" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Risorse e Approfondimenti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Case study, guide, comunicati stampa e contenuti formativi per approfondire 
            il mondo della sicurezza veicolare.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12">
          {resources.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = getIcon(item.type)
                    return (
                      <Card 
                        key={itemIndex} 
                        className={`hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                          item.featured ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between mb-2">
                            <Badge 
                              variant="secondary" 
                              className={`${
                                item.featured 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {item.type}
                            </Badge>
                            {item.featured && (
                              <Badge className="bg-orange-100 text-orange-800">
                                In Evidenza
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {item.date}
                            </span>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                            >
                              <ItemIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Rimani Aggiornato
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere le ultime novità, 
            case study e guide sulla sicurezza veicolare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Iscriviti
            </Button>
          </div>
          <p className="text-xs text-blue-200 mt-3">
            Nessuno spam. Puoi disiscriverti in qualsiasi momento.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hai Bisogno di Informazioni Specifiche?
          </h3>
          <p className="text-gray-600 mb-6">
            Il nostro team è a disposizione per fornirti documentazione personalizzata 
            e rispondere a tutte le tue domande.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Contatta il Nostro Team
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Risorse

