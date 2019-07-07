import Taro from '@tarojs/taro';
import '@tarojs/async-await';

export const getJSON = (url, data) => {
  return Taro.request({ url: url, data: data, method: 'GET' });
}

export const postJSON = (url, data) => {
  return Taro.request({ url: url, data: data, method: 'POST' });
}