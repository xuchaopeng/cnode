import { getTopicList } from './topiclist';
//显示抽屉
export function showDrawer() {
  return (dispatch) => { dispatch({ type: 'showDrawer' }) }
}

//隐藏抽屉
export function hideDrawer() {
  return (dispatch) => { dispatch({ type: 'hideDrawer' }) }
}

//改变cata
export function changeCata(cata) {
  return (dispatch) => {
    dispatch({ type: 'changeCata', currentCata: cata });
    dispatch(getTopicList({ page: 1, limit: 20, tab: cata.key }))
  }
} 