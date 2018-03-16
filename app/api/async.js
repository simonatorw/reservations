export const fetchGet = async (url) => await (await fetch(url)).json();

export function fetchPost(url, data) {
	return fetch(url, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: 'post',
		body: JSON.stringify(data)
	}).then(function(response) {
		return response.json();
	});
}

export function queryStringify(obj) {
	const str = [];

	for (let p in obj) {
		if (obj.hasOwnProperty(p)) {
			str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
		}
	}
	
	return str.join('&');
}