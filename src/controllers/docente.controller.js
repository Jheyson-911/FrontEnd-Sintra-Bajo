import { Docente } from "../models/docente.model.js";

const getDocentes = async (req, res) => {
    try{
        const docentes = await Docente.findAll();
        res.json({
            message: "Lista de docentes",
            docentes: docentes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los docentes"
        });
    }
}

const getDocenteById = async (req, res) => {
    try{
        const docente = await Docente.findByPk(req.params.id);
        if(docente === null){
            return res.status(404).json({
                message: "Docente no encontrado"
            });
        }
        res.json({
            message: "Docente encontrado",
            docente: docente
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el docente"
        });
    }
}

const createDocente = async (req, res) => {
    try{
        const docente = await Docente.create(req.body);
        if(!req.body.estado || !req.body.especialidad){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Docente creado",
            docente: docente
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el docente"
        });
    }
}

const deleteDocente = async (req, res) => {
    try{
        const docente = await Docente.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Docente eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el docente"
        });
    }
}


const updateDocente = async (req, res) => {
    try{
        const docente = await Docente.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.estado || !req.body.especialidad){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Docente actualizado",
            docente: docente
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el docente"
        });
    }
}

export const docenteController = {
    getDocentes,
    getDocenteById,
    createDocente,
    deleteDocente,
    updateDocente
}