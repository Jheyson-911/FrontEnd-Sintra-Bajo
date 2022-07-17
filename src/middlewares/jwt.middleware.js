import jwt from 'jsonwebtoken';
import { key } from '../database/database.js';
import { User } from '../models/user.model.js';


const verificarToken = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        req.user = verificado;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

// const verificarToken = (req, res, next) => {
//     let token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).json({
//             message: 'No autorizado'
//         });
//     }
//     try {
//         token = token.split(' ')[1];
//         const verificado = jwt.verify(token, key.secret);
//         req.user = verificado;
//         next();
//     } catch (error) {
//         return res.status(401).json({
//             message: 'No autorizado'
//         });
//     }
// }


const ValidarUsuarioUnico = (req, res, next) => {
    let username = req.body.username;
    User.findOne({
        where: {
            username: username
        }
    }).then(user => {
        if (user) {
            return res.status(403).json({
                message: 'El usuario ya existe'
            });
        }
        next();
    }
    ).catch(error => {
        return res.status(500).json({
            message: 'Error al crear usuario'
        });
    }
    );
}

const verificarRolAdmin = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolSecretaria = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'secretaria') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolDocente = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'docente') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolEstudiante = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'estudiante') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarSiEsUsuario = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin'||verificado.role === 'secretaria'||verificado.role === 'docente'||verificado.role === 'estudiante') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolAdminOrSecretaria = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin'||verificado.role === 'secretaria') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolAdminOrDocenteOrSecretaria = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin'||verificado.role === 'docente'||verificado.role === 'secretaria') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolAdminOrDocente = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin'||verificado.role === 'docente') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolAdminOrSecretariaOrEstudiante = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin'||verificado.role === 'secretaria'||verificado.role === 'estudiante') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

const verificarRolAdminOrStudent = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
    try {
        token = token.split(' ')[1];
        const verificado = jwt.verify(token, key.secret);
        if (verificado.role === 'admin'||verificado.role === 'estudiante') {
            next();
        } else {
            return res.status(401).json({
                message: 'No autorizado'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'No autorizado'
        });
    }
}

// const verificarIdEstudiante = (req, res, next) => {
//     const token = req.header('auth-token');
//     if (!token) {
//         return res.status(401).json({
//             message: 'No autorizado'
//         });
//     }
//     try {
//         const verificado = jwt.verify(token, key.secret);
//         if (verificado.rol === 'estudiante') {






export const jwtMiddleware = {
    verificarToken,
    ValidarUsuarioUnico,
    verificarRolAdmin,
    verificarRolSecretaria,
    verificarRolDocente,
    verificarRolEstudiante,
    verificarSiEsUsuario,
    verificarRolAdminOrDocente,
    verificarRolAdminOrSecretaria,
    verificarRolAdminOrStudent,
    verificarRolAdminOrDocenteOrSecretaria,
    verificarRolAdminOrSecretariaOrEstudiante
}