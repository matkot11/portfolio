<script setup lang="ts">
import AboutSection from '@/sections/about/AboutSection.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import ExperienceSection from './sections/about/experience/ExperienceSection.vue'

const currentSection = ref('')

const checkSection = () => {
  const sections = document.querySelectorAll('section[id]')

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const middle = window.innerHeight / 2

    if (rect.top <= middle && rect.bottom >= middle) {
      currentSection.value = section.id
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkSection)
  checkSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkSection)
})
</script>

<template>
  <main class="app">
    <NavigationBar :current-section="currentSection" class="app__navigation" />
    <AboutSection id="about" />
    <ExperienceSection id="experience" :scrolled-to-section="currentSection === 'experience'" />
  </main>
</template>

<style lang="scss" scoped>
.app {
  position: absolute;

  &__navigation {
    position: fixed;
    top: 24px;
    right: 24px;

    @media only screen and (min-width: 768px) {
      top: 48px;
      right: 48px;
    }
  }
}
</style>
