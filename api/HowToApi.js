const got = require('got');

// Vous devez toujours encoder avec encodeURIComponent() les paramètres GET d'une URL
const makeURL = (query) => `https://mtxserv.com/api/v1/articles/?query=${encodeURIComponent(query)}`;

class HowToApi {
    async search(query) {
        const res = await got(makeURL(query), {
            responseType: 'json'
        })

        if (!res || !res.body) {
            throw new Error('Invalid response of mTxServ.com API')
        }

        return res.body
    }
}

module.exports = HowToApi;