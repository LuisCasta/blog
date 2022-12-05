const query = require('../services/ComentarioService');

module.exports = () => {

    async function CreateComment(data) {

        let result = await query.CreateComment(data);
        return result;
    }

    async function GetComment(data) {
        
        let result = await query.GetComment(data);
        return result;
    }

    async function GetListComment(data) {
        
        let result = await query.GetListComment(data);
        return result;
    }

    async function UpdateComment(data) {
        
        var result = await query.UpdateComment(data);
        return result;
    }
    async function DeleteComment(data) {
        
        var result = await query.DeleteComment(data);
        return result;
    }

    return {
        CreateComment,
        GetComment,
        GetListComment,
        UpdateComment,
        DeleteComment
    }
}