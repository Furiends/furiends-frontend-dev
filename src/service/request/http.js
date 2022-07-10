export default {
  common: {
    baseUrl: 'http://localhost:8080',
    data: {},
    header: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    dataType: 'json',
  },
  request(options = {}) {
    options.url = this.common.baseUrl + options.url;
    options.data = options.data || this.common.data;
    options.header = options.header || this.common.header;
    options.method = options.method || this.common.method;
    options.dataType = options.dataType || this.common.dataType;

    return new Promise((res, rej) => {
      uni.request({
        ...options,
        success: (result) => {
          if (result.statusCode !== 200) {
            return rej(result);
          }

          setTimeout(() => {
            uni.hideLoading();
          }, 2000);
          console.log('result', result);
          const data = result;
          return res(data);
        },
      });
    });
  },
};