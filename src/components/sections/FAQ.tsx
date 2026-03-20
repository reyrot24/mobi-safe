import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HelpCircle, MessageCircle } from 'lucide-react'

const FAQ = () => {
  const faqCategories = [
    {
      category: 'Generale',
      questions: [
        {
          question: 'Come funziona il sistema di tracciamento Mobility Safe?',
          answer: 'Il nostro sistema utilizza tecnologia GPS/GLONASS di ultima generazione combinata con connettività 4G/5G. Il dispositivo, installato discretamente nel veicolo, trasmette la posizione in tempo reale al nostro centro operativo. In caso di movimento non autorizzato, ricevi immediatamente una notifica e il nostro team inizia le procedure di recupero.'
        },
        {
          question: 'Quanto costa il servizio e cosa include?',
          answer: 'Offriamo tre piani: Base (€12.90/mese), Pro (€24.90/mese) e Fleet (su misura). Tutti i piani includono installazione professionale, app mobile, supporto clienti e monitoraggio 24/7. Il piano Pro include anche la garanzia di ritrovamento e servizi premium. Nessun costo nascosto o di attivazione.'
        },
        {
          question: 'Che garanzia offrite sul ritrovamento del veicolo?',
          answer: 'Con il piano Pro e Fleet offriamo una garanzia di ritrovamento del 100%. Se non riusciamo a recuperare il tuo veicolo entro 30 giorni dal furto, ti rimborsiamo completamente il valore di mercato del veicolo (fino a €50.000 per il piano Pro, illimitato per Fleet).'
        },
        {
          question: 'Il dispositivo può essere rimosso dai ladri?',
          answer: 'Il nostro dispositivo è progettato per essere estremamente difficile da individuare e rimuovere. Viene installato in posizioni nascoste e protette del veicolo. Inoltre, ha sensori anti-manomissione che inviano allarmi immediati se qualcuno tenta di rimuoverlo o danneggiarlo.'
        }
      ]
    },
    {
      category: 'Installazione',
      questions: [
        {
          question: 'Come avviene l\'installazione del dispositivo?',
          answer: 'L\'installazione viene effettuata da tecnici certificati direttamente presso la tua abitazione, ufficio o presso uno dei nostri partner autorizzati. Il processo richiede circa 1-2 ore e include test completi di funzionamento. Ti forniamo anche una dimostrazione dell\'app mobile.'
        },
        {
          question: 'L\'installazione danneggia il veicolo?',
          answer: 'Assolutamente no. I nostri tecnici sono specializzati in installazioni automotive e utilizzano solo connessioni sicure che non compromettono l\'elettronica del veicolo. L\'installazione è completamente reversibile e non influisce sulla garanzia del costruttore.'
        },
        {
          question: 'Quanto tempo richiede l\'installazione?',
          answer: 'L\'installazione standard richiede 1-2 ore a seconda del tipo di veicolo. Per veicoli più complessi o installazioni personalizzate, potrebbe richiedere fino a 3 ore. Ti confermeremo i tempi esatti al momento della prenotazione.'
        },
        {
          question: 'Posso installare il dispositivo da solo?',
          answer: 'Sconsigliamo l\'autoinstallazione per garantire il corretto funzionamento e la copertura della garanzia. Tuttavia, per clienti con competenze tecniche, offriamo kit di autoinstallazione con supporto telefonico dedicato (disponibile solo per alcuni modelli di veicolo).'
        }
      ]
    },
    {
      category: 'Tecnologia',
      questions: [
        {
          question: 'Che precisione ha il GPS?',
          answer: 'Il nostro sistema GPS/GLONASS ha una precisione di ±3 metri in condizioni normali. In aree urbane dense o con copertura satellitare limitata, la precisione può variare tra 5-10 metri. Il sistema utilizza anche triangolazione delle celle per mantenere il tracciamento anche in condizioni difficili.'
        },
        {
          question: 'Cosa succede se non c\'è copertura di rete?',
          answer: 'Il dispositivo memorizza i dati di posizione localmente e li trasmette non appena torna in zona coperta. Inoltre, utilizza multiple reti (2G/3G/4G/5G) per massimizzare la copertura. In caso di emergenza, può anche utilizzare reti di altri operatori tramite roaming.'
        },
        {
          question: 'Il dispositivo scarica la batteria del veicolo?',
          answer: 'No, il nostro dispositivo è progettato per un consumo energetico minimo (< 10mA in standby). Ha anche una batteria interna di backup che garantisce 72 ore di autonomia anche con veicolo spento. Include protezioni contro il sovrascarico della batteria del veicolo.'
        },
        {
          question: 'È compatibile con tutti i veicoli?',
          answer: 'Sì, il nostro sistema è compatibile con auto, moto, furgoni, camion e veicoli elettrici/ibridi prodotti dal 2000 in poi. Per veicoli più datati o particolari, effettuiamo una valutazione preliminare per garantire la compatibilità.'
        }
      ]
    },
    {
      category: 'App e Funzionalità',
      questions: [
        {
          question: 'Quali funzionalità offre l\'app mobile?',
          answer: 'L\'app permette di: visualizzare la posizione in tempo reale, consultare lo storico percorsi, impostare geofence personalizzabili, ricevere notifiche push, attivare/disattivare allarmi, condividere la posizione con familiari, generare report di utilizzo e contattare il supporto direttamente.'
        },
        {
          question: 'Posso condividere l\'accesso con altri utenti?',
          answer: 'Sì, puoi invitare fino a 5 utenti secondari (familiari, dipendenti) che avranno accesso limitato alle informazioni del veicolo. Puoi personalizzare i permessi per ogni utente (solo visualizzazione, notifiche, controllo completo).'
        },
        {
          question: 'L\'app funziona offline?',
          answer: 'L\'app può visualizzare l\'ultima posizione nota e lo storico già scaricato anche offline. Per funzionalità in tempo reale e invio comandi, è necessaria una connessione internet. L\'app sincronizza automaticamente i dati quando torna online.'
        },
        {
          question: 'Posso accedere ai dati da computer?',
          answer: 'Sì, con i piani Pro e Fleet hai accesso alla dashboard web completa che offre funzionalità avanzate come report dettagliati, export dati, gestione multi-veicolo e analisi approfondite dei percorsi.'
        }
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
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Domande Frequenti
          </h2>
          <p className="text-xl text-gray-600">
            Trova risposte alle domande più comuni sui nostri servizi e tecnologia.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-2">
                  {category.category}
                </Badge>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category === 'Generale' && 'Informazioni Generali'}
                  {category.category === 'Installazione' && 'Installazione e Setup'}
                  {category.category === 'Tecnologia' && 'Aspetti Tecnici'}
                  {category.category === 'App e Funzionalità' && 'App e Funzionalità'}
                </h3>
              </div>

              {/* Questions */}
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Non hai trovato la risposta che cercavi?
          </h3>
          <p className="text-gray-600 mb-6">
            Il nostro team di esperti è sempre disponibile per rispondere 
            a tutte le tue domande specifiche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('#contatti')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contattaci Ora
            </Button>
            <Button 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Richiedi una Demo
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">&lt; 2min</div>
            <div className="text-sm text-gray-600">Tempo medio di risposta</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Problemi risolti al primo contatto</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Supporto sempre disponibile</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

