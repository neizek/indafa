<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const offers = computed(() => [
  { text: t('offers.carwash'), icon: 'local_car_wash' },
  { text: t('offers.interiorCleaning'), icon: 'cleaning_services' },
  { text: t('offers.interiorDryCleaning'), icon: 'science' },
  { text: t('offers.interiorOzonation'), icon: 'air' },
  { text: t('offers.polishing'), icon: 'flare' },
  { text: t('offers.ceramicCoating'), icon: 'wash' },
  { text: t('offers.partnership'), icon: 'handshake' },
])
</script>

<template>
  <q-intersection transition="slide-left" :transition-duration="600" once>
    <h5>Indafa {{ $t('offers.that') }}</h5>
  </q-intersection>
  <q-list>
    <q-item v-for="(offer, index) in offers" :key="index">
      <q-item-section avatar>
        <q-icon :name="offer.icon" />
      </q-item-section>
      <q-item-section>{{ offer.text }}</q-item-section>
    </q-item>
  </q-list>
</template>
