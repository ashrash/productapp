const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const localhost = 'http://localhost:3000';

//Sample test case
describe('Product CRUD API Request', () => {
  it('Product GET endpoint test', () => chai.request(localhost).get('/product/all')
    .then((res) => {
      chai.expect(res.status).oneOf([200, 204]);
    }));
});
