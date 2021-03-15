// import axios from 'axios';

const initialState = {
    orderList: null,
    errorMessage: null
}

const orderModel =  {
    namespace: 'order',

    /**
     *  Initial state
     */
    state: initialState,

    /**
     * Effects/Actions
     */
    effects: (dispatch) => ({
        async getOrderList(payload, rootState) {
            try {
                // const response = await axios({
                //     method: 'get',
                //     url: '/api//orderform/list',
                //     params: { ...payload, rpp: 10 },
                // });
                // dispatch.order.getOrderListSuccess(response.data);

                dispatch.order.getOrderListSuccess([
                    {
                        name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                          code: 3,
                          type: '已取消'
                        },
                        date: '107/6/12'
                    },
                    {
                        name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                          code: 2,
                          type: '已成立'
                        },
                        date: '108/7/21'
                    },
                    {
                        name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                          code: 1,
                          type: '處理中'
                        },
                        date: '108/6/2'
                     },
                     {
                        name: 'Apple AirPds 2',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                          code: 4,
                          type: '已送達'
                        },
                        date: '108/3/02'
                    }
                ]);
            } catch(error) {
                if (!error.response || !error.response.status) {
                    return;
                }

                const errorMessage = error.response.status + ' Error';
                dispatch.order.getOrderListFail(errorMessage);
            }
        }
    }),

    /**
     * Reducers
     */
    reducers: {
        getOrderListSuccess(state, payload) {
            return Object.assign({}, state, {
                orderList: payload
            });
        },
        getOrderListFail(state, payload) {
            return Object.assign({}, state, {
                orderList: [],
                errorMessage: payload
            });
        },

    },
};

export default orderModel;