<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getCarwashList } from './carWashList'
import { computed } from 'vue'
const { t } = useI18n()
const carWashList = computed(() => getCarwashList(t))
</script>
<template>
  <h4>{{ $t('howToFindUs') }}</h4>
  <div v-for="(cityCarWashes, index) in carWashList" :key="index" class="q-gutter-y-md">
    <div class="text-h5">{{ cityCarWashes.city }}</div>
    <q-card flat>
      <q-card-section>
        <q-list class="q-pa-none">
          <q-item v-for="(carWash, index) in cityCarWashes.carWashes" :key="index">
            <q-item-section avatar>
              <q-icon size="32px" name="location_on" color="secondary" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ carWash.address }}</q-item-label>
              <q-item-label caption lines="2">{{ carWash.spot }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label v-if="carWash.phone">{{ t('makeAppointment') }}</q-item-label>
              <q-item-label v-if="carWash.phone">{{ carWash.phone }}</q-item-label>
              <q-item-label v-else color="secondary">{{ t('firstCome') }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>
