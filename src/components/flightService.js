class FlightService {

    async retrieveFlights() {
        return fetch(process.env.REACT_APP_FLIGHT_API_URL + "/v0/flights", { mode: "cors" })
            .then(res => res.json())
            .then((data) => {
                console.log("Retrieved items:");
                console.log(data);
                return data
            })
            .catch(console.log)
    }

    async deleteFlight(callsign) {
        console.log("FlightService.deleteFlight(): " + callsign);
        /* return fetch('http://flight-api/v0/flights/' + callsign, {
             method: "DELETE",
             mode: "cors"
         })*/
    }
    async updateFlight(callsign) {
        console.log("FlightService.updateFlight():");
        console.log(callsign);
    }
}

export default FlightService;