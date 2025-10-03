import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint
app.post("/api/contact", async (req, res) => {
  try {
    /*  const {
      name,
      email,
      phone,
      province,
      vehicleType,
      message,
      interestedAs,
      consent,
    } = req.body;

    // Validation
    if (!name || !email || !consent) {
      return res.status(400).json({ error: "Campi obbligatori mancanti" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Email non valida" });
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "info@mobilitysafe.it",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    // Email content
    const emailContent = `
      Nuova richiesta da: ${name}
      Email: ${email}
      Telefono: ${phone || "Non fornito"}
      Provincia: ${province || "Non specificata"}
      Tipo Veicolo: ${vehicleType || "Non specificato"}
      Interessato come: ${interestedAs}
      Messaggio: ${message || "Nessun messaggio"}
      Consenso: ${consent ? "Accordato" : "Non accordato"}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER || "info@mobilitysafe.it",
      to: "info@mobilitysafe.it",
      subject: `Nuova richiesta - ${name}`,
      text: emailContent,
    });

    // Confirmation to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "info@mobilitysafe.it",
      to: email,
      subject: "Conferma ricezione richiesta",
      text: "Grazie per averci contattato, ti risponderemo entro 24 ore.",
    });

    res.json({ success: true, message: "Richiesta inviata con successo!" });
   */ res.json({ success: true, message: "Richiesta inviata con successo!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Errore interno del server" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// GET endpoint
app.get("/api/contact", (req, res) => {
  res.json({ message: "API attiva", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
