const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  systemName: state => state.user.systemName,
  systemCode: state => state.user.systemCode,
  username: state => state.user.username,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}

export default getters
