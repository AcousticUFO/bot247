const got = require('got');

const makeURL = () => `https://api.thedogapi.com/v1/images/search`;

class DogApi {
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

module.exports = DogApi;