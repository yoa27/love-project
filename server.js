require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');

// Configuration
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuration Email (Gmail)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false 
    }
});

// Route de réception des votes
app.post('/api/vote', (req, res) => {
    const { reason, choice } = req.body;
    const date = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Kigali" });

    console.log(`Vote reçu : ${choice} pour "${reason}"`);

    // Contenu de l'email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Tu t'envoies le mail à toi-même
        subject: `💘 NOUVEAU VOTE : ${choice.toUpperCase()}`,
        html: `
            <div style="font-family: 'Courier New', monospace; padding: 20px; background-color: #fff0f5; border: 4px solid #ff69b4;">
                <h2 style="color: #c71585; text-align: center;">Nouvelle Réponse !</h2>
                <div style="background: white; padding: 15px; border: 2px dashed #ff69b4; margin: 15px 0;">
                    <p style="color: #555; font-size: 14px;">Question :</p>
                    <h3 style="margin-top: 0;">${reason}</h3>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <span style="background-color: ${choice === 'kiss' ? '#ff1493' : '#333'}; color: white; padding: 10px 20px; font-size: 20px; font-weight: bold; border-radius: 5px;">
                        ${choice.toUpperCase()} ${choice === 'kiss' ? '💋' : '✋'}
                    </span>
                </div>
                <p style="font-size: 10px; color: #999; text-align: right; margin-top: 30px;">Heure : ${date}</p>
            </div>
        `
    };

    // Envoi
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur mail:', error);
            // On ne plante pas le serveur pour autant
        } else {
            console.log('Email envoyé avec succès');
        }
    });

    res.json({ status: 'success' });
});

// Lancement
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
