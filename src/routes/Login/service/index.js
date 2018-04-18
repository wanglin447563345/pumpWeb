// 模拟
export async function login(params) {
  return new Promise((resolve) => {
    setTimeout(_ => {
      if (params.password === 'admin')
        resolve({status: true, message: '登录成功', data: {name: '管理员'}})
      else if(params.password === 'user')
          resolve({status: true, message: '登录成功', data: {name: '普通用户'}})
        else
        resolve({status: false, message: '密码不正确，密码为admin或者user'})
      }, 1000);
  });
}