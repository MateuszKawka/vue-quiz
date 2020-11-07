<template>
  <div id="app" class="container container-fluid">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
/* global styles */

.section__title {
  margin-top: 10%;
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
