import { Router } from 'express';
import { ProductManufacturerController } from '../controllers';
import { Response } from '../libs/handle_response';
import { isAuth } from '../middlewares/auth';

let routerApp = new Router();
routerApp.post('/createProductManufacturer', Response(ProductManufacturerController.createProductManufacturer));
routerApp.get('/getallProductManufacturer', Response(ProductManufacturerController.getallProductManufacturer));
routerApp.post('/updateProductManufacturer', Response(ProductManufacturerController.updateProductManufacturer));
routerApp.get('/deleteProductManufacturer', Response(ProductManufacturerController.deleteProductManufacturer));
export default routerApp;