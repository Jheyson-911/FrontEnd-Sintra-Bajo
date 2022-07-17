import { User } from '../models/user.model.js';
import { key } from '../database/database.js';
import  bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        res.json({
            message: "Lista de usuarios",
            users: users
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los usuarios"
        });
    }
}


const createUser = async (req, res) => {
    try{
        const { username, password, rol} = req.body;
        const user = await User.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            rol: rol,
        });
        if(!username || !password || !rol || !tblPersonaId){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        let token = jwt.sign({
            name: user.name,
            role: user.rol,
            id: user.tblPersonaId
        }, key.secret, {
            expiresIn: 84000
        });
        res.header('Authorization', token).json({
            message: "Usuario creado",
            user: user,
            token: token
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el usuario"
        });
    }
}

const deleteUser = async (req, res) => {
    try{
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Usuario eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el usuario"
        });
    }
}
const allAccess = (req, res) => {
    res.status(200).send(" Public Content");
}

const adminAccess = (req, res) => {
    res.status(200).send(" Admin Content");
}

const secretaryAccess = (req, res) => {
    res.status(200).send(" Secretary Content");
}

const coordinatorAccess = (req, res) => {
    res.status(200).send(" Coordinator Content");
}

export const userController = {
    getUsers,
    createUser,
    deleteUser,
    allAccess,
    adminAccess,
    secretaryAccess,
    coordinatorAccess
}