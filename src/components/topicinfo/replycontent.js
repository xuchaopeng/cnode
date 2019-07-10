import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Textarea } from '@tarojs/components';
import './replycontent.scss';
import { connect } from '@tarojs/redux';

class ReplyContent extends Component {

  btnCancel() {
    this.props.onCancelReplyContent && this.props.onCancelReplyContent()
  }

  btnOk() {
    if (this.state.value) {
      let value = this.state.value;
      this.props.onOkReplyContent && this.props.onOkReplyContent(value);
    } else {
      Taro.showToast({ title: '请输入评论内容', icon: 'none' })
    }
  }

  changeContent(event) {
    if (event && event.target) {
      this.setState({ value: event.target.value })
    }
  }

  render() {
    return (<View className='replycontent'>
      <Textarea onInput={this.changeContent.bind(this)} className='replycontent-text' placeholder='请输入回复内容'></Textarea>
      <View className='replycontent-btngroup'>
        <Button onClick={this.btnOk.bind(this)} className='btn'>确定</Button>
        <Button onClick={this.btnCancel.bind(this)} className='btn'>取消</Button>
      </View>
    </View>)
  }
}

export default ReplyContent;
