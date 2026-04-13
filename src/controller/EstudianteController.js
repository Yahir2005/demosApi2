const { Estudiante } = require('../model');

const getAll = async (req, res) => {
  try {
    const data = await Estudiante.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const data = await Estudiante.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const data = await Estudiante.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const data = await Estudiante.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Estudiante no encontrado' });

    await data.update(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const data = await Estudiante.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Estudiante no encontrado' });

    await data.destroy();
    res.json({ message: 'Estudiante eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove };
