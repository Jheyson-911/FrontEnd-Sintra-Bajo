import { Post } from '../models/post.model.js';

const getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll();
        res.json({
            message: "Lista de posts",
            posts: posts
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al listar los posts"
        });
    }
}

const getPostById = async (req, res) => {
    try{
        const post = await Post.findByPk(req.params.id);
        if(post === null){
            return res.status(404).json({
                message: "Post no encontrado"
            });
        }
        res.json({
            message: "Post encontrado",
            post: post
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al encontrar el post"
        });
    }
}

const createPost = async (req, res) => {
    try{
        const post = await Post.create(req.body);
        if(!req.body.titulo || !req.body.contenido){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Post creado",
            post: post
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al crear el post"
        });
    }
}

const deletePost = async (req, res) => {
    try{
        const post = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Post eliminado"
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al eliminar el post"
        });
    }
}

const updatePost = async (req, res) => {
    try{
        const post = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!req.body.titulo || !req.body.contenido){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }
        res.json({
            message: "Post actualizado",
            post: post
        });
    }
    catch(error){
        res.json({
            error: error,
            message: "Hubo un error al actualizar el post"
        });
    }
}

export const postController = {
    getPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
}