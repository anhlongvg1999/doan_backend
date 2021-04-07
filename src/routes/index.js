import { Router } from 'express';
import auth from './auth';
import account from './account';
import user from './user';
import productmanufacturer from './productmanufacturer';


let routerApp = new Router();

routerApp.use('/auth', auth);
routerApp.use('/account', account);
routerApp.use('/user', user);
routerApp.use('/productmanufacturer', productmanufacturer);


export default routerApp;