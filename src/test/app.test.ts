import app from "../app";
import request from "supertest";

describe("API Test Suite", () => {
  afterEach(function (done) {
    app.close(done);
  });
  it("Should return string in GET Call", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((error) => {
        if (error) throw done(error);
        done();
      });
  });
});
