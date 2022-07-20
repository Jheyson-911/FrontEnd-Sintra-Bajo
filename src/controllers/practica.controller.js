import { Evaluacion } from '../models/evaluacion.model.js';
import { Practica } from '../models/practica.model.js';

const getPracticas = async (req, res) => {
    try{
        const practicas = await Practica.findAll();
        res.json({
            message: "Lista de practicas",
            practicas: practicas
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar las practicas"
        });
    }
}

const getPracticaById = async (req, res) => {
    try{
        const practica = await Practica.findByPk(req.params.id);
        if(practica===null){
            res.json({
                message: "Practica no encontrada"
            });
        }
        res.json({
            message: "Practica encontrada",
            practica: practica
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar la practica"
        });
    }
}

const createPractica = async (req, res) => {
    try{
        const practica = await Practica.create(req.body);
        if(!req.body.fecha_inicio || !req.body.fecha_fin || !req.body.horas){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Practica creada",
            practica: practica
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear la practica"
        });
    }
}

const deletePractica = async (req, res) => {
    try{
        const practica = await Practica.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Practica eliminada"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar la practica"
        });
    }
}

const updatePractica = async (req, res) => {
    try{
        const practica = await Practica.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Practica actualizada",
            practica: practica
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar la practica"
        });
    }
}

const getEvaluacionesByPractica = async (req, res) => {
    try{
        const evaluaciones = await Evaluacion.findAll({
            where: {
                tblPracticaId: req.params.id
            }
        });
        res.json({
            message: "Lista de evaluaciones que pertenecen a la practica",
            evaluaciones: evaluaciones
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar las evaluaciones"
        });
    }
}



export const practicaController = {
    getPracticas,
    getPracticaById,
    createPractica,
    deletePractica,
    updatePractica,
    getEvaluacionesByPractica
}