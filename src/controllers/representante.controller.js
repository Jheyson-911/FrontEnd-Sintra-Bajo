import { Representante } from "../models/representante.model.js";

const getRepresentantes = async (req, res) => {
    try{
        const representantes = await Representante.findAll();
        res.json({
            message: "Lista de representantes",
            representantes: representantes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los representantes"
        });
    }
}

const getRepresentanteById = async (req, res) => {
    try{
        const representante = await Representante.findByPk(req.params.id);
        if(representante === null){
            return res.status(404).json({
                message: "Representante no encontrado"
            });
        }
        res.json({
            message: "Representante encontrado",
            representante: representante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el representante"
        });
    }
}

const createRepresentante = async (req, res) => {
    try{
        const representante = await Representante.create(req.body);
        if(!req.body.nombre ||!req.body.apellido ||!req.body.dni ||!req.body.celular){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Representante creado",
            representante: representante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el representante"
        });
    }
}

const deleteRepresentante = async (req, res) => {
    try{
        const representante = await Representante.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Representante eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el representante"
        });
    }
}

const updateRepresentante = async (req, res) => {
    try{
        const representante = await Representante.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.nombre ||!req.body.apellido ||!req.body.dni ||!req.body.celular){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Representante actualizado",
            representante: representante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el representante"
        });
    }
}


export const representanteController = {
    getRepresentantes,
    getRepresentanteById,
    createRepresentante,
    deleteRepresentante,
    updateRepresentante
}