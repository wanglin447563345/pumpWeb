import { getNum } from '../service';

export default {
  namespace: 'home',

  state: {
    a:'111'
  },

  effects: {
    *getNum(_, {call, put}){
        const response = yield call(getNum);
        return response
    }
  },

  reducers: {
    
  },
};