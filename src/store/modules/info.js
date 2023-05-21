import axios from "axios";


const info = {
    state: () => ({
        infos: [],
        info:{},
        infoId:[],
        games:[]

    }),
    getters:{
        infos(state) {
            return state.infos
        },
        infoId(state){
            return state.infoId
        },
        games(state){
            return state.games
        },
        info(state){
            return state.info
        },

    },
    mutations: {
        infos(state, payload){
            state.infos = payload
        },
        infoId(state,payload){
            state.infoId = payload
        },
        games(state,payload){
            state.games = payload
        }
    },
    actions: {
        getAllInfo(context){
            axios.get(`${context.getters.url}/liga`)
            .then(res => {
                if(res.status === 200){
                    context.commit('infos', res.data.data)
                }
            })
        },
        getCategory(context,payload){
            axios.get(`${context.getters.url}/liga/${payload}`)
            .then(res => {
              if(res.status === 200){
                console.log(res.data.data.seasons[0].jamolar);
                context.commit('infoId',res.data.data.seasons[0].jamolar)
              }
         })
        },
        getAllGame(context,payload){
            axios.get(`${context.getters.url}/teams/${payload}`)
            .then(res => {
                if(res.status === 200){
                    context.commit('games', res.data.data)
                }
            })
        }
    }
}


export default info