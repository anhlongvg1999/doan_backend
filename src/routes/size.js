import { Router } from 'express';
import { SizeController} from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/createSize', Response(SizeController.createSize));
routerApp.get('/deleteSize', Response(SizeController.deleteSize));
routerApp.get('/getSize', Response(SizeController.getSize));
routerApp.get('/getSizebyType', Response(SizeController.getSizebyType));
routerApp.post('/updateSize', Response(SizeController.updateSize));

export default routerApp;