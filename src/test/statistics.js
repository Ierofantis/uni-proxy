import chai from "chai";
import chaiHttp from "chai-http";

import app from "../app";

const should = chai.should();
chai.use(chaiHttp);

describe("Index", () => {
  describe("GET /", () => {
    it("should get statistics", (done) => {
      chai
        .request(app)
        .get("/getUniversityStatistics")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
