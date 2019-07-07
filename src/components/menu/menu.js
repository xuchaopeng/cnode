import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu';
import { AtDrawer } from 'taro-ui';
import './menu.scss';

@connect(function (store) {
  return { ...store.menu }
}, function (dispatch) {
  return {
    showMenu() {
      dispatch(showDrawer())
    },
    hideMenu() {
      dispatch(hideDrawer())
    },
    changeCata(cata) {
      dispatch(changeCata(cata))
    }
  }
})

class Menu extends Component {

  //显示抽屉
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }

  //隐藏抽屉
  closeDrawer() {
    this.props.hideMenu && this.props.hideMenu();
  }
  //点击分类时触发
  clickCata(index) {
    let { cataData } = this.props;
    let clickCata = cataData[index];//获取点击项的数据
    if (clickCata.key !== this.props.currentCata.key) {
      this.props.changeCata && this.props.changeCata(clickCata)
    }
  }

  getItems(cataData) {
    return cataData.map(item => item.value)
  }

  render() {
    let { showDrawer, cataData } = this.props;
    let items = this.getItems(cataData);
    return (<View className="topiclist-menu">
      <View className="drawer">
        <AtDrawer onItemClick={this.clickCata.bind(this)} show={showDrawer} items={items} onClose={this.closeDrawer.bind(this)} />
      </View>
      <Image onClick={this.showDrawer.bind(this)} className="image" src={require('../../assets/img/cata.png')} />
      <Text>{this.props.currentCata ? this.props.currentCata.value : null}</Text>
      <Image className="image" src={require('../../assets/img/login.png')} />
    </View>)
  }
}

export default Menu;
