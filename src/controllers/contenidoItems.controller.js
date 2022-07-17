import { ContenidoItem } from "../models/contenidoItem.model.js";

const getContenidoItems = async (req, res) => {
    try{
        const contenidoItems = await ContenidoItem.findAll();
        res.json({
            message: "Lista de contenidoItems",
            contenidoItems: contenidoItems
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los contenidoItems"
        });
    }
}

const getContenidoItemById = async (req, res) => {
    try{
        const contenidoItem = await ContenidoItem.findByPk(req.params.id);
        if(contenidoItem === null){
            return res.status(404).json({
                message: "ContenidoItem no encontrado"
            });
        }
        res.json({
            message: "ContenidoItem encontrado",
            contenidoItem: contenidoItem
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el contenidoItem"
        });
    }
}

const createContenidoItem = async (req, res) => {
    try{
        const contenidoItem = await ContenidoItem.create(req.body);
        if(!req.body.descripcion || !req.body.calificacion){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "ContenidoItem creado",
            contenidoItem: contenidoItem
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el contenidoItem"
        });
    }
}

const deleteContenidoItem = async (req, res) => {
    try{
        const contenidoItem = await ContenidoItem.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "ContenidoItem eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el contenidoItem"
        });
    }
}

const updateContenidoItem = async (req, res) => {
    try{
        const contenidoItem = await ContenidoItem.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.descripcion || !req.body.calificacion){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "ContenidoItem actualizado",
            contenidoItem: contenidoItem
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el contenidoItem"
        });
    }
}

export const contenidoItemController = {
    getContenidoItems,
    getContenidoItemById,
    createContenidoItem,
    deleteContenidoItem,
    updateContenidoItem
}