import { routerRedux } from 'dva/router';
import { login } from '../service';
import Util from '../../../utils/utils'

export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {},
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/user/login') {
            Util.setCookie('user_info','' ,-1);
        }
      });
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      const {status, message, data} = yield call(login, payload)
      if (status) {
        yield Util.setCookie('user_info', JSON.stringify(data));
        yield put({
          type: 'loginSuccess',
          payload: data
        })
        yield put(routerRedux.push('/pump/web/home'));
      } else {
        yield put({
          type: 'loginError',
          payload: {message}
        })
      }
    },
    *logout(_, { put }) {

    },
  },

  reducers: {
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loggedIn: true,
        message: '',
        user: payload
      };
    },
    loginError(state, { payload }) {
      return {
        ...state,
        loggedIn: false,
        message: payload.message
      };
    }
  },
};