<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Meejel
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/instruments" label="Instrumentos" />
        <q-route-tab to="/newInstrument" label="Crear instrumento"/>
        <q-route-tab to="/newEvidence" label="Añadir evidencias"/>
        <q-route-tab to="/evaluations" label="Evaluaciones"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: true
    }
  }
}
</script>
