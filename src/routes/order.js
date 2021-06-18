import { Router } from 'express';
import { OrderController } from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/createOder', Response(OrderController.createOder));
routerApp.post('/updateOrderStatus', Response(OrderController.updateOrderStatus));
routerApp.get('/getOder', Response(OrderController.getOder));
export default routerApp;