import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicList, getNextList } from '../../actions/topiclist';
import Topic from './topic';
@connect(function (store) {
  return { ...store.topiclist, currentCata: store.menu.currentCata }
}, function (dispatch) {
  return {
    getTopicList(params) {
      dispatch(getTopicList(params))
    },
    getNextList(params) {
      dispatch(getNextList(params))
    }
  }
})

class TopicList extends Component {

  componentWillMount() {
    let { page, limit, currentCata } = this.props;
    this.props.getTopicList && this.props.getTopicList({ page: page, limit: limit, tab: currentCata.key })
  }

  onScrollToLower() {
    let { page, limit, currentCata } = this.props;
    this.props.getNextList && this.props.getNextList({ page: (page + 1), limit: limit, tab: currentCata.key })

  }

  render() {
    let { list } = this.props;
    return (<ScrollView style={{ height: '600PX' }} onScrollToLower={this.onScrollToLower.bind(this)} scrollY={true}>
      {list.map(item => <Topic item={item} key={item.id} />)}
    </ScrollView>)
  }
}

export default TopicList;
