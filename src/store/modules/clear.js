// import axios from "axios"

const clear = {
    state: () => ({
        clear: []
    }),

    getters: {
        clear(state){
            return state.clear
        }

    },
    mutations:{
        clear(state,payload){
            state.clear = payload
        }

    },
    actions:{
       
    }

}


export default clear