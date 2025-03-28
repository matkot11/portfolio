<script setup lang="ts">
import { watch } from 'vue'
import { InfermedicaResponsibilities, InfermedicaTechStack } from './experience'
import anime from 'animejs'

const props = defineProps<{
  scrolledToSection: boolean
}>()

watch(
  () => props.scrolledToSection,
  () => {
    if (!props.scrolledToSection) {
      anime({
        targets: '.experience-section__separator',
        width: ['60%', '0%'],
        scaleX: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
      })

      anime({
        targets: '.experience-section__separator--mobile',
        width: ['100%', '0%'],
        scaleX: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
      })

      return
    }

    anime({
      targets: '.experience-section__separator',
      width: ['0%', '60%'],
      scaleX: [0, 1],
      duration: 500,
      easing: 'easeInOutSine',
    })

    anime({
      targets: '.experience-section__separator--mobile',
      width: ['0%', '100%'],
      scaleX: [0, 1],
      duration: 500,
      easing: 'easeInOutSine',
    })
  },
)
</script>

<template>
  <section class="experience-section">
    <h2 class="experience-section__title">Experience:</h2>
    <hr class="experience-section__separator" />
    <hr class="experience-section__separator--mobile" />

    <div class="experience-section__job-title-wrapper">
      <h3 class="experience-section__job-title">Infermedica - Frontend Developer</h3>
      <p class="experience-section__job-title-date">October 2022 - Present</p>
    </div>

    <div class="experience-section__job-description-wrapper">
      <div>
        <h4 class="experience-section__job-description-header">My responsibilities:</h4>
        <ul class="experience-section__job-description">
          <li
            v-for="responsibility in InfermedicaResponsibilities"
            :key="responsibility"
            class="experience-section__job-description-item"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>

      <div>
        <h4 class="experience-section__job-description-header">Tech stack:</h4>
        <div class="experience-section__job-description-tech-stack">
          <a
            v-for="tech in InfermedicaTechStack"
            :key="tech.name"
            :href="tech.docs"
            target="_blank"
            class="experience-section__job-description-tech-stack-item"
          >
            {{ tech.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/typography.scss';

.experience-section {
  margin: 24px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    margin: auto;
    width: 1000px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1250px;
  }

  &__title {
    @extend %kumbh-sans-extra-bold;
    margin: 0 0 0 8px;
    font-size: var(--font-40);
    color: var(--color-blue);

    @media only screen and (min-width: 1024px) {
      font-size: var(--font-50);
    }
  }

  &__separator {
    border: 1px solid var(--color-blue);
    transform-origin: left;
    transform: scaleX(0);
    display: none;

    @media only screen and (min-width: 768px) {
      margin-left: 0;
      width: 0;
      display: block;
    }

    &--mobile {
      margin-left: 0;
      width: 0;
      border: 1px solid var(--color-blue);
      transform-origin: left;
      transform: scaleX(0);

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
  }

  &__job-title {
    @extend %kumbh-sans-extra-bold;
    margin: 0;
    font-size: var(--font-32);
    text-align: center;

    @media only screen and (min-width: 1024px) {
      font-size: var(--font-40);
    }

    &-wrapper {
      margin: 24px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-date {
      @extend %kumbh-sans-semi-bold;
      margin: 0;
      font-size: var(--font-20);
      color: var(--color-gray);
    }
  }

  &__job-description {
    list-style: none;
    margin: 0;
    padding: 0;

    &-item {
      @extend %kumbh-sans-medium;
      margin-bottom: 12px;

      @media only screen and (min-width: 1024px) {
        font-size: var(--font-18);
      }

      @media only screen and (min-width: 1440px) {
        margin-bottom: 16px;
        font-size: var(--font-20);
      }
    }

    &-wrapper {
      margin: 0 8px;
      display: flex;
      flex-direction: column;

      @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 24px;

        & > * {
          max-width: 50%;
        }
      }

      @media only screen and (min-width: 1024px) {
        & > * {
          max-width: 500px;
        }
      }

      @media only screen and (min-width: 1440px) {
        gap: 100px;

        & > *:first-child {
          max-width: 750px;
        }
      }
    }

    &-header {
      @extend %kumbh-sans-semi-bold;
      margin: 0 0 12px 0;
      font-size: var(--font-24);
      color: var(--color-blue);

      @media only screen and (min-width: 1024px) {
        font-size: var(--font-32);
      }
    }

    &-tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      @media only screen and (min-width: 1024px) {
        gap: 12px;
      }

      @media only screen and (min-width: 1440px) {
        gap: 16px;
      }

      &-item {
        @extend %kumbh-sans-semi-bold;
        font-size: var(--font-18);
        color: var(--color-white);
        background-color: var(--color-blue);
        width: fit-content;
        padding: 8px 24px;
        border-radius: 5px;
        border: 2px solid var(--color-blue);
        text-decoration: none;
        cursor: pointer;

        &:hover {
          background-color: var(--color-white);
          color: var(--color-blue);
        }
      }
    }
  }
}
</style>
