export {default as User} from './User';
export {default as Menu} from './Menu';
export {default as Product} from './Product';
export {default as ProductCategoryMapping} from './ProductCategoryMapping';
export {default as ProductManufacturer} from './ProductManufacturer';
export {default as Blog} from './Blog';
export {default as BlogCategory} from './BlogCategory';
export {default as ProductSize} from './ProductSize';
export {default as Size} from './Size';
export {default as Order} from './Order';


import { sequelize } from '../../connections';

// for (let m in sequelize.models) {
//     sequelize.models[m].sync();
// }

// Init association
for (let m in sequelize.models) {
    sequelize.models[m].association();
}