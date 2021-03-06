import { Router } from 'express';
import auth from './auth';
import account from './account';
import user from './user';
import productmanufacturer from './productmanufacturer';
import size from './size';
import product from './product'
import order from './order'


let routerApp = new Router();

routerApp.use('/auth', auth);
routerApp.use('/account', account);
routerApp.use('/user', user);
routerApp.use('/productmanufacturer', productmanufacturer);
routerApp.use('/size', size);
routerApp.use('/product', product);
routerApp.use('/order', order);


export default routerApp;