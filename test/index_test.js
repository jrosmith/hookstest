const chai = require('chai')
const chai_http = require('chai-http')
const server = require("../src/index.js")
const expect = chai.expect

chai.use(chai_http)

let linterUnusedVarInTestDir

describe('/', () => {
  it("Should execute a get request", (done) => {
    chai.request(server)
      .get("/")
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.property('status', 200)
        done()
      })
  })
})