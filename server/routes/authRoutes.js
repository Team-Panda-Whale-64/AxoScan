import express from 'express';
const router = express.Router();
import cors from 'cors';
import multer from 'multer';
//multer variables
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// eslint-disable-next-line no-unused-vars
import receiptController from '../controllers/receiptControllers.js';
import searchArray from '../controllers/searchArray.js';
import memorize from '../controllers/memorize.js';

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

router.get('/totalSum', (req, res) => {
  res.status(200)
})
// post request
router.post('/upload', memorize, upload.single('file'), receiptController.uploadReceipt, searchArray.searched, receiptController.saveReceipt, (req, res) => res.status(200).json(res.locals.array));
//  took out since this is likely to err 
// eslint-disable-next-line no-undef
export default router;
