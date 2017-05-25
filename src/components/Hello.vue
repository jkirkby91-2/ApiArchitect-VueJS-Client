<template>
  <div class="hello">
    <button @click="authenticate('facebook')">auth Facebook</button>

  </div>
</template>

<script>
export default {
  name: 'hello',

  methods: {
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function (authResponse) {
        console.log(authResponse)
        // Execute application logic after successful social authentication
      })
    }
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
