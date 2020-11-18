const BASE_URL = 'http://www.eliasmorgen.xyz:8888';
const request = (params) => {
    let { url, method, header, data } = params;
    //	请求方式 GET POST
    if (method) {
        method = method.toUpperCase();	//	小写转大写
        if (method == "POST") {
            header = { "content-type": "application/json" }
        }
    }
    //	发起请求 加载动画
    if (!params.hideLoading) {
        uni.showLoading({
            title: "加载中"
        })
    }
    return new Promise((resolve, reject) => {
        //	发起网络请求
        uni.request({
            url: BASE_URL + url,
            method: method || "GET",
            header: header,
            data: data,
            dataType: "json",
            sslVerify: false,	//	是否验证ssl证书
            success: res => {
                if (res.statusCode && res.statusCode != 200) {
                    //	api错误
                    uni.showModal({
                        content: res.msg
                    })
                    return;
                }
                resolve(res.data);
            },
            fail: err => {
                uni.showModal({
                    content: err.msg
                })
                reject(err.data);
            },
            complete: (e) => {
                console.log("请求完成");
                uni.hideLoading()
                typeof params.complete == "function" && params.complete(e.data);
                return;
            }
        })
    })
};

export default request;
