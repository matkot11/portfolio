<script setup lang="ts">
import { shallowRef } from 'vue'
import HelloSection from './HelloSection.vue'
import { ChevronRight } from 'lucide-vue-next'
import anime from 'animejs'

const aboutVisible = shallowRef(false)

const showAbout = () => {
  const timeline = anime.timeline()

  timeline
    .add({
      targets: '.about-section__wrapper',
      translateX: '50px',
      opacity: 0,
      duration: 200,
      easing: 'easeInOutQuad',
      complete: () => {
        aboutVisible.value = true
      },
    })
    .add({
      targets: '.about-section__about-wrapper',
      translateX: ['50px', 0],
      opacity: 1,
      duration: 200,
      easing: 'linear',
      offset: '-50',
    })
}

const hideAbout = () => {
  const timeline = anime.timeline()

  timeline
    .add({
      targets: '.about-section__about-wrapper',
      translateX: '50px',
      opacity: 0,
      duration: 200,
      easing: 'easeInOutQuad',
      complete: () => {
        aboutVisible.value = false
      },
    })
    .add({
      targets: '.about-section__wrapper',
      translateX: ['50px', 0],
      opacity: 1,
      duration: 200,
      easing: 'linear',
      offset: '-50',
    })
}
</script>

<template>
  <section class="about-section">
    <HelloSection />

    <div class="about-section__spacer" />

    <div
      :class="{ 'about-section__wrapper': true, 'about-section__wrapper--invisible': aboutVisible }"
    >
      <img
        src="/portrait.jpg"
        alt="portrait of Mateusz Kocik"
        class="about-section__portrait"
      />

      <div class="about-section__content">
        <h2 class="about-section__name">
          My name is <br />
          Mateusz Kocik
        </h2>
        <h3 class="about-section__job-title">Frontend Developer</h3>
        <button class="about-section__button" @click="showAbout">
          About me <ChevronRight stroke-width="3" />
        </button>
      </div>
    </div>

    <div
      :class="{
        'about-section__about-wrapper': true,
        'about-section__about-wrapper--invisible': !aboutVisible,
      }"
      @click="hideAbout"
    >
      <p class="about-section__about-text">
        Frontend developer with 3 years of experience specializing in building data-driven web
        applications using Vue.js. Currently working at Infermedica, contributing to the development
        of a medical application for doctors, focused on eﬃciently handling large volumes of medical
        data. In my free time, I enjoy climbing, especially bouldering, and playing board games.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/typography.scss';

.about-section {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      gap: 56px;
    }

    &--invisible {
      display: none;
    }
  }

  &__spacer {
    height: 48px;
  }

  &__portrait {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;

    @media only screen and (min-width: 1024px) {
      height: 450px;
      width: 450px;
    }
  }

  &__name {
    @extend %kumbh-sans-extra-bold;
    margin: {
      top: 24px;
      bottom: 0;
    }
    font-size: var(--font-50);

    @media only screen and (min-width: 1440px) {
      font-size: var(--font-80);
    }
  }

  &__job-title {
    @extend %kumbh-sans-extra-bold;
    margin: 0;
    font-size: var(--font-32);
    color: var(--color-blue);

    @media only screen and (min-width: 1440px) {
      font-size: var(--font-50);
    }
  }

  &__button {
    @extend %kumbh-sans-medium;
    margin-top: 24px;
    font-size: var(--font-24);
    color: var(--color-white);
    background-color: var(--color-blue);
    border: 3px solid var(--color-blue);
    border-radius: 5px;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    -webkit-tap-highlight-color: var(--color-blue);

    @media only screen and (min-width: 1440px) {
      font-size: var(--font-32);
      padding: 12px 24px;
    }

    &:hover {
      background-color: var(--color-white);
      color: var(--color-blue);
    }

    &:focus {
      outline: none;
    }
  }

  &__about {
    &-wrapper {
      margin: 0 24px;
      border: 5px solid var(--color-blue);
      border-radius: 25px;
      padding: 24px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      @media only screen and (min-width: 1440px) {
        margin: 0 20%;
      }

      &--invisible {
        display: none;
      }
    }

    &-text {
      @extend %kumbh-sans-semi-bold;
      font-size: var(--font-24);
      line-height: 1.3;
      margin: 0;

      @media only screen and (min-width: 1440px) {
        font-size: var(--font-32);
        line-height: 1.5;
      }
    }
  }
}
</style>
