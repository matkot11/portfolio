<script setup lang="ts">
import { ChevronUp, Github, Globe } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
  name: string
  website: string
  repository: string
  about: string
  techStack: {
    name: string
    docs: string
  }[]
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <div class="project-accordion">
    <div class="project-accordion__item">
      <button class="project-accordion__item-header" @click="$emit('toggle')">
        <ChevronUp
          stroke-width="4"
          :class="{
            'project-accordion__chevron': true,
            'project-accordion__chevron--open': isOpen,
          }"
        />
        <span>{{ name }}</span>
      </button>

      <div
        :class="{
          'project-accordion__content': true,
          'project-accordion__content--open': isOpen,
        }"
      >
        <div class="project-accordion__body">
          <div class="project-accordion__buttons">
            <a :href="website" target="_blank" class="project-accordion__button">
              <Globe />
              <span>Website</span>
            </a>
            <a :href="repository" target="_blank" class="project-accordion__button">
              <Github />
              <span>Source code</span>
            </a>
          </div>

          <div class="project-accordion__details">
            <div class="project-accordion__details-item">
              <span class="project-accordion__details-item-label">About</span>
              <p class="project-accordion__details-item-content">{{ about }}</p>
            </div>

            <div class="project-accordion__details-item">
              <span class="project-accordion__details-item-label">Tech stack</span>
              <div
                class="project-accordion__details-item-content project-accordion__details-tech-stack"
              >
                <a
                  v-for="{ name, docs } in techStack"
                  :key="name"
                  :href="docs"
                  target="_blank"
                  class="project-accordion__details-tech-stack-item"
                >
                  {{ name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/typography.scss';
.project-accordion {
  width: 100%;

  &__item {
    border-bottom: 2px solid var(--color-white);

    &-header {
      @extend %kumbh-sans-semi-bold;
      font-size: var(--font-24);
      background-color: var(--color-blue);
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 16px;
      color: var(--color-white);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      @media only screen and (min-width: 768px) {
        font-size: var(--font-32);
      }
    }
  }

  &__chevron {
    transition: transform 0.3s ease-in-out;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;

    &--open {
      max-height: 1000px;
    }
  }

  &__body {
    padding: 0 24px 24px 24px;
    display: flex;
    flex-direction: column;
  }

  &__buttons {
    align-self: center;
    display: flex;
    gap: 24px;

    @media only screen and (min-width: 768px) {
      align-self: start;
    }
  }

  &__button {
    @extend %kumbh-sans-semi-bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--color-white);
    color: var(--color-blue);
    border: 2px solid var(--color-white);
    border-radius: 5px;
    padding: 8px 12px;

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);
    }

    @media only screen and (min-width: 768px) {
      padding: 8px 24px;
    }
  }

  &__details {
    &-item {
      margin-top: 24px;
      display: grid;
      grid-template-rows: auto 1fr;
      gap: 8px;
      align-items: start;

      @media only screen and (min-width: 768px) {
        grid-template-columns: 125px 1fr;
        gap: 24px;
      }

      &-label {
        @extend %kumbh-sans-semi-bold;
        font-size: var(--font-20);
        color: var(--color-white);

        @media only screen and (min-width: 768px) {
          justify-self: end;
          font-size: var(--font-24);
        }

        @media only screen and (min-width: 1024px) {
          font-size: var(--font-24);
        }
      }

      &-content {
        @extend %kumbh-sans-semi-bold;
        margin: 0;
        color: var(--color-white);
        line-height: 1.5;

        @media only screen and (min-width: 768px) {
          font-size: var(--font-18);
        }

        @media only screen and (min-width: 1024px) {
          font-size: var(--font-20);
        }
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
        font-size: var(--font-16);
        color: var(--color-blue);
        background-color: var(--color-white);
        width: fit-content;
        padding: 4px 12px;
        border-radius: 5px;
        border: 2px solid var(--color-white);
        text-decoration: none;
        cursor: pointer;

        &:hover {
          background-color: var(--color-blue);
          color: var(--color-white);
        }

        @media only screen and (min-width: 768px) {
          padding: 4px 24px;
          font-size: var(--font-18);
        }
      }
    }
  }
}
</style>
