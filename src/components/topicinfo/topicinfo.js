import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, RichText } from '@tarojs/components';
import { myTimeToLocal } from '../../utils/date';
import './topicinfo.scss';

class TopicInfo extends Component {
  render() {
    let { topicinfo } = this.props;
    return (<View className='topic-info'>
      <View className='topic-info-header'>
        <View className='topic-info-header-title'>
          <Text></Text><Text>{topicinfo.title}</Text>
        </View>
        <View className='topic-info-header-pie'>
          <Text>{myTimeToLocal(topicinfo.create_at)}</Text>
          <Text>{topicinfo.author && topicinfo.author.loginname}</Text>
          <Text>{topicinfo.reply_count + '次浏览'}</Text>
        </View>
      </View>
      <View className='topic-info-body'>
        <RichText nodes={topicinfo.content} />
      </View>
    </View>)
  }
}

TopicInfo.defaultProps = {
  topicinfo: {}
}

export default TopicInfo;
