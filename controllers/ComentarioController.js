const ComentarioInteractor = require("../usecases/ComentarioInteractor");

module.exports = () => {

    const comentarioInteractor = ComentarioInteractor();

    const GetComment = (req, res, next) => {
        
        const data = req?.body;

        comentarioInteractor.GetComment(data).then((response) => {
            
            var data = response

            return res.status(200).json({data})
        }, (err) => {
            return res.status(500).json({error:err});
        });
    }

    const GetListComment = (req, res, next) => {

        if(req.body.id_entrada){

            comentarioInteractor.GetListComment(req.body.id_entrada).then((response) => {
            
                var data = response
    
                return res.status(200).json({data})
            }, (err) => {
                return res.status(500).json({error:err});
            });

        }else{
            return res.status(500).json({error:'not found id_entrada'});
        }
        
    }

    const CreateComment = (req, res, next) => {
        
        const data = req.body;
        console.log(`req ${data}`)

        comentarioInteractor.CreateComment(data).then((response) => {
            return res.status(200).json({message: 'record created',details:response})
        }, (err) => {
            return res.status(500).json({error:err});
        })
    }

    const UpdateComment = (req, res, next) => {
        
        const data = req?.body

        if(!data.id_comentario || !data.nombre || !data.comentario){

            return res.status(500).json({error:'Parámetros incompletos'});

        }else{

            comentarioInteractor.UpdateComment(data).then((response) => {
                //res.json(response);

                return res.status(200).json(response)
            }, (err) => {
                return res.status(500).json({error:err});
            })
        }

    }

    const DeleteComment = (req, res, next) => {
        
        const data = req.body?.id_comentario

        comentarioInteractor.DeleteComment(data).then((response) => {
            
            return res.status(200).json(response)
        }, (err) => {
            return res.status(500).json({error:err});
        })
    } 

    return {
        GetComment,
        GetListComment,
        CreateComment,
        UpdateComment,
        DeleteComment
    }
};