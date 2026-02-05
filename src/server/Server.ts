import express from 'express'; 

const server = express();

server.post('/teste', (_,res) => {

    return res.send('Olá Dev!')
});

export { server };