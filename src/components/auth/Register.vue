<template>
  <div class="account-register">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
              <h1 class="title">Register An Account</h1>
              <form class="">
                <p class="control is-expanded has-icon">
                  <input v-model="data.register.name" class="input" type="text" placeholder="Name">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>                  
                </p>
                <p class="control is-expanded has-icon">
                  <input v-model="data.register.username" class="input" type="text" placeholder="Username">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>                     
                </p>                
                <p class="control has-icon">
                  <input v-model="data.register.email" class="input" type="email" placeholder="Email">
                  <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                  </span>
                </p>
                <hr />                
                <div class="control">              
                  <p class="control has-icon is-expanded">
                    <input v-model="data.register.password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                  <p class="control has-icon is-expanded">
                    <input v-model="data.register.passwordConfirm" class="input" type="password" placeholder="Confirm">
                    <span class="icon is-small">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <p class="has-text-centered">
                  <small>
                    By registering you agree to our
                    <a class="">
                      <strong>terms of service</strong>
                    </a>
                  </small>
                </p>
                <hr />
                <button @click.prevent="register()" class="button is-primary is-fullwidth">Register</button>
              </form>
              <div class="has-text-centered">
                <router-link :to="{ name: 'Login' }" class="is-fullwidth">
                  Have an account? Log in
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        context: '',
        data: {
          register: {
            name: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: 'user'
          }
        }
      }
    },

    beforeCreate () {

    },

    created () {

    },

    beforeMount () {

    },

    mounted () {

    },

    beforeUpdate () {

    },

    updated () {

    },

    beforeDestroy () {

    },

    destroyed () {

    },

    methods: {
      register: function () {
        this.$apiArchitect.dispatch('auth/register', { register: this.data.register }).then(function (response) {
        }).catch(function (error) {
          console.log(error)
        })
      }
    }

  }

</script>

<style @scoped>

.box.is-light {
  color: #363636;
}

</style>
