import { Solicitud } from '../models/solicitud.model.js';

const getSolicitudes = async (req, res) => {
    try{
        const solicitudes = await Solicitud.findAll();
        res.json({
            message: "Lista de solicitudes",
            solicitudes: solicitudes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar las solicitudes"
        });
    }
}

const getSolicitudById = async (req, res) => {
    try{
        const solicitud = await Solicitud.findByPk(req.params.id);
        if(solicitud===null){
            res.json({
                message: "Solicitud no encontrada"
            });
        }
        res.json({
            message: "Solicitud encontrada",
            solicitud: solicitud
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar la solicitud"
        });
    }
}

const createSolicitud = async (req, res) => {
    try{
        const solicitud = await Solicitud.create(req.body);
        if(!req.body.nombre_empresa || !req.body.nombre_dirigido ||!req.body.cargo_dirigido ||!req.body.estado_solicitud){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Solicitud creada",
            solicitud: solicitud
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear la solicitud"
        });
    }
}

const deleteSolicitud = async (req, res) => {
    try{
        const solicitud = await Solicitud.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Solicitud eliminada"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar la solicitud"
        });
    }
}

const updateSolicitud = async (req, res) => {
    try{
        const solicitud = await Solicitud.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.nombre_empresa || !req.body.nombre_dirigido ||!req.body.cargo_dirigido ||!req.body.estado_solicitud){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Solicitud actualizada",
            solicitud: solicitud
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar la solicitud"
        });
    }
}

export const solicitudController = {
    getSolicitudes,
    getSolicitudById,
    createSolicitud,
    deleteSolicitud,
    updateSolicitud
}