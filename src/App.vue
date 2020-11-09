<template>
  <div id="app" class="container container-fluid">
    <transition name="fade" mode="out-in">
      <div class="row at-row flex-center">
        <div class="col-24 col-xl-12">
          <router-view />
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
/* global styles */

.section__title {
  margin-top: 5%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
