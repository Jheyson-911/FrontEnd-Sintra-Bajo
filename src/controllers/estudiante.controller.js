import { Estudiante } from '../models/estudiante.model.js';
import { Documento } from '../models/documentos.model.js';
import { Solicitud } from '../models/solicitud.model.js';
import { Practica } from '../models/practica.model.js';

const getEstudiantes = async (req, res) => {
    try{
        const estudiantes = await Estudiante.findAll();
        res.json({
            message: "Lista de estudiantes",
            estudiantes: estudiantes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los estudiantes"
        });
    }
}

const getEstudianteById = async (req, res) => {
    try{
        const estudiante = await Estudiante.findByPk(req.params.id);
        if(estudiante===null){
            res.json({
                message: "Estudiante no encontrado"
            });
        }
        res.json({
            message: "Estudiante encontrado",
            estudiante: estudiante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el estudiante"
        });
    }
}

const createEstudiante = async (req, res) => {
    try{
        const estudiante = await Estudiante.create(req.body);
        if(!req.body.codigo || !req.body.ciclo || !req.body.year || !req.body.estado_practicas){
            res.json({
                message: "Faltan Datos"
            });
        }
        res.json({
            message: "Estudiante creado",
            estudiante: estudiante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el estudiante"
        });
    }
}

const deleteEstudiante = async (req, res) => {
    try{
        const estudiante = await Estudiante.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Estudiante eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el estudiante"
        });
    }
}

const updateEstudiante = async (req, res) => {
    try{
        const estudiante = await Estudiante.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.codigo || !req.body.ciclo || !req.body.year || !req.body.estado_practicas){
            res.json({
                message: "Faltan Datos"
            });
        }
        res.json({
            message: "Estudiante actualizado",
            estudiante: estudiante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el estudiante"
        });
    }
}
const getDocumentosByEstudiante = async (req, res) => {
    try{
        const documentos = await Documento.findAll({
            where: {
                tblEstudianteId: req.params.id
            }
        });
        if(documentos===null){
            res.json({
                message: "Documentos no encontrados"
            });
        }
        res.json({
            message: "Lista de documentos"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los documentos"
        });
    }
}
const getSolicitudesByEstudiante = async (req, res) => {
    try{
        const solicitudes = await Solicitud.findAll({
            where: {
                tblEstudianteId: req.params.id
            }
        });
        if(solicitudes===null){
            res.json({
                message: "Solicitudes no encontradas"
            });
        }
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

const getPracticasByEstudiante = async (req, res) => {
    try{
        const practicas = await Practica.findAll({
            where: {
                tblEstudianteId: req.params.id
            }
        });
        if(practicas===null){
            res.json({
                message: "Practicas no encontradas"
            });
        }
        res.json({
            message: "Lista de prácticas",
            practicas: practicas
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar las prácticas"
        });
    }
}

const getReportByEstadoProceso = async (req, res) => {
    try{
        const estudiantes = await Estudiante.findAll({
            where: {
                estado_practicas: "En proceso"
            }
        });
        if(estudiantes===null){
            res.json({
                message: "Estudiantes no encontrados"
            });
        }
        res.json({
            message: "Lista de estudiantes",
            estudiantes: estudiantes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los estudiantes"
        });
    }
}


const getReportByEstadoFinalizado = async (req, res) => {
    try{
        const estudiantes = await Estudiante.findAll({
            where: {
                estado_practicas: "Finalizado"
            }
        });
        if(estudiantes===null){
            res.json({
                message: "Estudiantes no encontrados"
            });
        }
        res.json({
            message: "Lista de estudiantes",
            estudiantes: estudiantes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los estudiantes"
        });
    }
}

const getReportByEstadoInicio = async (req, res) => {
    try{
        const estudiantes = await Estudiante.findAll({
            where: {
                estado_practicas: "No iniciado"
            }
        });
        if(estudiantes===null){
            res.json({
                message: "Estudiantes no encontrados"
            });
        }
        res.json({
            message: "Lista de estudiantes",
            estudiantes: estudiantes
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los estudiantes"
        });
    }
}

export const estudianteController = {
    getEstudiantes,
    getEstudianteById,
    createEstudiante,
    deleteEstudiante,
    updateEstudiante,
    getDocumentosByEstudiante,
    getSolicitudesByEstudiante,
    getPracticasByEstudiante,
    getReportByEstadoProceso,
    getReportByEstadoFinalizado,
    getReportByEstadoInicio
}