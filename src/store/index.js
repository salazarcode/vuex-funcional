import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

state: {
    personas: []
},

mutations: {
    setNombre (state, payload) 
    {
        state.personas.push({
            nombre: payload.newString
        });
        //state.nombre = payload.newString;
    }
}


});