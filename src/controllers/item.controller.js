import { Item } from "../models/item.model.js";

const getItems = async (req, res) => {
    try{
        const items = await Item.findAll();
        res.json({
            message: "Lista de items",
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

const getItemById = async (req, res) => {
    try{
        const item = await Item.findByPk(req.params.id);
        if(item === null){
            return res.status(404).json({
                message: "Item no encontrado"
            });
        }
        res.json({
            message: "Item encontrado",
            item: item
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el item"
        });
    }
}

const createItem = async (req, res) => {
    try{
        const item = await Item.create(req.body);
        if(!req.body.titulo){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Item creado",
            item: item
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el item"
        });
    }
}

const deleteItem = async (req, res) => {
    try{
        const item = await Item.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Item eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el item"
        });
    }
}

const updateItem = async (req, res) => {
    try{
        const item = await Item.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.titulo){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Item actualizado",
            item: item
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el item"
        });
    }
}

export const itemController = {
    getItems,
    getItemById,
    createItem,
    deleteItem,
    updateItem
}