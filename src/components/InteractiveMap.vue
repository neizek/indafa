<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useI18n } from 'vue-i18n'
import { getCarwashList } from './carWashList'
import { computed } from 'vue'
import { type CarWash } from './models'
// import { type CarWash } from './models'

// Set your Mapbox access token
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

const mapContainer = ref(null)
const { t } = useI18n()
const carWashList = computed(() => getCarwashList(t))
// const carWashDetails: Ref<CarWash | undefined> = ref(undefined)
// const detailsOpened: Ref<boolean> = ref(false)
// defineProps({
//   openDetails: (carWash: CarWash) => void
// })

import { type PropType } from 'vue'

const props = defineProps({
  openDetails: {
    type: Function as PropType<(arg: CarWash) => void>,
    required: true,
  },
})

onMounted(() => {
  if (mapContainer.value === null) {
    return
  }

  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [24.198310039551963, 56.990224093655414],
    zoom: 9,
  })

  map.addControl(new mapboxgl.FullscreenControl())

  const bounds = new mapboxgl.LngLatBounds()
  carWashList.value.forEach((cityCarWashes) => {
    cityCarWashes.carWashes.forEach((carwash) => {
      if (carwash.coordinates) {
        const marker = new mapboxgl.Marker().setLngLat(carwash.coordinates).addTo(map)
        marker.getElement().addEventListener('click', () => props.openDetails(carwash))
        bounds.extend(carwash.coordinates)
      }
    })
  })

  map.fitBounds(bounds, {
    padding: 50,
    maxZoom: 15,
    duration: 1000,
  })
})
</script>

<template>
  <div ref="mapContainer" class="map-container" style="border-radius: 10px"></div>
</template>

<style lang="scss">
.map-container {
  width: 100%;
  aspect-ratio: 4/3;
  max-height: 500px;
  overflow: hidden;
}
</style>
