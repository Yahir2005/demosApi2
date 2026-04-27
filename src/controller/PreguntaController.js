const { Pregunta } = require('../model');
const getAll = async (req, res) => {
  try {
    const data = await Pregunta.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const data = await Pregunta.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Pregunta no encontrada' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const data = await Pregunta.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const data = await Pregunta.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Pregunta no encontrada' });

    await data.update(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const data = await Pregunta.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Pregunta no encontrada' });

    await data.destroy();
    res.json({ message: 'Pregunta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};