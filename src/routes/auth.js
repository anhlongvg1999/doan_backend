import { Router } from 'express';
import { AuthController } from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/login', Response(AuthController.login));
routerApp.post('/uploadimage', Response(AuthController.uploadimage));
export default routerApp;