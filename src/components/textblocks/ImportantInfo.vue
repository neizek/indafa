<script setup lang="ts"></script>

<template>
  <q-intersection transition="slide-left" :transition-duration="600" once>
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
</template>
