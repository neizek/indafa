<script setup lang="ts">
// import { ref } from 'vue'
import { ref, watch } from 'vue'
import LogoSVG from '../assets/indafa.svg'
// import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { languages } from 'src/boot/i18n'
const t = useI18n()
const router = useRouter()
const route = useRoute()
// console.log(q)
const choosenLanguage = ref(t.locale)

async function changeLocale(newLocale: string) {
  await router.push({
    params: { ...route.params, locale: newLocale },
    query: route.query,
  })
}

watch(choosenLanguage, () => {
  const newLocale = languages.find((lang) => lang.value === choosenLanguage.value)?.link

  if (newLocale) {
    void changeLocale(newLocale)
  }
})

const $q = useQuasar()
</script>

<template>
  <!-- <q-parallax src="../assets/carwash.jpg" style="height: 100vh"> -->
  <q-layout view="hHh lpR fff">
    <q-header class="Header">
      <q-toolbar>
        <!-- <q-toolbar-title class="absolute q-pa-md"> -->
        <q-img :src="LogoSVG" fit="contain" height="36px" width="100px" />
        <!-- </q-toolbar-title> -->
        <q-space></q-space>
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
      :style="`${$q.screen.md ? `max-width: 1200px, margin: 0 auto;` : ``}`"
    >
      <router-view />
    </q-page-container>
    <q-footer class="bg-transparent text-center q-pa-xl q-gutter-lg">
      <q-btn
        no-caps
        unelevated
        color="transparent"
        label="info@indafa.lv"
        icon="mail"
        href="mailto:info@indafa.lv"
      />
      <q-space></q-space>
      <span>© Indafa {{ new Date().getFullYear() }}</span>
    </q-footer>
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
