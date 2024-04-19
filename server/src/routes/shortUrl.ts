import express from 'express';
import { createUrl, deleteUrl, getAllUrl, getUrl } from '../controllers/shortUrl';

const router = express.Router();

//creating endpoints
router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;