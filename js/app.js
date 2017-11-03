$(function () {

	function getData(term) {
		var params = {
			part: 'snippet',
			key: 'AIzaSyCSEoIJ2if5bpTlcbjLASxTXNptevUdz6E',
			q: term,
			maxResults: 24
		};

		var url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function (data) {
			showResults(data.items);
		});
	}

	function showResults(results) {
		$('#search-results').empty();
		results.forEach(function (value) {
			$('#search-results').append(createItem(value.id.videoId,value.snippet));
		});
	}
	
	function createItem(id, snippet){
		var thumbnail = snippet.thumbnails.medium.url;
		var title = snippet.title;

		return `<a href="https://www.youtube.com/watch?v=${id}"><img src="${thumbnail}"><p>${title}</p></a>`;
	}

	$('#search-form').submit(function (event) {
		event.preventDefault();
		getData($('#search-bar').val());
	});

// when the 'search button is .click() the app will pull from the youtube api and show thumbnails of youtube videos from the search term used.

});