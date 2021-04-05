export {default as Permissions} from './Permissions';
export {default as Roles} from './Role';
export {default as RolePermission} from './RolePermission';
export {default as User} from './User';
export {default as UserRole} from './UserRole';
export {default as Menu} from './Menu';
export {default as Product} from './Product';
export {default as ProductCategoryMapping} from './ProductCategoryMapping';
export {default as Transport} from './Transport';
export {default as ProductManufacturer} from './ProductManufacturer';
export {default as Blog} from './Blog';
export {default as BlogCategory} from './BlogCategory';


import { sequelize } from '../../connections';

// for (let m in sequelize.models) {
//     sequelize.models[m].sync();
// }

// Init association
for (let m in sequelize.models) {
    sequelize.models[m].association();
}