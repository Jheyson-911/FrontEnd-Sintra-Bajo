import { Evaluacion } from "../models/evaluacion.model.js";
import { Item } from "../models/item.model.js";

const getEvaluaciones = async (req, res) => {
    try{
        const evaluaciones = await Evaluacion.findAll();
        res.json({
            message: "Lista de evaluaciones",
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

const getEvaluacionById = async (req, res) => {
    try{
        const evaluacion = await Evaluacion.findByPk(req.params.id);
        if(evaluacion === null){
            return res.status(404).json({
                message: "Evaluación no encontrada"
            });
        }
        res.json({
            message: "Evaluacion encontrada",
            evaluacion: evaluacion
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar la evaluacion"
        });
    }
}

const createEvaluacion = async (req, res) => {
    try{
        const evaluacion = await Evaluacion.create(req.body);
        if(!req.body.fase || !req.body.fecha){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Evaluacion creada",
            evaluacion: evaluacion
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear la evaluacion"
        });
    }
}

const deleteEvaluacion = async (req, res) => {
    try{
        const evaluacion = await Evaluacion.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Evaluacion eliminada"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar la evaluacion"
        });
    }
}

const updateEvaluacion = async (req, res) => {
    try{
        const evaluacion = await Evaluacion.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.fase || !req.body.fecha || !req.body.observaciones || !req.body.estado){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Evaluacion actualizada",
            evaluacion: evaluacion
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar la evaluacion"
        });
    }
}
const getItemsByEvaluacion = async (req, res) => {
    try{
        const items = await Item.findAll({
            where: {
                tblEvaluacionId: req.params.id
            }
        });
        res.json({
            message: "Lista de items que pertenecen a la evaluacion",
            items: items
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los items"
        });
    }
}





export const evaluacionController = {
    getEvaluaciones,
    getEvaluacionById,
    createEvaluacion,
    deleteEvaluacion,
    updateEvaluacion,
    getItemsByEvaluacion,

}