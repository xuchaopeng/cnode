import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';
import Taro from '@tarojs/taro';

//请求首页数据
export function getTopicList(params) {
  return async (dispatch) => {
    let result = await getJSON(api.gettopics, params);
    if (result && result.data) {
      if (result.data.success) {
        dispatch({ type: 'getTopicList', list: result.data.data })
      }
    }
  }
}

//请求下一页数据
export function getNextList(params) {
  return async (dispatch) => {
    let result = await getJSON(api.gettopics, params);
    if (result && result.data) {
      if (result.data.success) {
        if (result.data.data.length > 0) {
          dispatch({ type: 'appendTopicList', list: result.data.data, page: params.page })
        }
      }
    }
  }
}

//请求详情
export function getTopicInfo(params) {
  return async (dispatch) => {
    let result = await getJSON(api.gettopicinfo + params.id, params);
    if (result && result.data && result.data.success) {
      dispatch({ type: 'getTopicInfo', infoData: result.data.data })
    } else {
      console.log('请求话题详情出错')
    }
  }
}

//点赞话题回复
export function admireTopic(params) {
  return async dispatch => {
    let result = await postJSON(api.upreply + params.replyid + '/ups', params);
    if (result && result.success) {
      dispatch({ type: 'admireSuccess' })
    } else {
      Taro.showToast({ title: '点赞失败', icon: 'none' })
    }
  }
}

//评论回复
// export async function replyContent(params) {
//   let result = await postJSON(api.replytopic + params.topicid + '/replies');
//   if (result && result.data && result.data.success) {
//     //成功评论
//     return result.data;
//   } else {
//     //评论失败
//     Taro.showToast({ title: '评论失败', icon: 'none' })
//   }
//   return false;
// }

//评论回复
export function replyContent(params) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    })
  })
}