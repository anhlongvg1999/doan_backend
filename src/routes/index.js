import { Router } from 'express';
import auth from './auth';
import account from './account';
import user from './user';
import productmanufacturer from './productmanufacturer';
import productsize from './productsize';


let routerApp = new Router();

routerApp.use('/auth', auth);
routerApp.use('/account', account);
routerApp.use('/user', user);
routerApp.use('/productmanufacturer', productmanufacturer);
routerApp.use('/productsize', productsize);


export default routerApp;