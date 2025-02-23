<script lang="ts" setup>
import { onMounted, type Ref, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useI18n } from 'vue-i18n'
import { getCarwashList } from './carWashList'
import { computed } from 'vue'
import { type CarWash } from './models'

// Set your Mapbox access token
mapboxgl.accessToken =
  'pk.eyJ1IjoidGV3ZWIiLCJhIjoiY20yazkzemFnMDhmYzJqcXpnemdpdHFxZiJ9.BPBGXSE8L1kKH8vfLDS0IA'

const mapContainer = ref(null)
const { t } = useI18n()
const carWashList = computed(() => getCarwashList(t))
const carWashDetails: Ref<CarWash | undefined> = ref(undefined)
const detailsOpened: Ref<boolean> = ref(false)

function handleClick(carwash: CarWash) {
  carWashDetails.value = carwash
  detailsOpened.value = true
  console.log(carwash)
}

onMounted(() => {
  if (mapContainer.value === null) {
    return
  }

  const map = new mapboxgl.Map({
    container: mapContainer.value,
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [24.198310039551963, 56.990224093655414],
    zoom: 9,
  })

  carWashList.value.forEach((cityCarWashes) => {
    cityCarWashes.carWashes.forEach((carwash) => {
      if (carwash.coordinates) {
        const marker = new mapboxgl.Marker().setLngLat(carwash.coordinates).addTo(map)
        marker.getElement().addEventListener('click', () => handleClick(carwash))
      }
    })
  })
})
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div ref="mapContainer" class="map-container"></div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="detailsOpened" position="bottom">
    <q-card flat v-if="carWashDetails !== undefined">
      <q-card-section>
        <q-card-item>Location: {{ carWashDetails.spot }}</q-card-item>
        <q-card-item>Address: {{ carWashDetails.address }}</q-card-item>
        SUKA
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss">
.map-container {
  width: 100%;
  aspect-ratio: 4/3;
  max-height: 500px;
  overflow: hidden;
}
</style>
