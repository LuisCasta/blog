const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
const fs = require('fs')

const PUBLIC_kEY = 'AKIAWUK6LOLRPAAJ6DV4'
const SECRET_KEY = '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'
const BUCKET = 'blogcuentame'
const REGION = 'us-east-2'
const USERS3 = 'adminblog'

const client = new S3Client({region : REGION , 
        credentials: {
            accessKeyId : PUBLIC_kEY,
            secretAccessKey: SECRET_KEY
        }
    })

async function uploadFile(file){
    
    const stream =  fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: BUCKET,
        Key : file.originalFilename,
        Body: stream
    };

    const command = new PutObjectCommand(uploadParams)
    
    return await client.send(command);
}


module.exports = {
    uploadFile
}