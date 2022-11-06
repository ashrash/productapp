import { Router } from 'express';
import HealthController from '../controllers/health.controller';

class HealthRoute {
  constructor() {
    this.route = '/health';
    this.router = Router();
    this.healthController = new HealthController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.route}`, this.healthController.healthCheck);
  }
}

export default HealthRoute;
