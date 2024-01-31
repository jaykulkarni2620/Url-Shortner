const shortid = require("shortid");
const URL = require('../models/url')

async function handleGenerateNewShortURL( req, res){
    const shortID = shortid();

    if(!req.body.url) return res.status(400).send('Url is required')
    await URL.create({
        shortId: shortID,
        redirectURL:req.body.url,
        visitHistory: [],

    });

    return res.json( {id: shortID} );
};

module.exports = {
    handleGenerateNewShortURL,
}