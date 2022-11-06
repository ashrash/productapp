import express from 'express';
import morgan from 'morgan';
import { connect } from 'mongoose';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import config from './config';
import mognodbURI from './config/mongodb';
import { logger } from './lib/logger';
import errorMiddleware from './middlewares/error.middleware';

class App {
  constructor(routes) {
    this.app = express();
    this.env = config.NODE_ENV || 'development';
    this.port = config.PORT || 3000;
    this.mongoDbURI = mognodbURI;
    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  listen() {
    this.app.listen(this.port, () => {
      logger.info('=================================');
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info('=================================');
    });
  }

  getServer() {
    return this.app;
  }

  connectToDatabase() {
    connect(this.mongoDbURI);
  }

  initializeMiddlewares() {
    this.app.use(morgan('short'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Product API docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
