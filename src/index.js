const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const connectDB = require('./database');
const userRouter = require('./routes/user.routes');
const adminUserRouter = require('./routes/adminUser.routes');
const surveyRouter = require('./routes/survey.routes');
const categoryRouter = require('./routes/category.routes');

const app = express();
require('dotenv').config();

//configuración de puerto y db

connectDB();
app.set('port', process.env.PORT || 4500);
app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'));
});

//configuración inicial
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../public')));

//rutas
app.use('/api/encuestas/users', userRouter);
app.use('/api/encuestas/adminUsers', adminUserRouter);
app.use('/api/encuestas/surveys', surveyRouter);
app.use('/api/encuestas/category', categoryRouter);
/*
app.listen(4500,()=>console.log('Servidor funcionando en 4000'));*/