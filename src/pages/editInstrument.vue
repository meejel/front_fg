<template>
  <instrument :eInstrument="{}" :dialogEdit="true"/>
</template>
<style>
</style>
<script>
import instrument from '../components/instrument'
import { LocalStorage } from 'quasar'

export default {
  beforeMount () {
    this.start()
  },
  components: {
    instrument
  },
  data () {
    return {
      token: '',
      editinstrument: {}
    }
  },
  methods: {
    start () {
      this.token = LocalStorage.getItem('token')
    }
  }
}
</script>
