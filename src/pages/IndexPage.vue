<script setup lang="ts">
import { useMeta } from 'quasar'
import AboutUs from 'src/components/textblocks/AboutUs.vue'
import CarWashDetails from 'src/components/CarWashDetails.vue'
import Disclaimer from 'src/components/textblocks/DisclaimerText.vue'
import HowToFindUs from 'src/components/HowToFindUs.vue'
import ImportantInfo from 'src/components/textblocks/ImportantInfo.vue'
import InteractiveMap from 'src/components/InteractiveMap.vue'
import { type CarWash } from 'src/components/models'
import { computed, type Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import IndafaTitleBlock from 'src/components/IndafaTitleBlock.vue'
import OffersList from 'src/components/textblocks/OffersList.vue'

const carWashDetails: Ref<CarWash | undefined> = ref(undefined)
const detailsOpened: Ref<boolean> = ref(false)

function openDetails(carWash: CarWash) {
  carWashDetails.value = carWash
  detailsOpened.value = true
}

const { t } = useI18n()
const title = computed(() => t('meta.title'))
const description = computed(() => t('meta.descripton'))
const keywords = computed(() => t('meta.keywords'))

useMeta(() => {
  return {
    title: title.value,
    meta: {
      description: { name: 'description', content: description.value },
      keywords: { name: 'keywords', content: keywords.value },
    },
  }
})
</script>

<template>
  <q-page padding class="fit col q-col-gutter-y-xl">
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-7 q-col-gutter-y-lg">
        <IndafaTitleBlock />
        <AboutUs />
        <InteractiveMap :open-details="openDetails" />
      </div>
      <div class="col-12 col-md-5 q-col-gutter-y-lg">
        <HowToFindUs :open-details="openDetails" />
        <OffersList />
        <ImportantInfo />
        <Disclaimer />
      </div>
    </div>
    <q-dialog v-model="detailsOpened" position="bottom">
      <CarWashDetails v-model:car-wash-details="carWashDetails" />
    </q-dialog>
  </q-page>
</template>

<style lang="scss">
.Title {
  position: absolute;
  top: 30%;
  right: 0;
  text-align: right;
  background: -webkit-linear-gradient(#eee 30%, #003d37);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
