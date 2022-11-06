/* eslint-disable class-methods-use-this */
class HealthController {
  async healthCheck(req, res, next) {
    try {
      res.status(200).json({ data: new Date() });
    } catch (error) {
      next(error);
    }
  }
}

export default HealthController;
