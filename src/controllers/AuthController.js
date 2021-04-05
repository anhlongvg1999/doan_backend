import { MidUser } from '../models/middle';
import { Console } from 'winston/lib/winston/transports';

class AuthController {
    login(req, res) {
       return MidUser.loginUser(req.body);

    }
}

export default new AuthController();