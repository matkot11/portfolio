<script setup lang="ts">
import anime from 'animejs'
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { onMounted } from 'vue'

defineProps<{
  currentSection: string
}>()

onMounted(() => {
  const timeline = anime.timeline()

  timeline.add({
    targets: '.navigation-bar',
    opacity: 1,
    translateY: ['-200px', '0'],
    duration: 2000,
    delay: 1000,
  })
})

const handleScroll = (className: string) => {
  const elementScrollY = document.querySelector(className)!.getBoundingClientRect().top

  window.scrollBy({ top: elementScrollY, behavior: 'smooth' })
}
</script>

<template>
  <nav class="navigation-bar">
    <ul class="navigation-bar__list">
      <li
        v-for="section in ['about', 'experience', 'projects']"
        :key="section"
        class="navigation-bar__link--mobile"
      >
        <button
          :class="{
            'navigation-bar__link': true,
            'navigation-bar__link--active': currentSection === section,
          }"
          @click="() => handleScroll(`#${section}`)"
        >
          {{ section }}
        </button>
      </li>
      <div class="navigation-bar__separator" />
      <li>
        <a href="/resume.pdf" download class="navigation-bar__link">Resume</a>
      </li>
      <li>
        <a href="https://github.com/matkot11" target="_blank" class="navigation-bar__link">
          <Github stroke-width="2.5" class="navigation-bar__link-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mateusz-kocik-a27439193"
          target="_blank"
          class="navigation-bar__link"
        >
          <Linkedin stroke-width="2.5" class="navigation-bar__link-icon" />
        </a>
      </li>
      <li>
        <a href="mailto:matkot11@gmail.com" target="_blank" class="navigation-bar__link">
          <Mail stroke-width="2.5" class="navigation-bar__link-icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/typography.scss';

.navigation-bar {
  opacity: 0;

  &__list {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    background-color: var(--color-white);
    padding: 4px;
    border-radius: 5px;
  }

  &__link {
    @extend %kumbh-sans-medium;
    text-decoration: none;
    font-size: var(--font-24);
    color: var(--color-black);
    background: none;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    padding: 0;

    &:hover,
    &--active {
      text-decoration: underline;
      text-decoration-color: var(--color-blue);
      text-decoration-thickness: 3px;
    }

    &--mobile {
      display: none;

      @media only screen and (min-width: 768px) {
        display: block;
      }
    }

    &-icon {
      vertical-align: sub;

      &:hover {
        color: var(--color-blue);
      }
    }
  }

  &__separator {
    height: 24px;
    border: 1px solid var(--color-black);
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
}
</style>
