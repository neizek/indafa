<script setup lang="ts">
import { useMeta, useQuasar } from 'quasar'
import CarWashDetails from 'src/components/CarWashDetails.vue'
import HowToFindUs from 'src/components/HowToFindUs.vue'
import InteractiveMap from 'src/components/InteractiveMap.vue'
import { type CarWash } from 'src/components/models'
import { computed, type Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const carWashDetails: Ref<CarWash | undefined> = ref(undefined)
const detailsOpened: Ref<boolean> = ref(false)

function openDetails(carWash: CarWash) {
  carWashDetails.value = carWash
  detailsOpened.value = true
}

const { t } = useI18n()
const q = useQuasar()
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
        <q-intersection transition="fade" once>
          <q-img src="../assets/mercedes.png" style="align-items: center; align-content: center">
            <!-- <h3 class="text-right">Indafa<br />{{ $t('carWash') }}</h3> -->
            <span :class="`${q.screen.md ? 'text-h2' : 'text-h3'} Title`"
              >Indafa<br />{{ $t('carWash') }}</span
            >
          </q-img>
        </q-intersection>
        <q-intersection transition="jump-up" :transition-duration="600" once>
          <p class="text-grey-13">
            {{ $t('paragraphs.aboutUs.first') }}
          </p>
          <p class="text-grey-13">
            {{ $t('paragraphs.aboutUs.second') }}
          </p>
        </q-intersection>
        <div>
          <InteractiveMap :open-details="openDetails" />
        </div>
      </div>
      <div class="col-12 col-md-5 q-col-gutter-y-lg">
        <HowToFindUs :open-details="openDetails" />
      </div>
    </div>
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-6">
        <q-intersection transition="slide-right" :transition-duration="600" once>
          <h5>
            {{ $t('paragraphs.importantInfo.header') }}
          </h5>
        </q-intersection>
        <q-intersection transition="jump-up" :transition-duration="600" once>
          <p class="text-grey-13">
            {{ $t('paragraphs.importantInfo.first') }}
          </p>
          <p class="text-grey-13">
            {{ $t('paragraphs.importantInfo.second') }}
          </p>
        </q-intersection>
      </div>
      <div class="col-12 col-md-6">
        <q-intersection transition="slide-right" :transition-duration="600" once>
          <h5>{{ $t('paragraphs.disclaimer.header') }}</h5>
        </q-intersection>
        <q-intersection transition="slide-up" :transition-duration="600" once>
          <p class="text-grey-13">{{ $t('paragraphs.disclaimer.first') }}</p>
          <p class="text-grey-13">
            {{ $t('paragraphs.disclaimer.second') }}
          </p>
        </q-intersection>
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
}
</style>
