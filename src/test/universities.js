import chai from "chai";
import chaiHttp from "chai-http";

import app from "../app";

chai.use(chaiHttp);

describe("Index", () => {
  describe("/GET /getAllUniversitiesLimits", () => {
    it("it should list 5 objects", (done) => {
      chai
        .request(app)
        .get("/getAllUniversities?page=1&limit=5")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.should.have.lengthOf(5);
          res.body.data[0].should.include.keys("url", "name", "country");
          done();
        });
    });
  });

  describe("/GET /getAllUniversitiesByCountry", () => {
    it("it should not have country property", (done) => {
      chai
        .request(app)
        .get("/getAllUniversities?country=united%20states&page=1&limit=5")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.should.have.lengthOf(5);
          res.body.data[0].should.include.keys("url", "name");
          done();
        });
    });
  });

  describe("/GET /getAllUniversitiesByName", () => {
    it("it should get response with three props", (done) => {
      chai
        .request(app)
        .get("/getAllUniversities?name=Marywood&page=1&limit=5")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data[0].should.include.keys("url", "name", "country");
          done();
        });
    });
  });
});
