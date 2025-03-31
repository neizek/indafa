<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getCarwashList } from './carWashList'
import { computed, type PropType } from 'vue'
import { type CarWash } from './models'

const { t } = useI18n()
const carWashList = computed(() => getCarwashList(t))
const props = defineProps({
  openDetails: {
    type: Function as PropType<(arg: CarWash) => void>,
    required: true,
  },
})
</script>
<template>
  <q-intersection transition="slide-left" :transition-duration="600" once>
    <h4 class="q-my-xs q-my-xl-md">{{ $t('howToFindUs') }}</h4>
  </q-intersection>
  <div v-for="(cityCarWashes, index) in carWashList" :key="index" class="q-gutter-y-md">
    <q-intersection class="text-h5" style="margin-bottom: 0" transition="slide-left" once>{{
      cityCarWashes.city
    }}</q-intersection>
    <q-intersection transition="scale" once>
      <q-card class="bg-transparent q-pa-none" flat>
        <q-card-section class="q-pa-none">
          <q-list class="q-pa-none">
            <q-item
              v-for="(carWash, index) in cityCarWashes.carWashes"
              :key="index"
              clickable
              v-ripple
              @click="() => props.openDetails(carWash)"
              class="q-py-md q-px-lg-md q-my-sm bg-dark rounded-borders"
            >
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
    </q-intersection>
  </div>
</template>
