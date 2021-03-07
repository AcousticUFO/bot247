const got = require('got');

const makeURL = () => `https://api.thecatapi.com/v1/images/search?limit=1`;

class CatApi {
    async random() {
        const res = await got(makeURL(), {
            responseType: 'json'
        })

        if (!res || !res.body) {
            throw new Error('Invalid response of api.thecatapi.com')
        }

        return res.body
    }
}

module.exports = CatApi;