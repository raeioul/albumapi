const request = require("request");
const server = require("../src/server.ts");
const endpoint = "http://localhost:9001/albums";

describe("albums", function() {
  it("should return 200 response code", function(done) {
    request.get(endpoint, function(error, response) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should fail on POST", function(done) {
    request.post(endpoint, { json: true, body: {} }, function(error, response) {
      expect(response.statusCode).toEqual(404);
      done();
    });
  });

  it("should POST an album", function(done) {
    request.post(
      "http://localhost:9001/album",
      {
        json: true,
        body: {
          releaseDate: "1982-02-02",
          rating: 8,
          title: "AKURA CARD CAPTOR",
          year: "2009-02-02",
        }
      },
      function(error, response) {
        expect(response.body.rating).toEqual(8);
        expect(response.body.title).toEqual("AKURA CARD CAPTOR");
        done();
      }
    );
  });
});
