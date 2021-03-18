<template>
  <div style="text-align: center">
    <q-card style="margin-left:25%; margin: 10%; max-width: 70%">
      <div class="row">
        <div class="col" style="max-height: 20%; text-align: center; margin-left: 18%; margin-top: 5%" >
          <div class="row" style="text-align: center; margin-left: 10%">
            <img src="/Logo.jpg" style="width: 120px; height: 120px;" alt="">
          </div>
          <div class="row">
            <h2 class="title2">MEEJEL</h2>
          </div>
        </div>
        <div class="col">
          <h6 class="title">Iniciar Sesión</h6>
          <q-form
                class="q-gutter-md"
                style="max-width: 80%; margin-left: 12%"
            >
                <q-input
                outlined
                v-model="username"
                label="Nombre de usuario"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                ></q-input>
                <q-input
                outlined
                type="password"
                v-model="password"
                label="Contraseña"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                ></q-input>
            <div>
                <q-btn label="Entrar" type="submit" color="primary" @click="getToken()"/>
                <q-btn label="Reiniciar" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
            <q-spacer></q-spacer>
            </q-form>
        </div>
      </div>
    </q-card>
  </div>
</template>
<style>
.title{
    color:gray;
}
.title2{
    font-weight: bold;
    color: gray;
}
</style>
<script>
import { LocalStorage } from 'quasar'
export default {
  beforeMount () {
    LocalStorage.set('token', '')
    LocalStorage.set('username', '')
  },
  data () {
    return {
      token: '',
      username: '',
      password: ''
    }
  },
  methods: {
    getToken () {
      let login = {
        username: this.username,
        password: this.password
      }
      this.$axios.post('https://meejel-back.herokuapp.com/api/v1/api-token-auth/', login)
        .then(res => {
          console.log('in')
          this.token = res.data.token
          LocalStorage.set('token', this.token)
          LocalStorage.set('username', this.username)
          this.$router.push('/instruments')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
