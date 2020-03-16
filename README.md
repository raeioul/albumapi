FORMAT: 1A
HOST: http://localhost:9001/


# albumApi
JavaScript backend for managing music collection.

## Installation

npm install
npm run start

## Tests

npm test

## Albums Collection [/albums]
### List All Albums [GET]

+ Response 200 (application/json)

        [
            {
                {
                  "releaseDate": "1982-02-02",
                  "rating": 8,
                  "title": "AKURA CARD CAPTOR",
                  "year": "2009-02-02",
                },
                "artists": [
                    "firstName": "raeioul aeiou",
                    "lastName": "akura qwery",
                    "birthDate": "2009-02-02",
                    "id": "5e6fa3bb7443c25a5a4db3f3"
                ]
            }
        ]

### Create a New Album [POST: /album]
### Update a Album [PUT: /album/:id]
### Delete a Album [DELETE: /album/:id]
You may create your own album using this action. It takes a JSON
object containing a album and a collection of artists in the
form of choices.

+ Request (application/json)

        {
                {
                  "releaseDate": "1982-02-02",
                  "rating": 8,
                  "title": "AKURA CARD CAPTOR",
                  "year": "2009-02-02",
                },
                "artists": [
                {
                    "firstName": "raeioul aeiou",
                    "lastName": "akura qwery",
                    "birthDate": "2009-02-02",
                    "id": "5e6fa3bb7443c25a5a4db3f3"
                }                   
                ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /albums/:id

    + Body

            {
                {
                  "releaseDate": "1982-02-02",
                  "rating": 8,
                  "title": "AKURA CARD CAPTOR",
                  "year": "2009-02-02",
                },
                "artists": [
                    "firstName": "raeioul aeiou",
                    "lastName": "akura qwery",
                    "birthDate": "2009-02-02",
                    "id": "5e6fa3bb7443c25a5a4db3f3"
                ]
        }


## Artists Collection [/artists]
### Create a New Artist [POST: /artist]
### Update an Artist [PUT: /artist/:id]
### Delete an Artist [DELETE: /artist/:id]
