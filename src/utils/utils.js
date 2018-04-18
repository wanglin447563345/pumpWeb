import { routerRedux } from 'dva/router';
const Util = {}
Util.getPlainNode = (nodeList, parentPath = '') => {
    const arr = [];
    nodeList.forEach((node) => {
        const item = node;
        item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
        item.exact = true;
        if (item.children && !item.component) {
            arr.push(...Util.getPlainNode(item.children, item.path));
        } else {
            if (item.children && item.component) {
                item.exact = false;
            }
            arr.push(item);
        }
    });
    return arr;
};

// 存储cookie
Util.setCookie = (name, value, days) => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = name + '=' + escape(value) +
        ((days === null) ? '' : ';expires=' + date.toGMTString()) + ';path=/'
};

// 获取cookie
Util.getCookie=(c_name)=> {
    if (document.cookie.length>0)
    {
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!==-1)
        {
            c_start=c_start + c_name.length+1
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end===-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
};

// 验证用户登录状态
Util.verifyUser =(dispatch)=> {
    let userInfo =Util.getCookie('user_info');
    if (userInfo) {
        Util.setCookie('user_info', userInfo, 7)
    }else{
        dispatch(routerRedux.push('/pump/user/login'))
    }
};

// 验证手机号
Util.checkMobile = (str) =>{
    let re = /^[1,6][34578]\d{9}$/ ;
    if(re.test(str)) {
        return true;
    } else {
        return false;
    }
};

// 验证邮箱
Util.checkEmail = (str) => {
    const re = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    if (re.test(str) && str.length < 50) {
        return true
    } else {
        return false
    }
}

export default Util
