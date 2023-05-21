import axios from "axios";


const news = {
    state: () => ({
        news: [],
        new:{},
        game:[],
        delnew:[]
    }),
    getters:{
        news(state) {
            return state.news
        },
        new(state){
            return state.new
        },
        game(state){
            return state.game
        }
    },
    mutations: {
        news(state, payload){
            state.news = payload
        },
        game(state,payload){
            state.game = payload
        }
    },
    actions: {
        getGame(context,payload){
            axios.get(`${context.getters.url}/news/${payload}`)
            .then(res => {
                if(res.status === 200){
                    console.log(res.data);
                    context.commit('game', res.data.data)
                }
            })
        },
        deleteGame(context, payload){
            axios.delete(`${context.getters.url}/news/${payload}`)
            .then( () => {
                this.getAllNews()
            })
        },
        getAllNews(context){
            axios.get(`${context.getters.url}/news`)
            .then(res => {
                if(res.status === 200){
                    context.commit('news', res.data.data)
                }
            })
        },
        
    }
}


export default news