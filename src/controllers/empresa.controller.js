import { Empresa } from '../models/empresa.model.js';
import { Representante } from '../models/representante.model.js';

const getEmpresas = async (req, res) => {
    try{
        const empresas = await Empresa.findAll();
        res.json({
            message: "Lista de empresas",
            empresas: empresas
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar las empresas"
        });
    }
}

const getEmpresaById = async (req, res) => {
    try{
        const empresa = await Empresa.findByPk(req.params.id);
        if(empresa === null){
            return res.status(404).json({
                message: "Empresa no encontrada"
            });
        }
        res.json({
            message: "Empresa encontrada",
            empresa: empresa
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar la empresa"
        });
    }
}

const createEmpresa = async (req, res) => {
    try{
        const empresa = await Empresa.create(req.body);
        if(!req.body.nombre || !req.body.ruc){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Empresa creada",
            empresa: empresa
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear la empresa"
        });
    }
}

const deleteEmpresa = async (req, res) => {
    try{
        const empresa = await Empresa.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Empresa eliminada"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar la empresa"
        });
    }
}

const updateEmpresa = async (req, res) => {
    try{
        const empresa = await Empresa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.nombre || !req.body.ruc){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Empresa actualizada",
            empresa: empresa
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar la empresa"
        });
    }
}

const getRepresentanteByEmpresa = async (req, res) => {
    try{
        const representante = await Representante.findAll({
            where: {
                tblEmpresaId: req.params.id
            }
        });
        if(representante === null){
            return res.status(404).json({
                message: "Representante no encontrado"
            });
        }
        res.json({
            message: "Lista de representantes",
            representante: representante
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los representantes"
        });
    }
}

export const empresaController = {
    getEmpresas,
    getEmpresaById,
    createEmpresa,
    deleteEmpresa,
    updateEmpresa,
    getRepresentanteByEmpresa
}