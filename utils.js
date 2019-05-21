const ajax = function(method, path, data, reseponseCallback) {
    let r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        // readyState == 4 表示请求结束并且得到了服务器给的响应数据
        if (r.readyState === 4) {
            console.log('state change', r, r.status, r.response)
            reseponseCallback(r.response)
        } else {
            console.log('change')
        }
    }
    r.send(data)
}

const e = (selector) => {
	return document.querySelector(selector)
}

const log = console.log.bind(console)