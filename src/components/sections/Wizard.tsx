"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Bike,
  Truck,
  Building2,
  Shield,
  Zap,
  Users,
  ArrowLeft,
} from "lucide-react";

interface WizardState {
  vehicleType: string;
  priority: string;
  installation: string;
  usage: string;
  budget: string;
}

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [wizardState, setWizardState] = useState<WizardState>({
    vehicleType: "",
    priority: "",
    installation: "",
    usage: "",
    budget: "",
  });
  const [recommendedPlan, setRecommendedPlan] = useState("");

  // Update URL with wizard state
  useEffect(() => {
    const params = new URLSearchParams();
    if (wizardState.vehicleType) params.set("v", wizardState.vehicleType);
    if (wizardState.priority) params.set("p", wizardState.priority);
    if (wizardState.installation) params.set("i", wizardState.installation);
    if (wizardState.usage) params.set("u", wizardState.usage);
    if (wizardState.budget) params.set("b", wizardState.budget);

    const newUrl = `${window.location.pathname}${
      params.toString() ? "?" + params.toString() : ""
    }`;
    window.history.replaceState({}, "", newUrl);
  }, [wizardState]);

  // Calculate recommended plan
  useEffect(() => {
    if (wizardState.vehicleType && wizardState.priority) {
      if (
        wizardState.vehicleType === "fleet" ||
        wizardState.usage === "business"
      ) {
        setRecommendedPlan("Fleet");
      } else if (
        wizardState.priority === "premium" ||
        wizardState.budget === "high"
      ) {
        setRecommendedPlan("Pro");
      } else {
        setRecommendedPlan("Base");
      }
    }
  }, [wizardState]);

  const steps = [
    {
      title: "Che tipo di veicolo vuoi proteggere?",
      options: [
        {
          id: "auto",
          label: "Automobile",
          icon: Car,
          description: "Auto, SUV, berlina",
        },
        {
          id: "moto",
          label: "Motociclo",
          icon: Bike,
          description: "Moto, scooter, quad",
        },
        {
          id: "commerciale",
          label: "Veicolo Commerciale",
          icon: Truck,
          description: "Furgone, camion, van",
        },
        {
          id: "fleet",
          label: "Flotta Aziendale",
          icon: Building2,
          description: "Più veicoli aziendali",
        },
      ],
    },
    {
      title: "Qual è la tua priorità principale?",
      options: [
        {
          id: "basic",
          label: "Protezione Base",
          icon: Shield,
          description: "Tracciamento e allarmi essenziali",
        },
        {
          id: "premium",
          label: "Protezione Avanzata",
          icon: Zap,
          description: "Funzioni premium e recupero garantito",
        },
        {
          id: "business",
          label: "Gestione Professionale",
          icon: Users,
          description: "Dashboard aziendale e report",
        },
      ],
    },
    {
      title: "Preferisci installazione professionale?",
      options: [
        {
          id: "professional",
          label: "Installazione Professionale",
          description: "Tecnico a domicilio incluso",
        },
        {
          id: "diy",
          label: "Fai da Te",
          description: "Kit autoinstallante con supporto",
        },
        {
          id: "dealer",
          label: "Presso Rivenditore",
          description: "Installazione presso partner autorizzato",
        },
      ],
    },
    {
      title: "Come utilizzi principalmente il veicolo?",
      options: [
        {
          id: "personal",
          label: "Uso Personale",
          description: "Famiglia, tempo libero, quotidiano",
        },
        {
          id: "business",
          label: "Uso Professionale",
          description: "Lavoro, clienti, rappresentanza",
        },
        {
          id: "mixed",
          label: "Uso Misto",
          description: "Personale e professionale",
        },
      ],
    },
    {
      title: "Qual è il tuo budget mensile?",
      options: [
        {
          id: "low",
          label: "Fino a 15€/mese",
          description: "Soluzione economica",
        },
        {
          id: "medium",
          label: "15-30€/mese",
          description: "Rapporto qualità-prezzo",
        },
        {
          id: "high",
          label: "Oltre 30€/mese",
          description: "Massima protezione",
        },
      ],
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    const stepKeys: (keyof WizardState)[] = [
      "vehicleType",
      "priority",
      "installation",
      "usage",
      "budget",
    ];
    setWizardState((prev) => ({
      ...prev,
      [stepKeys[currentStep]]: optionId,
    }));

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetWizard = () => {
    setCurrentStep(0);
    setWizardState({
      vehicleType: "",
      priority: "",
      installation: "",
      usage: "",
      budget: "",
    });
    setRecommendedPlan("");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isCompleted = currentStep === steps.length;

  return (
    <section
      id="wizard"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trova il Piano Perfetto per Te
          </h2>
          <p className="text-xl text-gray-600">
            Rispondi a poche semplici domande e ti consiglieremo la soluzione
            ideale
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progresso</span>
            <span className="text-sm text-gray-600">
              {isCompleted ? steps.length : currentStep + 1} di {steps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((isCompleted ? steps.length : currentStep + 1) /
                    steps.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Wizard Content */}
        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            {!isCompleted ? (
              <>
                {/* Current Step */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {steps[currentStep].title}
                  </h3>
                  <p className="text-gray-600">
                    Seleziona l'opzione che meglio descrive la tua situazione
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {steps[currentStep].options.map((option) => {
                    const IconComponent = (option as any).icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                        className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left group"
                      >
                        <div className="flex items-start space-x-4">
                          {IconComponent && (
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                              <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {option.label}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={goBack}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Indietro</span>
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={resetWizard}
                    className="text-gray-500"
                  >
                    Ricomincia
                  </Button>
                </div>
              </>
            ) : (
              /* Results */
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Perfetto! Abbiamo il piano ideale per te
                  </h3>
                  <p className="text-gray-600">
                    Basandoci sulle tue risposte, ti consigliamo:
                  </p>
                </div>

                {/* Recommended Plan */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-8">
                  <Badge className="bg-white/20 text-white mb-4">
                    Piano Consigliato
                  </Badge>
                  <h4 className="text-3xl font-bold mb-2">
                    Piano {recommendedPlan}
                  </h4>
                  <p className="text-blue-100 mb-4">
                    La soluzione perfetta per le tue esigenze
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={() => scrollToSection("#piani")}
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Vedi Dettagli Piano
                    </Button>
                    <Button
                      onClick={() => scrollToSection("#contatti")}
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      Richiedi Preventivo
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={resetWizard}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Rifai il Test</span>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Wizard;
