const express = require('express');

const router = express.Router();
router.use(express.json());

const ComentarioModel = require('../models/comentaModel')
const CadastroModel = require('../models/cadastroModel');

const listaUsuarios = []
//GET
router.get('/', async (req, res) => {
    const lista = await cadastroModel.findAll();
    res.send(lista);
});

router.get('/:id', async (req, res) => {

    res.send({});
});

router.get('/login', async (req, res) => {
    const { email, password } = req.body;

    const cadastros = await cadastroModel.findAll();
    const encontrado = cadastros.find(u => u.email == email && u.password == password);

    if(encontrado)
    res.send(encontrado);
    else
    res.send('usuário não encontrado')
});


//POST

//cadastro comentario
router.post('/cadastrocomentario', async (req, res) => {//salvar

    const comentario = await ComentarioModel.create(req.body);
    res.send(comentario);
});

//cadastro usario 
router.post('/cadastro', async (req, res) => {
    const cadastro = await CadastroModel.create(req.body);
    res.send(cadastro);
});




// router.delete('/:id', async (req, res) => {//delete
//     res.status(204).send({

//     });
// });

// router.post('/:id/atividade', async (req, res) => {
//     res.send({

//     });
// });

// router.put('/:id/atividade/:idAtividade', async (req, res) => {
//     res.send({

//     });
// });

module.exports = router;