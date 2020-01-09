const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/32e788b0aeb87588521ec5bd2bb04363/' + latitude + ',' + longitude + '?units=si'
    request({url , json: true}, (error, {body}) => {
        if (error) {
            callback('unable to locate services at URL', undefined)
        } else if (body.error) {
            callback('Something has gone wrong. Location may be unavailable', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '°C.')
        }
    })
}

module.exports = forecast
