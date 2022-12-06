const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
const dotenv = require('dotenv').config();
const fs = require('fs')

const PUBLIC_kEY = process.env.PUBLIC_kEY;
const SECRET_KEY = process.env.SECRET_KEY;
const BUCKET = process.env.BUCKET;
const REGION = process.env.REGION;

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