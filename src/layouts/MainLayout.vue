<script setup lang="ts">
// import { ref } from 'vue'
import { ref } from 'vue'
import LogoSVG from '../assets/indafa.svg'
// import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
const t = useI18n()
// console.log(q)
const choosenLanguage = ref(t.locale)
const languages = [
  { value: 'lv-LV', label: 'LAT' },
  { value: 'en-US', label: 'ENG' },
  { value: 'ru-RU', label: 'RUS' },
]
const $q = useQuasar()
</script>

<template>
  <!-- <q-parallax src="../assets/carwash.jpg" style="height: 100vh"> -->
  <q-layout view="hHh lpR fff">
    <q-header class="Header">
      <q-toolbar>
        <q-toolbar-title>
          <q-img :src="LogoSVG" fit="contain" height="36px" width="150px" />
        </q-toolbar-title>

        <q-btn-toggle
          v-model="choosenLanguage"
          flat
          stretch
          toggle-color="secondary"
          :options="languages"
        />
      </q-toolbar>
    </q-header>

    <q-page-container
      :class="`Container column items-stretch ${$q.screen.md ? `q-px-xl` : `q-px-sm`}`"
    >
      <router-view />
    </q-page-container>
    <q-footer class="bg-transparent text-center q-pa-xl"
      >© Indafa {{ new Date().getFullYear() }}</q-footer
    >
  </q-layout>
  <!-- </q-parallax> -->
</template>

<style lang="scss" scoped>
.Header {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: color-mix(in srgb, var(--q-dark), transparent);
}

.Container {
  background: linear-gradient(to top, #00201d, transparent 400px);
}
</style>
