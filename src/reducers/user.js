const USER_STATE = {
  accesstoken: ''//用户秘钥
}

export default function user(prestate = USER_STATE, action) {
  switch (action.type) {
    default:
      return { ...prestate }
  }
}