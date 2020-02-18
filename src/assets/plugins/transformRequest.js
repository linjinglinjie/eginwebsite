export function transformRequest(data) {
	let ret = ''
	for(let it in data) {
		ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	}
	return ret
}