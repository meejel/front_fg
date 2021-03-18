<template>
  <div class="container">
    <q-space></q-space>
    <div row justify-center wrap xs12 max-width="0%" >
          <q-table
            title="Lista de Instrumentos"
            :columns="columns"
            :data="items"
            row-key="name"
            :filter="filter"
            binary-state-sort
            :rows-per-page-options="[50,100,200]"
            rows-per-page-label="Items por pagina"
            style="max-width: 90%; margin-left: 5%; margin-top: 5%"
          >
            <template v-slot:top-right>
              <q-input outlined v-model="filter" placeholder="Buscar" >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <q-tr slot="body" slot-scope="props" :props="props">
              <q-td>{{props.row.name}}</q-td>
              <q-td>{{props.row.description}}</q-td>
              <q-td>{{props.row.owner}}</q-td>
              <q-td>
                <q-btn outlined @click="alert = true, obtener(props.row)" outline style="color: primary;" label="Consultar"></q-btn>
                <q-btn outlined @click="edit(props.row.id)" outline style="margin-left: 3%; color: goldenrod;" label="Editar">
                </q-btn>
              </q-td>
            </q-tr>
          </q-table>
    </div>
    <q-dialog v-model="alert" persistent
              transition-show="slide-up"
              transition-hide="slide-down">
      <q-card>
        <q-bar>
          <q-space ></q-space>
          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div v-if="dataObj != null">
            <div class="text-h6" style="text-align: center">{{dataObj['name']}}
            </div>
            <div>
              {{dataObj['description']}}
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-tabs v-model="tab">
            <div class="text-h6" v-for="(item, index) in dataObj" v-bind:key="index">
                <div v-if=" Array.isArray(item)">
                    <q-tab :label="index" :name="index" />
                    {{dataObj.length}}
                </div>
            </div>
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel  v-for="(item, index) in dataObj" v-bind:key="index" :name="index">
              <div v-if="Array.isArray(item)">
                <div v-for="(some, index) in item" :key="index">
                  <span>{{Object.values(some)[1]}}</span>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
    {{clean()}}
  </div>
</template>

<style>
.card {
  padding: 15px;
}
</style>

<script>
// import { functions } from '../services/newinstrument.TARGET'
import { LocalStorage } from 'quasar'
let dataObj = null
export default {
  beforeMount () {
    this.start()
  },
  data () {
    return {
      alert: false,
      maximizedToggle: true,
      items: {},
      token: '',
      filter: '',
      columns: [
        { name: 'name', label: 'Nombre', field: row => row.name, align: 'left' },
        { name: 'description', label: 'Descripción', field: row => row.description, align: 'left' },
        { name: 'owner', label: 'Propietario', field: row => row.owner, align: 'left' },
        { label: 'Acciones', align: 'left' }
      ],
      tab: 'one',
      dataObj
    }
  },
  methods: {
    start () {
      this.token = LocalStorage.getItem('token')
      this.axiosInstruments()
    },
    obtener (object) {
      this.dataObj = object
    },
    mostrar () {
      return dataObj
    },
    axiosInstruments () {
      let tkn = this.token
      this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/', { headers: { Authorization: 'Bearer ' + tkn } })
        .then(res => {
          this.items = res.data
        })
        .catch(err => {
          console.log(err)
          this.$router.push('/')
        })
    },
    clean () {
      this.items.forEach(item => {
        console.log('')
      })
    },
    edit (item) {
      this.$router.push({
        name: 'editInstrument',
        params: {
          id: item
        }
      })
    }
  }
}
</script>
