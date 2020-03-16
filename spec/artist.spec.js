const request = require("request");
const server = require("../src/server.ts");
const endpoint = "http://localhost:9001/artists";

describe("artists", function() {
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

  it("should POST an artist", function(done) {
    request.post(
      "http://localhost:9001/artist",
      {
        json: true,
        body: {
          firstName: "raeioul aeiou",
          lastName: "akura qwery",
          birthDate: "2009-02-02",
          id: "5e6fa3bb7443c25a5a4db3f3"
        }
      },
      function(error, response) {
        expect(response.body).toEqual("Artist added successfully");
        done();
      }
    );
  });

  it("should FAIL POSTING an artist without album ID", function(done) {
    request.post(
      "http://localhost:9001/artist",
      {
        json: true,
        body: {
          firstName: "raeioul aeiou",
          lastName: "akura qwery",
          birthDate: "2009-02-02",
        }
      },
      function(error, response) {
        expect(response.body).toEqual('We need and album ID first to add an artist');
        done();
      }
    );
  });
});
