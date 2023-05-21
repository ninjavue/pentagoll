
import axios from 'axios'



const admin = {
    state : () => ({
        matchs : [],
        match: {}
    }),
    getters:{
        matchs(state){
            return state.matchs
        },
        match(state){
            return state.match
        }
    },
    mutations:{
        matchs(state,payload){
            state.matchs = payload
        },
        match(state,payload){
            state.match = payload
        }
    },
    actions:{
        getAllSeasson(context){
            axios.get(`${context.getters.url}/seasson`)
            .then(res => {
                console.log(res.data.data);
                context.commit('matchs',res.data.data)
            })
        }
    }
}


export default admin