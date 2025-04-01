<template>
  <q-intersection transition="slide-left" :transition-duration="600" once>
    <h5>{{ $t('paragraphs.disclaimer.header') }}</h5>
  </q-intersection>
  <q-intersection transition="slide-up" :transition-duration="600" once>
    <p class="text-grey-13">{{ $t('paragraphs.disclaimer.first') }}</p>
    <p class="text-grey-13">
      {{ $t('paragraphs.disclaimer.second') }}
    </p>
  </q-intersection>
</template>
