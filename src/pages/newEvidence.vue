<template>
<div class="row">
  <div class="col-12">
    <div class="q-gutter-md" style="max-width: 70%; margin-left: 11%">
      <q-select v-model="model" :options="Object.keys(makeOptions())" label="Instrumento" class="text-center" ></q-select>
    </div>
    {{makeEvaluation()}}
  </div>
  <div class="q-pa-md col-12" style="max-width: 80%; margin-left: 12%">
    <div class="row">
      <div class="col">
        <q-toggle  v-model="principles['Orientacion']" label='Orientacion' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Orientacion']">
              <q-select outlined v-model="grades[0]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[0]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[0]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[0]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Elementos persuasivos']" label='Elementos persuasivos' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Elementos persuasivos']">
              <q-select outlined v-model="grades[1]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules2" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives2" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[1]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[1]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[1]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Orientacion de aprendizaje']" label='Orientacion de aprendizaje' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Orientacion de aprendizaje']">
              <q-select outlined v-model="grades[2]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules3" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives3" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[2]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[2]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[2]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-toggle  v-model="principles['Recompensas basadas en logros']" label='Recompensas basadas en logros' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Recompensas basadas en logros']">
              <q-select outlined v-model="grades[3]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules4" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives4" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[3]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[3]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[3]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Logros adaptables']" label='Logros adaptables' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Logros adaptables']">
              <q-select outlined v-model="grades[4]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules5" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives5" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[4]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[4]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[4]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Factores de diversion']" label='Factores de diversion' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Factores de diversion']">
              <q-select outlined v-model="grades[5]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules6" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives6" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[5]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[5]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[5]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
    <div class="row">
      <div class="col"><q-toggle  v-model="principles['Transformador']" label='Transformador' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Transformador']">
              <q-select outlined v-model="grades[6]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules7" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives7" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[6]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[6]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[6]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition></div>
      <div class="col">
        <q-toggle  v-model="principles['Orientado al bienestar']" label='Orientado al bienestar' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Orientado al bienestar']">
              <q-select outlined v-model="grades[7]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules8" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives8" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[7]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[7]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[7]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Genera investigacion']" label='Genera investigacion' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Genera investigacion']">
              <q-select outlined v-model="grades[8]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules9" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives9" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[8]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[8]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[8]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
    <div class="row">
      <div class="col" style="max-width: 33.5%">
        <q-toggle  v-model="principles['Basado en el conocimiento']" label='Basado en el conocimiento' class="q-mb-md" />
        <q-slide-transition>
          <div style="border: solid 1px; border-radius: 2%" v-show="principles['Basado en el conocimiento']">
              <q-select outlined v-model="grades[9]" :options="options" label="Grado"/>
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules10" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives10" :val="item.id" :label="item.Onames"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[9]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[9]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[9]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
  </div>
  <div class="col-12"></div>
  <q-btn style="margin-left: 90%" color="primary" label="Evaluar" @click="dialogGrade = true" class="q-ml-sm"/>
  <q-dialog v-model="dialogGrade">
    <q-card>
      <q-card-section style="text-align: center"> ¿Guardar Evidencia?</q-card-section>
      <q-card-actions>
        <q-btn flat label="Cancelar" color="primary" @click="dialogGrade = false"/>
        <q-btn flat label="Guardar" color="primary" @click="guardar"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</div>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  beforeMount () {
    this.token = LocalStorage.getItem('token')
    this.getInstruments()
  },
  watch: {
    model (newValue) {
      this.initialState()
    }
  },
  data () {
    return {
      principles: {
        'Orientación': false,
        'Elementos persuasivos': false,
        'Orientacion de aprendizaje': false,
        'Recompensas basadas en logros': false,
        'Logros adaptables': false,
        'Factores de diversion': false,
        'Transformador': false,
        'Orientado al bienestar': false,
        'Genera investigacion': false,
        'Basado en el conocimiento': false
      },
      options: ['Muy Alto', 'Alto', 'Significativo', 'Medio', 'Nulo'],
      arrayRules: [],
      arrayRules2: [],
      arrayRules3: [],
      arrayRules4: [],
      arrayRules5: [],
      arrayRules6: [],
      arrayRules7: [],
      arrayRules8: [],
      arrayRules9: [],
      arrayRules10: [],
      arrayObjectives: [],
      arrayObjectives2: [],
      arrayObjectives3: [],
      arrayObjectives4: [],
      arrayObjectives5: [],
      arrayObjectives6: [],
      arrayObjectives7: [],
      arrayObjectives8: [],
      arrayObjectives9: [],
      arrayObjectives10: [],
      rols: [false, false, false, false, false, false, false, false, false, false],
      steps: [false, false, false, false, false, false, false, false, false, false],
      mat: [false, false, false, false, false, false, false, false, false, false],
      grades: ['Nulo', 'Nulo', 'Nulo', 'Nulo', 'Nulo', 'Nulo', 'Nulo', 'Nulo', 'Nulo', 'Nulo'],
      model: null,
      token: '',
      instruments: [],
      newEvaluation: {},
      dialogGrade: false
    }
  },
  methods: {
    initialState () {
      this.arrayRules = []
      this.arrayRules2 = []
      this.arrayRules3 = []
      this.arrayRules4 = []
      this.arrayRules5 = []
      this.arrayRules6 = []
      this.arrayRules7 = []
      this.arrayRules8 = []
      this.arrayRules9 = []
      this.arrayRules10 = []
      this.arrayObjectives = []
      this.arrayObjectives2 = []
      this.arrayObjectives3 = []
      this.arrayObjectives4 = []
      this.arrayObjectives5 = []
      this.arrayObjectives6 = []
      this.arrayObjectives7 = []
      this.arrayObjectives8 = []
      this.arrayObjectives9 = []
      this.arrayObjectives10 = []
      this.rols = [false, false, false, false, false, false, false, false, false, false]
      this.steps = [false, false, false, false, false, false, false, false, false, false]
      this.mat = [false, false, false, false, false, false, false, false, false, false]
    },
    getInstruments () {
      let tkn = this.token
      this.$axios.get('https://back-fg.onrender.com/api/v1/instrument/', { headers: { Authorization: 'Bearer ' + tkn } })
        .then(res => {
          this.instruments = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    makeOptions () {
      let instruments = this.instruments
      let obj = {}
      instruments.forEach(element => {
        obj[element.name] = element.id
      })
      return obj
    },
    selected () {
      let item = this.makeOptions()[this.model]
      return item
    },
    returnRules (id) {
      let algo = null
      this.instruments.forEach(element => {
        if (element.id === id) {
          algo = element.Reglas
        }
      })
      return algo
    },
    returnObj (id) {
      let algo = null
      this.instruments.forEach(element => {
        if (element.id === id) {
          algo = element.Objetivos
        }
      })
      return algo
    },
    makeEvaluation () {
      let item = this.makeOptions()[this.model]
      let steps = []
      let rols = []
      let mate = []
      this.newEvaluation.instrument_id = item
      this.instruments.forEach(element => {
        if (element.id === item) {
          rols = element.Roles
          mate = element.Materiales
          steps = element.Pasos
        }
      })
      let principios = []
      this.newEvaluation.Principios = principios
      if (this.arrayRules.length > 0 || this.arrayObjectives.length > 0 || this.rols[0] || this.steps[0] || this.mat[0] || this.grades[0] !== '') {
        let principle = {}
        principle.id = 'Orientación'
        principle.evidencias = []
        this.arrayRules.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[0]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[0]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[0]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[0]
        principios.push(principle)
      }
      if (this.arrayRules2.length > 0 || this.arrayObjectives2.length > 0 || this.rols[1] || this.steps[1] || this.mat[1] || this.grades[1] !== '') {
        let principle = {}
        principle.id = 'Elementos persuasivos'
        principle.evidencias = []
        this.arrayRules2.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives2.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[1]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[1]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[1]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[1]
        principios.push(principle)
      }
      if (this.arrayRules3.length > 0 || this.arrayObjectives3.length > 0 || this.rols[2] || this.steps[2] || this.mat[2] || this.grades[2] !== '') {
        let principle = {}
        principle.id = 'Orientacion de aprendizaje'
        principle.evidencias = []
        this.arrayRules3.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives3.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[2]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[2]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[2]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[2]
        principios.push(principle)
      }
      if (this.arrayRules4.length > 0 || this.arrayObjectives4.length > 0 || this.rols[3] || this.steps[3] || this.mat[3] || this.grades[3] !== '') {
        let principle = {}
        principle.id = 'Recompensas basadas en logros'
        principle.evidencias = []
        this.arrayRules4.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives4.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[3]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[3]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[3]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[3]
        principios.push(principle)
      }
      if (this.arrayRules5.length > 0 || this.arrayObjectives5.length > 0 || this.rols[4] || this.steps[4] || this.mat[4] || this.grades[4] !== '') {
        let principle = {}
        principle.id = 'Logros adaptables'
        principle.evidencias = []
        this.arrayRules5.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives5.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[4]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[4]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[4]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[4]
        principios.push(principle)
      }
      if (this.arrayRules6.length > 0 || this.arrayObjectives6.length > 0 || this.rols[5] || this.steps[5] || this.mat[5] || this.grades[5] !== '') {
        let principle = {}
        principle.id = 'Factores de diversion'
        principle.evidencias = []
        this.arrayRules6.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives6.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[5]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[5]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[5]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[5]
        principios.push(principle)
      }
      if (this.arrayRules7.length > 0 || this.arrayObjectives7.length > 0 || this.rols[6] || this.steps[6] || this.mat[6] || this.grades[6] !== '') {
        let principle = {}
        principle.id = 'Transformador'
        principle.evidencias = []
        this.arrayRules7.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives7.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[6]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[6]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[6]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[6]
        principios.push(principle)
      }
      if (this.arrayRules8.length > 0 || this.arrayObjectives8.length > 0 || this.rols[7] || this.steps[7] || this.mat[7] || this.grades[7] !== '') {
        let principle = {}
        principle.id = 'Orientado al bienestar'
        principle.evidencias = []
        this.arrayRules8.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives8.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[7]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[7]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[7]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[7]
        principios.push(principle)
      }
      if (this.arrayRules9.length > 0 || this.arrayObjectives9.length > 0 || this.rols[8] || this.steps[8] || this.mat[8] || this.grades[8] !== '') {
        let principle = {}
        principle.id = 'Genera investigacion'
        principle.evidencias = []
        this.arrayRules9.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives9.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[8]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[8]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[8]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[8]
        principios.push(principle)
      }
      if (this.arrayRules10.length > 0 || this.arrayObjectives10.length > 0 || this.rols[9] || this.steps[9] || this.mat[9] || this.grades[9] !== '') {
        let principle = {}
        principle.id = 'Basado en el conocimiento'
        principle.evidencias = []
        this.arrayRules10.forEach(element => {
          principle.evidencias.push(element)
        })
        this.arrayObjectives10.forEach(element => {
          principle.evidencias.push(element)
        })
        if (this.rols[9]) {
          rols.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.steps[9]) {
          steps.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        if (this.mat[9]) {
          mate.forEach(element => {
            principle.evidencias.push(element.id)
          })
        }
        principle.nivel = this.grades[9]
        principios.push(principle)
      }
    },
    guardar () {
      let id = this.makeOptions()[this.model]
      this.$axios.post('https://back-fg.onrender.com/api/v1/instrument/' + id + '/evidence/',
        this.newEvaluation, { headers: { Authorization: 'Bearer ' + this.token } })
      this.dialogGrade = false
    }
  }
}
</script>
