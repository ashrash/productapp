const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Hello API Request', () => {
  it('Health check endpoint test', () => chai.request('http://localhost:3000').get('/health')
    .then((res) => {
      chai.expect(res.body).has.property('data');
    }));
});
