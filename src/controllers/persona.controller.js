import { Persona } from "../models/persona.model.js";

const getPersonas = async (req, res) => {
    try{
        const personas = await Persona.findAll();
        res.json({
            message: "Lista de personas",
            personas: personas
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar las personas"
        });
    }
}


const getPersonaById = async (req, res) => {
    try{
        const persona = await Persona.findByPk(req.params.id);
        if(persona === null){
            return res.status(404).json({
                message: "Persona no encontrada"
            });
        }
        res.json({
            message: "Persona encontrada",
            persona: persona
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar la persona"
        });
    }
}

const createPersona = async (req, res) => {
    try{
        const persona = await Persona.create(req.body);
        if(!req.body.nombre || !req.body.apellidoPaterno || !req.body.apellidoMaterno || !req.body.dni || !req.body.correo || !req.body.celular){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Persona creada",
            persona: persona
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear la persona"
        });
    }
}

const deletePersona = async (req, res) => {
    try{
        const persona = await Persona.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Persona eliminada"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar la persona"
        });
    }
}

const updatePersona = async (req, res) => {
    try{
        const persona = await Persona.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.nombre || !req.body.apellidoPaterno || !req.body.apellidoMaterno || !req.body.dni || !req.body.correo || !req.body.celular){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Persona actualizada",
            persona: persona
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar la persona"
        });
    }
}

export const personaController = {
    getPersonas,
    getPersonaById,
    createPersona,
    deletePersona,
    updatePersona
}