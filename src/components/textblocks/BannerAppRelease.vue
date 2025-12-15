<template>
  <div class="row q-col-gutter-lg">
    <div class="col-8">
      <q-intersection transition="slide-left" :transition-duration="600" once>
        <h5>{{ $t('paragraphs.bannerAppRelease.header') }}</h5>
      </q-intersection>
      <q-intersection transition="slide-up" :transition-duration="600" once>
        <p class="text-grey-13">
          {{ $t('paragraphs.bannerAppRelease.description') }}
        </p>
      </q-intersection>
      <div class="row q-col-gutter-md">
        <div class="col q-gutter-y-sm col-10 col-sm-6 col-md-5">
          <q-btn
            stretch
            nowrap
            color="secondary"
            outline
            label="App Store"
            target="_blank"
            style="width: 100%"
            href="https://apps.apple.com/us/app/indafa/id6755602527"
          ></q-btn>
          <q-img
            class="mobile-hide gt-md"
            src="../../assets/indafa-app-store-qr-code.svg"
            :ratio="1 / 1"
            fit="contain"
            width="100%"
            style="align-items: center; align-content: center"
            loading="eager"
          />
        </div>
        <div class="col q-gutter-y-sm col-10 col-sm-6 col-md-5">
          <q-btn
            stretch
            nowrap
            color="secondary"
            outline
            label="Google Play"
            target="_blank"
            style="width: 100%"
            href="https://play.google.com/store/apps/details?id=com.teweb.indafa"
          ></q-btn>
          <q-img
            class="mobile-hide gt-md"
            src="../../assets/indafa-google-play-qr-code.svg"
            :ratio="1 / 1"
            fit="contain"
            width="100%"
            style="align-items: center; align-content: center"
            loading="eager"
          />
        </div>
      </div>
    </div>
    <div class="col-4" style="position: relative">
      <q-img
        class="Phone"
        src="../../assets/1.png"
        :ratio="3 / 5"
        fit="contain"
        style="align-items: center; align-content: center"
        loading="eager"
      />
    </div>
  </div>
</template>

<style>
.Phone {
  width: 130%;
  align-items: center;
  align-content: center;
  position: absolute;
  height: 120%;
  left: -20%;
  z-index: -1;
  top: 4%;
  -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
