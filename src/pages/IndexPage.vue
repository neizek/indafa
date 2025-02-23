<script setup lang="ts">
import HowToFindUs from 'src/components/HowToFindUs.vue'
import InteractiveMap from 'src/components/InteractiveMap.vue'
</script>

<template>
  <q-page padding class="fit col q-col-gutter-y-xl">
    <!-- <q-parallax src="../assets/carwash.jpg" class="row q-col-gutter-lg" style="height: 100vh" /> -->
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-7 q-gutter-y-lg">
        <!-- <q-parallax src="../assets/carwash.jpg" class="rounded-borders"> -->
        <q-intersection transition="slide-right" once>
          <h2>Indafa {{ $t('carWash') }}</h2>
        </q-intersection>
        <!-- <q-img src="https://indafa.lv/images/logo.png" /> -->
        <p>
          A clean car is not just a presentable appearance and the key to success. It is also a
          means of saving, because in a soiled car color top breaks down quickly,especially in the
          winter period, as a result, you need to invest in your car service. Clean, bright and
          shiny car is more visible to other road users, and it positively affects your and the
          safety of others.
        </p>
        <p>
          Indafa - is a community of several firms that specialize in car wash services. We have
          teamed up to give the opportunity to use our services at a high level at a reasonable
          price, also to improve our quality of service and sometimes to make for you happy
          discounts.
        </p>
        <!-- </q-parallax> -->
        <!-- <div ref="mapContainer" class="map-container"></div> -->
        <InteractiveMap />
      </div>
      <div class="col-12 col-md-5 q-col-gutter-y-lg">
        <HowToFindUs />
      </div>
    </div>
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-6">
        <q-intersection transition="slide-right" once>
          <h5>IMPORTANT INFORMATION</h5>
        </q-intersection>
        <p>
          Please warn up carwash workers about loose mirrors and other parts that can be damaged by
          high-pressure washing device activity.
        </p>
        <p>
          This also applied to places where bad cling color, such as parts that have been recently
          painted. Otherwise, the company is not responsible for the demages that caused in washing
          process. If you have any complaints about the quality of service provided, please refer to
          the car wash worker immediately.
        </p>
      </div>
      <div class="col-12 col-md-6">
        <q-intersection transition="slide-right" once>
          <h5>DISCLAIMER</h5>
        </q-intersection>
        <p>The company bears no responsibility about leaved car keys to car wash workers.</p>
        <p>
          Car engine washing event workers employees only for the quality of their work. The company
          is not responsible if the water was get in unexpected places, as well as other damage that
          may arise washing.
        </p>
      </div>
    </div>
  </q-page>
</template>
