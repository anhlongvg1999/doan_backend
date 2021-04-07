import { Router } from 'express';
import { ProductSizeController} from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/createSize', Response(ProductSizeController.createSize));
routerApp.get('/deleteSize', Response(ProductSizeController.deleteSize));
routerApp.get('/getProductSize', Response(ProductSizeController.getProductSize));
routerApp.post('/updateProductSize', Response(ProductSizeController.updateProductSize));

export default routerApp;