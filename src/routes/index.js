import { Router } from 'express';
import auth from './auth';
import account from './account';
import user from './user';


let routerApp = new Router();

routerApp.use('/auth', auth);
routerApp.use('/account', account);
routerApp.use('/user', user);


export default routerApp;