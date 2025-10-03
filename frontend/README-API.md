# 🚀 API Documentation - Mobility Safe

## 📋 Panoramica

Il sito Mobility Safe ora include API funzionanti per:
- **Form Contatti**: Invio email automatico e gestione richieste
- **Google Maps**: Mappa interattiva della sede aziendale

## 🔧 Configurazione

### 1. Google Maps API

Per abilitare la mappa interattiva:

1. Vai su [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuovo progetto o seleziona uno esistente
3. Abilita l'API "Maps JavaScript API"
4. Crea una chiave API
5. Aggiungi la chiave nel file `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 2. Email API (Nodemailer)

Per l'invio automatico delle email:

1. Configura un account Gmail per l'invio
2. Genera una App Password: [Guida Google](https://support.google.com/accounts/answer/185833)
3. Aggiungi le credenziali nel file `.env.local`:

```env
EMAIL_USER=info@mobilitysafe.it
EMAIL_PASS=your_app_password_here
```

## 📡 Endpoint API

### POST /api/contact

Gestisce l'invio delle richieste di contatto.

**Request Body:**
```json
{
  "name": "Mario Rossi",
  "email": "mario.rossi@email.com",
  "phone": "+39 123 456 7890",
  "province": "Napoli",
  "vehicleType": "Automobile",
  "message": "Vorrei informazioni sui vostri servizi",
  "interestedAs": "Cliente",
  "consent": true
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Richiesta inviata con successo! Ti contatteremo entro 24 ore.",
  "id": 1234567890
}
```

**Response (Error):**
```json
{
  "error": "Campi obbligatori mancanti"
}
```

### GET /api/contact

Endpoint di test per verificare che l'API sia attiva.

**Response:**
```json
{
  "message": "API Contact endpoint attivo",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🗺️ Google Maps Component

### Utilizzo

```tsx
import GoogleMap from '@/components/GoogleMap'

<GoogleMap 
  center={{ lat: 40.8518, lng: 14.2681 }}
  zoom={16}
  markers={[
    {
      position: { lat: 40.8518, lng: 14.2681 },
      title: "MOBILITY EXPRESS S.R.L.",
      info: "<div>Informazioni aggiuntive</div>"
    }
  ]}
/>
```

### Props

- `center`: Coordinate del centro mappa (default: Napoli)
- `zoom`: Livello di zoom (default: 15)
- `markers`: Array di marker aggiuntivi (opzionale)

## 📧 Funzionalità Email

### Email Automatiche

Il sistema invia automaticamente:

1. **Email all'azienda** con i dettagli della richiesta
2. **Email di conferma al cliente** con riepilogo

### Template Email

Le email includono:
- Dati completi del cliente
- Timestamp della richiesta
- Informazioni aziendali
- Link utili

## 🔒 Sicurezza

### Validazioni Implementate

- **Email**: Controllo formato con regex
- **Campi obbligatori**: Nome, email, consenso privacy
- **Sanitizzazione**: Prevenzione XSS nei dati input
- **Rate limiting**: Da implementare in produzione

### Best Practices

- Usa sempre HTTPS in produzione
- Configura CORS appropriatamente
- Implementa rate limiting
- Monitora i log delle API
- Usa variabili d'ambiente per credenziali

## 🚀 Deploy in Produzione

### Variabili d'Ambiente

Assicurati di configurare:

```env
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_production_key

# Email
EMAIL_USER=your_production_email
EMAIL_PASS=your_production_password

# Database (futuro)
DATABASE_URL=your_production_db_url
```

### Servizi Consigliati

- **Hosting**: Vercel, Netlify, AWS
- **Database**: PostgreSQL, MongoDB
- **Email**: SendGrid, AWS SES, Gmail
- **Monitoring**: Sentry, LogRocket

## 🔄 Prossimi Sviluppi

### Database Integration

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  province VARCHAR(100),
  vehicle_type VARCHAR(100),
  message TEXT,
  interested_as VARCHAR(50),
  consent BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);
```

### Dashboard Admin

- Visualizzazione richieste
- Gestione lead
- Statistiche contatti
- Export dati

### Notifiche Real-time

- WebSocket per notifiche istantanee
- Push notifications
- SMS alerts

## 🐛 Troubleshooting

### Problemi Comuni

1. **Mappa non carica**: Verifica la chiave API Google Maps
2. **Email non inviate**: Controlla credenziali Gmail e App Password
3. **CORS errors**: Configura Next.js per le API routes
4. **Form non funziona**: Verifica la connessione all'endpoint `/api/contact`

### Debug

```bash
# Verifica API
curl -X GET http://localhost:3000/api/contact

# Test form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","consent":true}'
```

## 📞 Supporto

Per assistenza tecnica:
- Email: info@mobilitysafe.it
- Telefono: 800 123 456
- Documentazione: Questo file README-API.md

