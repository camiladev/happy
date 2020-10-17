import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);



//rotas = conjunto
//recurso = usuario

//metodo html = get, post, put, delete
// get = buscar uma info
// post = cria
// put = editar
// delete = deletar

//parametros 
// query parms: http://localhost:3333/users?search=diego
// route parms:http://localhost:3333/users/1 (identificar um recurso)
// body: http://localhost:3333/users




//time video 58:55