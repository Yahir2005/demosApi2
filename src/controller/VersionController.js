const { Version } = require('../model');

const getAll = async (req, res) => {
    try {
        const versiones = await Version.findAll();
        res.json(versiones);
} catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const version = await Version.findByPk(req.params.id);
        if (!version) return res.status(404).json({ error: 'Version no encontrado'});
        res.json(version);
    } catch (error) {
        res.status(500).json({ error: error.message});

    }
};

const create = async (req, res) => {
    try {
        const version = await Version.create(req.body);
        res.status(201).json(version);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

const update = async (req, res) => {
    try{
        const version = await Version.findByPk(req.params.id);
        if (!version) return res.status(404).json({ error: 'Version no encontrado'});
        await version.update( req.body);
        res.json({ message: 'Version actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    
    }
};

const remove = async (req, res) => {
    try { 
        const version = await Version.findByPk(req.params.id);
        if (!version) return res.status(404).json({error: 'Version no encontrado' });
        await version.destroy();
        res.json({ message: 'version eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
    
};

module.exports = { getAll, getById, create, update, remove };


