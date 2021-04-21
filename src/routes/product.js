import { Router } from 'express';
import { ProductController } from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/createProduct', Response(ProductController.createProduct));
routerApp.post('/updateSaleProduct', Response(ProductController.updateSaleProduct));
routerApp.get('/deleteProduct', Response(ProductController.deleteProduct));
routerApp.get('/getProduct', Response(ProductController.getProduct));
routerApp.post('/updateProduct', Response(ProductController.updateProduct));
export default routerApp;