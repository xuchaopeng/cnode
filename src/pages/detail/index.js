import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo } from '../../actions/topiclist';

@connect(function (store) {
  return {
    topicinfo: store.topiclist.topicinfo,
    replies: store.topiclist.replies
  }
}, function (dispatch) {
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
    }
  }
})

class Detail extends Component {

  componentWillMount() {
    let params = { id: this.$router.params.topicid, mdrender: true }
    this.props.getTopicInfo && this.props.getTopicInfo(params);
  }

  render() {
    //this.props.topicinfo.title
    return (<View>detail</View>)
  }
}

export default Detail;
