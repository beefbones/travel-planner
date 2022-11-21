const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':'a0a60927ed0fb9fdcec46e044d6a3a77',
        'X-RapidAPI-Host':'"wft-geo-db.p.rapidapi.com'
    }
};

fetch('http://geodb-free-service.wirefreethought.com/v1/geo/cities')
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));









