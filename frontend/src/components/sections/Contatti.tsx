"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Send,
  PhoneCall,
} from "lucide-react";
import SimpleMap from "@/components/SimpleMap";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PrivacyPolicy from "./PrivacyPolicy";

type SubmitStatus = "idle" | "success" | "error";

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    province: "",
    vehicleType: "",
    message: "",
    interestedAs: "Cliente",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage] = useState("");

  /* const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.consent) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Compila tutti i campi obbligatori e accetta la privacy policy."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(result.message || "Richiesta inviata con successo!");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          province: "",
          vehicleType: "",
          message: "",
          interestedAs: "Cliente",
          consent: false,
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Si è verificato un errore. Riprova più tardi."
        );
      }
    } catch (error) {
      console.error("Errore nell'invio:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Errore di connessione. Verifica la tua connessione internet e riprova."
      );
    } finally {
      setIsSubmitting(false);
    }
  }; */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here would be the actual API call to /api/leads
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        province: "",
        vehicleType: "",
        message: "",
        interestedAs: "Cliente",
        consent: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const provinces = [
    "Agrigento",
    "Alessandria",
    "Ancona",
    "Aosta",
    "Arezzo",
    "Ascoli Piceno",
    "Asti",
    "Avellino",
    "Bari",
    "Barletta-Andria-Trani",
    "Belluno",
    "Benevento",
    "Bergamo",
    "Biella",
    "Bologna",
    "Bolzano",
    "Brescia",
    "Brindisi",
    "Cagliari",
    "Caltanissetta",
    "Campobasso",
    "Carbonia-Iglesias",
    "Caserta",
    "Catania",
    "Catanzaro",
    "Chieti",
    "Como",
    "Cosenza",
    "Cremona",
    "Crotone",
    "Cuneo",
    "Enna",
    "Fermo",
    "Ferrara",
    "Firenze",
    "Foggia",
    "Forlì-Cesena",
    "Frosinone",
    "Genova",
    "Gorizia",
    "Grosseto",
    "Imperia",
    "Isernia",
    "La Spezia",
    "L'Aquila",
    "Latina",
    "Lecce",
    "Lecco",
    "Livorno",
    "Lodi",
    "Lucca",
    "Macerata",
    "Mantova",
    "Massa-Carrara",
    "Matera",
    "Messina",
    "Milano",
    "Modena",
    "Monza e Brianza",
    "Napoli",
    "Novara",
    "Nuoro",
    "Olbia-Tempio",
    "Oristano",
    "Padova",
    "Palermo",
    "Parma",
    "Pavia",
    "Perugia",
    "Pesaro e Urbino",
    "Pescara",
    "Piacenza",
    "Pisa",
    "Pistoia",
    "Pordenone",
    "Potenza",
    "Prato",
    "Ragusa",
    "Ravenna",
    "Reggio Calabria",
    "Reggio Emilia",
    "Rieti",
    "Rimini",
    "Roma",
    "Rovigo",
    "Salerno",
    "Medio Campidano",
    "Sassari",
    "Savona",
    "Siena",
    "Siracusa",
    "Sondrio",
    "Taranto",
    "Teramo",
    "Terni",
    "Torino",
    "Ogliastra",
    "Trapani",
    "Trento",
    "Treviso",
    "Trieste",
    "Udine",
    "Varese",
    "Venezia",
    "Verbano-Cusio-Ossola",
    "Vercelli",
    "Verona",
    "Vibo Valentia",
    "Vicenza",
    "Viterbo",
  ];

  const vehicleTypes = [
    "Automobile",
    "Motociclo/Scooter",
    "Veicolo Commerciale",
    "Flotta Aziendale",
    "Altro",
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefono",
      value: "081 17676699",
      description: "Numero verde gratuito",
      available: "24/7",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@mobilitysafe.it",
      description: "Risposta entro 2 ore",
      available: "Sempre",
    },
    {
      icon: MapPin,
      title: "Sede Principale",
      value: "Via Emanuele Gianturco 92, Napoli",
      description: "Uffici e showroom",
      available: "Lun-Ven 9-18",
    },
    {
      icon: PhoneCall,
      title: "Prenota una call",
      value: "Assistenza immediata",
      description: "Supporto in tempo reale",
      available: "Lun-Ven 9-18",
      button: {
        label: "Prenota",
        link: "https://tidycal.com/sviluppo/introduzione-mobility-express-mnop9zp",
      },
    },
  ];

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contattaci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo qui per rispondere a tutte le tue domande e aiutarti a
            scegliere la soluzione perfetta per le tue esigenze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Richiedi Informazioni
                </CardTitle>
                <p className="text-gray-600">
                  Compila il form e ti contatteremo entro 24 ore con un
                  preventivo personalizzato.
                </p>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-gray-600 mb-4">{submitMessage}</p>
                    <Button
                      onClick={() => setSubmitStatus("idle")}
                      variant="outline"
                    >
                      Invia un altro messaggio
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Nome e Cognome *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Mario Rossi"
                        className="mt-1"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="mario.rossi@email.com"
                        className="mt-1"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Telefono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+39 123 456 7890"
                        className="mt-1"
                      />
                    </div>

                    {/* Province */}
                    <div>
                      <Label htmlFor="province">Provincia</Label>
                      <Select
                        value={formData.province}
                        onValueChange={(value) =>
                          setFormData({ ...formData, province: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Seleziona provincia" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province} value={province}>
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Vehicle Type */}
                    <div>
                      <Label htmlFor="vehicleType">Tipo di Veicolo</Label>
                      <Select
                        value={formData.vehicleType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, vehicleType: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Seleziona tipo di veicolo" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicleTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Messaggio</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Descrivi le tue esigenze o fai le tue domande..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    {/* Interested As */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sei interessato come:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          type="button"
                          variant={
                            formData.interestedAs === "Cliente"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              interestedAs: "Cliente",
                            })
                          }
                        >
                          Cliente
                        </Button>
                        <Button
                          type="button"
                          variant={
                            formData.interestedAs === "Partner/Dealer"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              interestedAs: "Partner/Dealer",
                            })
                          }
                        >
                          Partner/Dealer
                        </Button>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consent: e.target.checked,
                          })
                        }
                        className="mt-1"
                      />
                      <div className="flex ">
                        <label className="text-sm flex gap-1 text-gray-600">
                          Acconsento al trattamento dei miei dati personali
                          secondo la
                          <Dialog>
                            <DialogTrigger asChild>
                              <p className="text-blue-600 hover:underline cursor-pointer">
                                Privacy Policy
                              </p>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg sm:max-w-3xl h-[700px] overflow-auto no-scrollbar">
                              <DialogTitle hidden />
                              <DialogDescription hidden />
                              <PrivacyPolicy />
                            </DialogContent>
                          </Dialog>
                          . *
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.consent}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "error" && (
                      <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span>{submitMessage}</span>
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-row justify-between items-center">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {info.description}
                        </p>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{info.available}</span>
                        </div>
                      </div>
                    </div>
                    {index === 3 && (
                      <div>
                        <Button
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <a
                            href="https://tidycal.com/sviluppo/introduzione-mobility-express-mnop9zp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prenota una call
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="font-bold text-red-900 mb-2">
                    Emergenza Furto
                  </h4>
                  <p className="text-red-800 font-bold text-lg mb-2">
                    800 EMERGENCY
                  </p>
                  <p className="text-sm text-red-700">
                    Linea dedicata attiva 24/7 per segnalazioni di furto
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>La Nostra Sede</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <SimpleMap />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contatti;
