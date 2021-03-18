<template>
  <div style="text-align: center">
    <q-space></q-space>
    <div v-for="(item, index) in items" v-bind:key="index" class="col">
     <q-card style ="margin-left: 24%; width: 40%; margin-bottom: 1%" @click="mounter(item)">
       <div class="row">
        <div class="col">
          <div class="row" style="margin-left: 30%;">
            <q-card-section>
              Nombre del Instrumento
            </q-card-section>
          </div>
          <div class="row" style="margin-left: 30%; margin-top: 15%">
            {{item.name}}
          </div>
        </div>
        <div class="col">
          <div class="row" style="margin-left: 30%">
            <q-card-section>
              Nivel de gamificación
            </q-card-section>
          </div>
          <q-circular-progress
          show-value
          font-size="20px"
          class="q-ma-md"
          :value="item.level"
          size="80px"
          color="primary"
          center-color="blue-1"
          >
          {{ item.level }}%
         </q-circular-progress>
        </div>
      </div>
     </q-card>
     <q-space/>
    </div>
    <q-dialog
      v-model="alert" persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-card-section color="blue">
          <span>{{instrumentName}}</span>
        </q-card-section>
        <q-card-section>
          <q-tabs v-model="tab">
            <q-tab v-for="(detail, index) in details" :key="index" :label="detail.principle" :name="detail.principle"></q-tab>
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
              <q-tab-panel v-for="(detail, index) in details" :key="index" :name="detail.principle">
                <div class="row">
                  <div class="col">
                    <span>Peso del principio: </span>
                    <q-circular-progress
                      show-value
                      font-size="20px"
                      class="q-ma-md"
                      :value="100"
                      size="60px"
                      color="primary"
                      center-color="blue-1"
                      >
                      {{ detail.weight }}
                    </q-circular-progress>
                  </div>
                  <div class="col">
                    <div style="padding: 15%">
                      <span>Grado: </span>
                      <span>{{detail.grade}}</span>
                    </div>
                  </div>
                </div>
                <q-table
                  title="Evidencias"
                  :columns="columns"
                  :data="detail.evidences"
                  row-key="name"
                  :filter="filter"
                  binary-state-sort
                  :rows-per-page-options="[50,100,200]"
                  rows-per-page-label="Items por página"
                >
                <template v-slot:top-right>
                  <q-input outlined v-model="filter" placeholder="Buscar tipo de eviencia" >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
              </q-table>
              </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
        <q-card-actions>
          <q-space></q-space>
          <q-btn outline @click="alert = false" fab color="red">
            <q-icon name="close"></q-icon>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { LocalStorage } from 'quasar'
export default {
  beforeMount () {
    this.start()
  },
  data () {
    return {
      token: '',
      items: [],
      filter: '',
      alert: false,
      details: {},
      columns: [
        { name: 'desciption', label: 'Nombre', field: row => row.component.description, align: 'left' },
        { name: 'grade', label: 'Tipo', field: row => row.component.component_type, align: 'left' }
      ],
      tab: 'one',
      instrumentName: ''
    }
  },
  methods: {
    start () {
      this.token = LocalStorage.getItem('token')
      this.axiosInstruments()
    },
    axiosInstruments () {
      this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/', { headers: { Authorization: 'Bearer ' + this.token } })
        .then(res => {
          this.items = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    async mounter (item) {
      let prom = await this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/' + item.id + '/principle/', { headers: { Authorization: 'Bearer ' + this.token } })
      this.details = prom.data
      this.instrumentName = item.name
      let final = this.details.filter(element => element.weight > 0)
      this.details = final
      this.alert = true
    }
  }
}
</script>
