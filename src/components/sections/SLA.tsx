import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Shield, Clock, CheckCircle, XCircle, FileText } from 'lucide-react'

const SLA = () => {
  const inclusions = [
    {
      title: 'Monitoraggio Continuo',
      description: 'Sorveglianza 24/7 del tuo veicolo con centro operativo sempre attivo',
      guarantee: '99.9% uptime'
    },
    {
      title: 'Allarmi Istantanei',
      description: 'Notifiche immediate in caso di movimento non autorizzato o manomissione',
      guarantee: '< 30 secondi'
    },
    {
      title: 'Localizzazione Precisa',
      description: 'GPS di precisione con aggiornamenti in tempo reale della posizione',
      guarantee: '±3 metri'
    },
    {
      title: 'Servizio di Recupero',
      description: 'Intervento delle forze dell\'ordine e recupero del veicolo rubato',
      guarantee: 'Entro 2 ore'
    },
    {
      title: 'Supporto Tecnico',
      description: 'Assistenza clienti specializzata per qualsiasi problema o domanda',
      guarantee: '24/7 disponibile'
    },
    {
      title: 'Aggiornamenti Software',
      description: 'Aggiornamenti automatici del firmware per nuove funzionalità',
      guarantee: 'Sempre inclusi'
    }
  ]

  const exclusions = [
    {
      title: 'Danni al Veicolo',
      description: 'Non copriamo danni fisici al veicolo durante il furto o recupero'
    },
    {
      title: 'Oggetti Personali',
      description: 'Oggetti lasciati all\'interno del veicolo non sono coperti dal servizio'
    },
    {
      title: 'Uso Improprio',
      description: 'Danni causati da manomissione del dispositivo o uso non conforme'
    },
    {
      title: 'Catastrofi Naturali',
      description: 'Eventi eccezionali come terremoti, alluvioni o atti di guerra'
    },
    {
      title: 'Zone Non Coperte',
      description: 'Aree senza copertura di rete mobile o GPS (tunnel, garage sotterranei)'
    }
  ]

  const slaMetrics = [
    {
      metric: 'Tempo di Risposta Allarmi',
      target: '< 30 secondi',
      description: 'Dal rilevamento dell\'evento alla notifica'
    },
    {
      metric: 'Disponibilità Servizio',
      target: '99.9%',
      description: 'Uptime garantito del sistema di monitoraggio'
    },
    {
      metric: 'Precisione GPS',
      target: '±3 metri',
      description: 'Accuratezza della localizzazione in condizioni normali'
    },
    {
      metric: 'Tempo Intervento Recupero',
      target: '< 2 ore',
      description: 'Dall\'allarme furto all\'inizio delle operazioni di recupero'
    },
    {
      metric: 'Supporto Clienti',
      target: '< 5 minuti',
      description: 'Tempo medio di risposta del supporto telefonico'
    },
    {
      metric: 'Risoluzione Problemi',
      target: '< 24 ore',
      description: 'Tempo massimo per risolvere problemi tecnici'
    }
  ]

  return (
    <section id="sla" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            Service Level Agreement
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I Nostri Impegni di Servizio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trasparenza totale sui nostri standard di qualità e garanzie di servizio.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="inclusions" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="inclusions" className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Inclusioni</span>
            </TabsTrigger>
            <TabsTrigger value="exclusions" className="flex items-center space-x-2">
              <XCircle className="h-4 w-4" />
              <span>Esclusioni</span>
            </TabsTrigger>
            <TabsTrigger value="sla" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>SLA Temporali</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Documenti</span>
            </TabsTrigger>
          </TabsList>

          {/* Inclusions Tab */}
          <TabsContent value="inclusions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inclusions.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {item.guarantee}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Exclusions Tab */}
          <TabsContent value="exclusions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exclusions.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <XCircle className="h-5 w-5 text-red-500" />
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Importante da Sapere
                  </h4>
                  <p className="text-yellow-700">
                    Le esclusioni elencate sono standard del settore e non influiscono sulla qualità 
                    del nostro servizio di tracciamento e recupero. Per maggiori dettagli, consulta 
                    i termini e condizioni completi.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* SLA Metrics Tab */}
          <TabsContent value="sla">
            <div className="space-y-6">
              {slaMetrics.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.metric}
                      </h4>
                      <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
                        {item.target}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                Garanzia di Qualità
              </h4>
              <p className="text-blue-800">
                Se non rispettiamo i nostri SLA per più di 3 volte consecutive, 
                ti offriamo un mese di servizio gratuito. La tua soddisfazione è la nostra priorità.
              </p>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Termini e Condizioni</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Documento completo con tutti i dettagli del servizio, diritti e doveri.
                  </p>
                  <Button variant="outline" className="w-full">
                    Scarica PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>Informativa Privacy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Come trattiamo i tuoi dati personali in conformità al GDPR.
                  </p>
                  <Button variant="outline" className="w-full">
                    Scarica PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span>Manuale Utente</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Guida completa all'uso dell'app e delle funzionalità del servizio.
                  </p>
                  <Button variant="outline" className="w-full">
                    Scarica PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-orange-600" />
                    <span>Certificazioni</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Certificazioni ISO 27001, CE e altre attestazioni di qualità.
                  </p>
                  <Button variant="outline" className="w-full">
                    Visualizza
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default SLA

