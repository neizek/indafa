<script lang="ts" setup>
import { useQuasar } from 'quasar'

const q = useQuasar()
</script>

<template>
  <q-intersection transition="fade" once>
    <q-img src="../assets/mercedes-min.png" style="align-items: center; align-content: center">
      <span :class="`${q.screen.gt.md ? 'text-h2' : 'text-h3'} Title`"
        >Indafa<br />{{ $t('carWash') }}</span
      >
    </q-img>
  </q-intersection>
</template>
