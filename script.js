const settings = {
	async: true,
	crossDomain: true,
	url: 'https://api-nba-v1.p.rapidapi.com/seasons',
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'c5c7f5acfbmsh559cf33f7adee0dp192e66jsn118bb5513352',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



