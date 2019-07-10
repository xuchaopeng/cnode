import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo, admireTopic, replyContent } from '../../actions/topiclist';
import TopicInfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';
import ReplyContent from '../../components/topicinfo/replyContent'

import './detail.scss'

const isweapp = process.env.TARO_ENV == 'weapp';

@connect(function (store) {
  return {
    user: store.user,
    topicinfo: store.topiclist.topicinfo,
    replies: store.topiclist.replies,
    admireState: store.topiclist.admireState
  }
}, function (dispatch) {
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
    },
    admireTopic(params) {
      dispatch(admireTopic(params))
    }
  }
})

class Detail extends Component {
  config = {
    navigationBarTitleText: '话题详情'
  }
  state = {
    showReplyContent: false
  }
  componentWillMount() {
    let { user } = this.props;
    let params = { id: this.$router.params.topicid, mdrender: true, accesstoken: user.accesstoken }
    this.props.getTopicInfo && this.props.getTopicInfo(params);
  }

  getDetail() {
    let { user } = this.props;
    let params = { id: this.$router.params.topicid, mdrender: true, accesstoken: user.accesstoken }
    this.props.getTopicInfo && this.props.getTopicInfo(params);
  }

  admire(reply) {
    let { user } = this.props;
    let params = { replyid: reply.id, accesstoken: user.accesstoken }
    this.props.admireTopic && this.props.admireTopic(params);
  }

  componentWillReceiveProps(nextProps) {
    //属性即将发生变化时，触发
    if (this.props.admireState != nextProps.admireState) {
      //请求数据
      this.getDetail();
    }
  }

  Reply() {
    this.setState({
      showReplyContent: true
    })
  }

  //关闭组件本身
  closeReplyContent() {
    this.setState({ showReplyContent: false })
  }

  //评论
  replyContent() {
    let value = isweapp ? arguments[1] : arguments[0];
    let { user } = this.props;
    let params = { content: value, topicid: this.$router.params.topicid, accesstoken: user.accesstoken }
    replyContent(params).then(result => {
      if (result.success) {
        this.getDetail(); //刷新页面
        this.closeReplyContent(); //关闭自身
      }
    })
  }

  render() {
    let { topicinfo, replies } = this.props;
    let { showReplyContent } = this.state;
    return (<View className='detail'>
      {showReplyContent ? <ReplyContent onCancelReplyContent={this.closeReplyContent.bind(this)} onOkReplyContent={this.replyContent.bind(this)} /> : null}
      <TopicInfo topicinfo={topicinfo} />
      <Replies replies={replies} onAdmire={this.admire.bind(this)} />
      <Button className='replyBtn' onClick={this.Reply.bind(this)}>回复</Button>
    </View>)
  }
}

export default Detail;
