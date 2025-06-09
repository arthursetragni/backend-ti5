const nodemailer = require('nodemailer');
const Usuario = require('../models/Usuario');

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: '1446329@sga.pucminas.br',
    pass: 'feliZ2023!',
  },
});

async function enviarNotificacaoDispositivo(mac) {
  try {
    const usuario = await Usuario.findOne();
    if (!usuario || !usuario.email) {
      console.error('Nenhum usuário com e-mail encontrado.');
      return;
    }

    const mailOptions = {
      from: '"Eu mesmo" <1446329@sga.pucminas.br>',
      to: usuario.email,
      subject: 'Novo dispositivo detectado',
      text: `Um novo dispositivo foi detectado com o MAC address: ${mac}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email enviado:', info.response);
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
  }
}

module.exports = { enviarNotificacaoDispositivo };
