import { Router } from 'express';
import { UserController} from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/createUser', Response(UserController.createUser));
routerApp.get('/getAllUser', isAuth ,Response(UserController.getAllUser));
routerApp.get('/deleteUser',Response(UserController.deleteUser));
routerApp.post('/updateUser',Response(UserController.updateUser));

export default routerApp;