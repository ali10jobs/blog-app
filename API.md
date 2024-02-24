const url = 'https://scrape-article-extractor.p.rapidapi.com/?url=https%3A%2F%2Fwww.cnbc.com%2F2022%2F06%2F17%2Felon-musk-had-a-bad-week-at-tesla-spacex-and-twitter.html';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc5318ebb4msh3f4228dd63bc4a9p1af683jsn2f8ca7385eff',
		'X-RapidAPI-Host': 'scrape-article-extractor.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}