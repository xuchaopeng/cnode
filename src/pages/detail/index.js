import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo } from '../../actions/topiclist';
import TopicInfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';

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
  config = {
    navigationBarTitleText: '话题详情'
  }

  componentWillMount() {
    let params = { id: this.$router.params.topicid, mdrender: true }
    this.props.getTopicInfo && this.props.getTopicInfo(params);
  }

  render() {
    let { topicinfo, replies } = this.props;
    console.log(topicinfo, replies)
    return (<View>
      <TopicInfo topicinfo={topicinfo} />
      <Replies replies={replies} />
    </View>)
  }
}

export default Detail;
