<script setup lang="ts">
import anime from 'animejs'
import { onMounted } from 'vue'

onMounted(() => {
  const timeline = anime.timeline()

  timeline
    .add({
      targets: '.hello-section__title',
      translateY: '50px',
      duration: 400,
      delay: 500,
      easing: 'easeInOutQuad',
    })
    .add({
      targets: '.hello-section__title',
      translateY: '-40px',
      duration: 150,
      easing: 'easeInOutQuad',
    })
    .add({
      targets: '.hello-section',
      translateY: '-100vh',
      duration: 300,
      easing: 'easeInQuad',
      offset: '-50',
    })
})
</script>

<template>
  <div class="hello-section">
    <h1 class="hello-section__title">Hello there</h1>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography.scss';

.hello-section {
  min-height: 100vh;
  width: 100vw;
  background-color: var(--color-blue);
  display: flex;
  align-items: center;
  position: absolute;

  &__title {
    @extend %kumbh-sans-extra-bold;
    margin-left: 10%;
    font-size: var(--font-50);
    color: var(--color-white);
    position: relative;
    transform-box: view-box;

    @media only screen and (min-width: 768px) {
      font-size: var(--font-100);
    }
  }
}
</style>
