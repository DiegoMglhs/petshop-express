// servidor e rotas.
const express = require('express');
const { adicionarPet } = require('./petshop');
const petshop = require('./petshop');

const app = express();
app.use(express.json());

app.listen(3000,() =>{
    console.log('Servidor rodando!')
});

// console.log(petshop.listarPets());

app.get('/pets', (request,response) => {
   
    
    return response.send(petshop.listarPets());
});

app.get('/pets/:nome', (request,response) => {
    const{nome}= request.params;
    
    
    return response.send(petshop.buscarPet(nome));
});


app.post('/pets', (request,response) =>{
    
    return response.json(petshop.adicionarPet(request.body)); //sempre retornar o projeto recem criado e nunca exibir a lista completa.
});