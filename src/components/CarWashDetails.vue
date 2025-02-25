<script setup lang="ts">
// import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps(['carWashDetails'])
console.log(props.carWashDetails)
const { t } = useI18n()
</script>
<template>
  <q-card flat v-if="carWashDetails !== undefined" style="min-width: 400px" class="q-pa-md-md">
    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>{{ carWashDetails.address }}</q-item-label>
            <q-item-label caption lines="2">{{ carWashDetails.spot }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label v-if="carWashDetails.phone">{{ t('makeAppointment') }}</q-item-label>
            <q-item-label v-if="carWashDetails.phone">{{ carWashDetails.phone }}</q-item-label>
            <q-item-label v-else color="secondary">{{ t('firstCome') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-gutter-sm">
            <q-btn
              rounded
              nowrap
              color="secondary"
              outline
              :label="`${t('openIn')} Waze`"
              target="_blank"
              :href="`https://www.waze.com/ul?ll=${carWashDetails.coordinates[1]}%2C${carWashDetails.coordinates[0]}&navigate=yes`"
            />
            <q-btn
              rounded
              nowrap
              color="secondary"
              outline
              :label="`${t('openIn')} Google Maps`"
              target="_blank"
              :href="`https://www.google.com/maps/dir/?api=1&destination=${carWashDetails.coordinates[1]}%2C${carWashDetails.coordinates[0]}`"
            />
            <q-btn
              v-if="carWashDetails.phone !== undefined"
              rounded
              nowrap
              color="secondary"
              :href="`tel:${carWashDetails.phone}`"
              icon="phone"
              :label="$t('call')"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
