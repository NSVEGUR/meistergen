import multer from 'multer';
import config from '../config';

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, config.FILE_STORE);
  },
  filename(req, file, callback) {
    const fileName = `${req.user.id}$${Date.now()}.${file.originalname.split('.').pop()}`;
    callback(null, fileName);
  }
});

const upload = multer({ storage });

export default { upload };
