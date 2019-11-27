import * as express from 'express';
import { medRouter } from './medicine'
import { presRouter } from './prescription'
import { unitRouter } from './unit'

export const router = express.Router();

router.use('/medicine', medRouter);
router.use('/prescription', presRouter);
router.use('/dosageUnit', unitRouter);

