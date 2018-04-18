import Util from "../utils/utils"

export default {
    namespace: 'global',

    state: {

    },

    effects: {

    },


    reducers: {

    },

    subscriptions: {
        setup({ dispatch, history }) {
            if(history.location.pathname!==('/pump/user/login'||'/pump/user/register')){
                Util.verifyUser(dispatch)
            }
            // Subscribe history(url) change, trigger `load` action if pathname is `/`
            return history.listen(({ pathname, search }) => {
                if (typeof window.ga !== 'undefined') {
                    window.ga('send', 'pageview', pathname + search);
                }
            });
        },
    },
};
