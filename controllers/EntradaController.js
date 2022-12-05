const EntradaInteractor = require("../usecases/EntradaInteractor");
const formidable = require('formidable');
const { uploadFile } = require('../config/s3')

module.exports = () => {

    const entradaInteractor = EntradaInteractor();

    const GetPost = (req, res, next) => {
        
        const data = req?.body;

        entradaInteractor.GetPost(data).then((response) => {
            
            var data = response

            return res.status(200).json({data})
        }, (err) => {
            return res.status(500).json({error:err});
        });
    }

    const GetPostTitle = (req, res, next) => {
        
        const data = req?.body?.titulo;

        entradaInteractor.GetPostTitle(data).then((response) => {

            return res.status(200).json({response})
        }, (err) => {
            return res.status(500).json({error:err});
        });
    }

    const GetListPost = (req, res, next) => {

        entradaInteractor.GetListPost().then((response) => {
            
            var data = response

            return res.status(200).json({data})
        }, (err) => {
            return res.status(500).json({error:err});
        });
    }

    const CreatePost = (req, res, next) => {
        
        const data = req.body;
        console.log(`req ${data}`)

        entradaInteractor.CreatePost(data).then((response) => {
            return res.status(200).json({message: 'record created',details:response})
        }, (err) => {
            return res.status(500).json({error:err});
        })
    }
    const AddImage = (req, res, next) => {

        const form = formidable({ multiples: true });
  
        form.parse(req,async (err, fields, files) => {

            if (err) {
                next(err);
                return;
            }

            let pathFile = {};
            pathFile.path = files.files.filepath;
            pathFile.originalFilename = files.files.originalFilename;

            const result = await uploadFile(pathFile)
            console.log(result)
            
            const url = `https://blogcuentame.s3.us-east-2.amazonaws.com/${pathFile.originalFilename}`;


            const data = {
                id_entrada : fields.id_entrada,
                url_image  : url
            }

            entradaInteractor.AddImage(data).then((response) => {
                return res.status(200).json({message: 'Imagen agregada a entrada.',details:response})
            }, (err) => {
                return res.status(500).json({error:err});
            })


            //res.json({ fields, files, result, url });
        });
    }

    const UpdatePost = (req, res, next) => {
        
        const data = req?.body

        if(!data.titulo || !data.cuerpo || !data.id){

            return res.status(500).json({error:'Parámetros incompletos'});

        }else{

            entradaInteractor.UpdatePost(data).then((response) => {
                //res.json(response);

                return res.status(200).json(response)
            }, (err) => {
                return res.status(500).json({error:err});
            })
        }

    }

    const DeletePost = (req, res, next) => {
        
        const data = req.body?.id

        entradaInteractor.DeletePost(data).then((response) => {
            
            return res.status(200).json(response)
        }, (err) => {
            return res.status(500).json({error:err});
        })
    } 

    return {
        GetPost,
        GetPostTitle,
        GetListPost,
        CreatePost,
        AddImage,
        UpdatePost,
        DeletePost
    }
};