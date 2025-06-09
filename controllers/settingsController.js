const Usuario = require('../models/Usuario');

// GET /settings → retorna o e-mail atual
const getSettings = async (req, res) => {
  try {
    const usuario = await Usuario.findOne(); // Se você tiver múltiplos usuários, pode filtrar por ID

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ email: usuario.email });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar e-mail do usuário', error });
  }
};

// POST /settings → atualiza o e-mail
const updateSettings = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Campo "email" é obrigatório' });
    }

    let usuario = await Usuario.findOne();

    if (usuario) {
      usuario.email = email;
      await usuario.save();
    } else {
      usuario = new Usuario({ email });
      await usuario.save();
    }

    res.json({
      message: 'E-mail atualizado com sucesso',
      usuario
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar e-mail do usuário', error });
  }
};

module.exports = {
  getSettings,
  updateSettings,
};
