const query = require('../services/EntradaService');

module.exports = () => {

    async function CreatePost(data) {

        let result = await query.CreatePost(data);
        return result;
    }

    async function AddImage(data) {

        let result = await query.AddImage(data);
        return result;
    }

    async function GetPost(data) {
        
        let result = await query.GetPost(data);
        return result;
    }

    async function GetPostTitle(data) {
        
        let result = await query.GetPostTitle(data);
        return result;
    }

    async function GetListPost() {
        
        var result = await query.GetListPost();
        return result;
    }

    async function UpdatePost(data) {
        
        var result = await query.UpdatePost(data);
        return result;
    }
    async function DeletePost(data) {
        
        var result = await query.DeletePost(data);
        return result;
    }

    return {
        CreatePost,
        AddImage,
        GetPost,
        GetPostTitle,
        GetListPost,
        UpdatePost,
        DeletePost
    }
}