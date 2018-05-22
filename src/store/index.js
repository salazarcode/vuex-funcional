import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

state: {
    nombre: ''
},

mutations: {
    setNombre (state, payload) 
    {
        state.nombre = payload.newString;
    }
}


});