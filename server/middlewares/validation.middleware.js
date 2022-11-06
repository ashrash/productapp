import { validationResult } from 'express-validator';
import { logger } from '../lib/logger';

// eslint-disable-next-line consistent-return
const validationMiddleware = () => (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.info('Bad Request');
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export default validationMiddleware;
