// import { Role } from "../models/role.model.js";
import { User } from "../models/user.model.js";
import  { key } from '../database/database.js';
import { modoDeveloper } from "../database/database.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";

// ?REGISTRAMOS UN NUEVO USUARIO
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Role,
                attributes: ['id', 'name']
            }]
        });
        res.json({
            message: "Lista de usuarios",
            users: users
        });
    }
    catch (error) {
        res.json({
            error: error,
            message: "Hubo un error al listar los usuarios"
        });
    }
}

const register = async (req, res) => {
    try{
        if(!req.body.username || !req.body.password || !req.body.rol ){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        let user = User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: req.body.rol
        });

        res.status(201).json({
            message: "User created",
            user: user
        });
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}
const login = async (req, res) => {
    try{
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    role: user.rol
                }, key.secret, {
                    expiresIn: '10days'
                });
                // res.cookie('token', token, {
                //     httpOnly: true,
                //     secure: !(modoDeveloper)
                // });
                res.json({
                    message: "User logged",
                    token: token
                });
            }
            else{
                res.json({
                    message: "Password incorrect"
                });
            }
        }
        else{
            res.json({
                message: "User not found"
            });
        }

    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}


export const authController = {
    register,
    getUsers,
    login
}









// const sinUp = async (req, res) => {
//     User.create({
//         username: req.body.username,
//         password: bcrypt.hashSync(req.body.password, 8)
//     })
//     .then(user => {
//     if (req.body.roles) {
//         Role.findAll({
//         where: {
//             name: {
//                 [Op.or]: req.body.roles
//             }
//         }
//         }).then(roles => {
//         user.setRoles(roles).then(() => {
//                 res.send({ message: "User registered successfully!" });
//             });
//         });
//     } else {
//         // user role = 1
//         user.setRoles([1]).then(() => {
//             res.send({ message: "User registered successfully!" });
//         });
// }
//     })
//     .catch(err => {
//         res.status(500).send({ message: err.message });
//     });
// }

// const singIn = async (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     }).then(user => {
//         if(!user){
//             return res.status(404).send({message: 'User Not Found!'});
//         }

//         let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
//         if(!passwordIsValid){
//             return res.status(401).send({message: 'Invalid Password!'});
//         }
//         let token = jwt.sign({ id: user.id },key , {
//             expiresIn: 86400 // 24 hours
//         });
//         let authorities = [];
//         user.getRoles().then(roles => {
//             for(let i = 0; i < roles.length; i++){
//                 authorities.push('ROLE_' + roles[i].name.toUpperCase());
//             }
//             res.status(200).send({
//                 id: user.id,
//                 username: user.username,
//                 email: user.email,
//                 roles: authorities,
//                 token: token,
//             });
//         });
//     }).catch(err => {
//         res.status(500).send({message: err.message});
//     }
//     );
// }

// export const authController = {
//     sinUp,
//     singIn
// }