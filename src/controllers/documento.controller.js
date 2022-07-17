import { Documento } from "../models/documentos.model.js";

const getDocumentos = async (req, res) => {
    try{
        const documentos = await Documento.findAll();
        res.json({
            message: "Lista de documentos",
            documentos: documentos
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los documentos"
        });
    }
}

const getDocumentoById = async (req, res) => {
    try{
        const documento = await Documento.findByPk(req.params.id);
        if(documento === null){
            return res.status(404).json({
                message: "Documento no encontrado"
            });
        }
        res.json({
            message: "Documento encontrado",
            documento: documento
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el documento"
        });
    }
}

const createDocumento = async (req, res) => {
    try{
        const documento = await Documento.create(req.body);
        res.json({
            message: "Documento creado",
            documento: documento
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el documento"
        });
    }
}

const deleteDocumento = async (req, res) => {
    try{
        const documento = await Documento.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Documento eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el documento"
        });
    }
}

const updateDocumento = async (req, res) => {
    try{
        const documento = await Documento.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Documento actualizado",
            documento: documento
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el documento"
        });
    }
}


export const documentoController = {
    getDocumentos,
    getDocumentoById,
    createDocumento,
    deleteDocumento,
    updateDocumento
}