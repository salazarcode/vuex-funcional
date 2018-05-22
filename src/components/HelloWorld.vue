<template>
  <div class="hello">
    <h1>{{nombre}}</h1>
    <input type="text" v-model="nombre">
    <button @click="guardar">Guardar</button>

    <h2>El valor de nombre ne el store es: {{ this.$store.state.nombre  }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nombre: ''
    }
  },
  methods: {
    guardar: function(){
      this.$store.commit('setNombre', {
        newString: this.nombre
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
