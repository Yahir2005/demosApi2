const {Contacto} =require("../model");

const getAll = async (req,res) => {
    try {
        const contactos = await Contacto.findAll();
        res.json(contactos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getById =async (req,res) => {
    try {
        const contactos = await Contacto.findByPk(req.params.id);
        if(!contactos) return res.status(404).json({error:"Contacto no encontrado"});
        res.json(contactos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const create = async (req,res) => {
    try {
        const contactos = await Contacto.create(req.body);
        res.status(201).json(contactos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const update = async (req,res) => {
    try {
        const contactos = await contactos.findByPk(req.params.id);
        if(!contactos) return res.status(404).json({error:"Contacto no encontrado"});
        await contactos.update(req,body);
        res.json(contactos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const remove = async (req,res) => {
    try {
        const remove = await contactos.findByPk(req,params,id);
        if(!contactos) return res.status(404).json({error:"contacto no encontrado"});
        await contactos.destroy();
        res.json({message:"Contacto eliminado"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = {getAll,getById,create,update,remove};