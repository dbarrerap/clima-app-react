import axios from "axios"

export default class Location {
    _getCoordinates = () => {
        if (navigator.geolocation) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            })
        }
    }

    getLocation = async () => {
        const position = await this._getCoordinates()
        let lat = position.coords.latitude
        let long = position.coords.longitude

        const API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY
        const API_URL = `https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${lat}&lon=${long}&format=json`
        console.log({API_URL})

        const response = await axios.get(API_URL)
        return {
            lat, long,
            city: response.data.address.city,
            town: response.data.address.town,
            country: response.data.address.country
        }
    }
}
