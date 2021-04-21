var baseUrl,h5Url,mUrl,tangramUrl,sensorsServerUrl;



if (GZG_ENV === 'development') {
    baseUrl = '//api-test.gongzhugou.vip';
    h5Url = 'https://h5-test.gongzhugou.vip';
    mUrl = 'http://m-test.gongzhugou.vip';
    sensorsServerUrl = 'https://api-sensorsdata.gongzhugou.vip/sa?project=default';
    tangramUrl = '//dashboard-test.gongzhugou.vip';
}


if (GZG_ENV === 'production') {
    baseUrl = 'https://api.gongzhugou.vip';
    h5Url = 'https://h5.gongzhugou.vip';
    mUrl = 'https://m.gongzhugou.vip';
    sensorsServerUrl = 'https://api-sensorsdata.gongzhugou.vip/sa?project=production';
    tangramUrl = '//dashboard.gongzhugou.vip';
}

export default {
    baseUrl:baseUrl,
    mUrl: mUrl,
    h5Url:h5Url,
    sensorsServerUrl: sensorsServerUrl,
    tangramUrl:tangramUrl
}
