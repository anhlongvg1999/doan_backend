import { MidUser } from '../models/middle';
import { Console } from 'winston/lib/winston/transports';
import { uploadMedia } from '../libs/upload';

class AuthController {
    login(req, res) {
       return MidUser.loginUser(req.body);

    }
    async uploadimage(req,res){
        const dataUpload = await uploadMedia(req, res);
        console.log('222222222222222',dataUpload)
        let question_img = dataUpload ? req.protocol + '://' + req.get('host') +'/' + dataUpload.filename : '';
        let encodeUIR = encodeURI(question_img);
        return encodeUIR;

    }
}

export default new AuthController();