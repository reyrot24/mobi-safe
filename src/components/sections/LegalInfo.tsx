'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Shield, FileText, Award } from 'lucide-react'

const LegalInfo = () => {
  return (
    <section id="legal-info" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informazioni Legali e Societarie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trasparenza e conformità normativa per la massima fiducia dei nostri clienti
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MOBILITY EXPRESS S.R.L. */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-blue-600 text-white">
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">MOBILITY EXPRESS S.R.L.</CardTitle>
                  <p className="text-blue-100">Società di servizi tecnologici</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dati Fiscali</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><span className="font-medium">Partita IVA:</span> 09643751218</div>
                      <div><span className="font-medium">Codice Fiscale:</span> 09643751218</div>
                      <div><span className="font-medium">VAT Europeo:</span> IT09643751218</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Registro Imprese</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><span className="font-medium">REA:</span> NA-1047390</div>
                      <div><span className="font-medium">Sede Legale:</span></div>
                      <div>Via Emanuele Gianturco 92</div>
                      <div>80146 Napoli (NA)</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Contatti Istituzionali</h4>
                  <div className="text-sm text-gray-600">
                    <div><span className="font-medium">PEC:</span> mobilityexpress@pec.it</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Shield className="h-3 w-3 mr-1" />
                    Società regolarmente costituita
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ALCA BROKER S.R.L. */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-orange-600 text-white">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">ALCA BROKER S.R.L.</CardTitle>
                  <p className="text-orange-100">Intermediario assicurativo</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dati Fiscali</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><span className="font-medium">Partita IVA:</span> 07965051217</div>
                      <div><span className="font-medium">Codice Fiscale:</span> 07965051217</div>
                      <div><span className="font-medium">VAT Europeo:</span> IT07965051217</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sede Operativa</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><span className="font-medium">Indirizzo:</span></div>
                      <div>Via Vittoria Colonna 14</div>
                      <div>80121 Napoli (NA)</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Attività</h4>
                  <div className="text-sm text-gray-600">
                    <div>Distribuzione convenzioni e prodotti assicurativi</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    <FileText className="h-3 w-3 mr-1" />
                    Intermediario autorizzato
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📢 Vantaggi Esclusivi per i Nostri Clienti
                </h3>
                <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    I dispositivi e servizi offerti da <strong>MOBILITY EXPRESS S.R.L.</strong> danno diritto a 
                    <span className="text-blue-600 font-semibold"> vantaggi esclusivi e sconti dedicati</span> sulla 
                    polizza furto e incendio stipulata tramite <strong>ALCA BROKER S.R.L.</strong>
                  </p>
                  <p className="text-base text-gray-600">
                    Questi benefici sono riservati esclusivamente ai clienti aderenti alle convenzioni attive.
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="bg-white border-blue-300 text-blue-700 px-4 py-2">
                    Sconti Esclusivi
                  </Badge>
                  <Badge variant="outline" className="bg-white border-orange-300 text-orange-700 px-4 py-2">
                    Convenzioni Attive
                  </Badge>
                  <Badge variant="outline" className="bg-white border-green-300 text-green-700 px-4 py-2">
                    Vantaggi Riservati
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Conformità Normativa</h4>
            <p className="text-sm text-gray-600">
              Tutte le attività sono svolte nel pieno rispetto delle normative vigenti
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Trasparenza</h4>
            <p className="text-sm text-gray-600">
              Informazioni complete e trasparenti su tutti i servizi offerti
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Qualità Certificata</h4>
            <p className="text-sm text-gray-600">
              Standard elevati di qualità e professionalità nei servizi
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default LegalInfo

