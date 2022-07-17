import { Convenios } from "../models/convenios.model.js";

const getConvenios = async (req, res) => {
    try {
        const convenios = await Convenios.findAll();
        res.json({
            message: "Lista de convenios",
            convenios: convenios
        });
    } catch (error) {
        res.json({
            error: error,
            message: "Hubo un error al listar los convenios"
        });
    }
}

const createConvenios = async (req, res) => {
    try {
        const convenios = await Convenios.create(req.body);
        if(!req.body.nombre || !req.body.url_image || !req.body.descripcion){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Convenios creado",
            convenios: convenios
        });
    } catch (error) {
        res.json({
            error: error,
            message: "Hubo un error al crear los convenios"
        });
    }
}
const getConveniosById = async (req, res) => {
    try {
        const convenios = await Convenios.findByPk(req.params.id);
        if(convenios === null){
            return res.status(404).json({
                message: "Convenios no encontrado"
            });
        }
        res.json({
            message: "Convenios encontrado",
            convenios: convenios
        });
    } catch (error) {
        res.json({
            error: error,
            message: "Hubo un error al encontrar los convenios"
        });
    }
}

const deleteConvenios = async (req, res) => {
    try {
        const convenios = await Convenios.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Convenios eliminado"
        });
    } catch (error) {
        res.json({
            error: error,
            message: "Hubo un error al eliminar los convenios"
        });
    }
}

const updateConvenios = async (req, res) => {
    try {
        const convenios = await Convenios.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.nombre || !req.body.url_image || !req.body.descripcion){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Convenios actualizado",
            convenios: convenios
        });
    } catch (error) {
        res.json({
            error: error,
            message: "Hubo un error al actualizar los convenios"
        });
    }
}

export const conveniosController = {
    getConvenios,
    createConvenios,
    deleteConvenios,
    updateConvenios,
    getConveniosById
}
