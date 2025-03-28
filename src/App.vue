<script setup lang="ts">
import AboutSection from '@/sections/about/AboutSection.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import ExperienceSection from './sections/about/experience/ExperienceSection.vue'
import ProjectsSection from './sections/projects/ProjectsSection.vue'

const currentSectionScrolledMiddle = ref('')
const currentSectionScrolledTop = ref('')

const checkIfSectionIsScrolledToMiddle = () => {
  const sections = document.querySelectorAll('section[id]')

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const middle = window.innerHeight / 2

    if (rect.top <= middle && rect.bottom >= middle) {
      currentSectionScrolledMiddle.value = section.id
    }
  })
}

const checkIfSectionIsScrolledToTop = () => {
  const sections = document.querySelectorAll('section[id]')

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const distanceFromTopPageToNavigationBar = window.innerHeight >= 768 ? 47 : 25

    if (rect.top <= distanceFromTopPageToNavigationBar) {
      currentSectionScrolledTop.value = section.id
    }
  })
}

onBeforeMount(() => {
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)
  })
})

onMounted(() => {
  window.addEventListener('scroll', checkIfSectionIsScrolledToMiddle)
  window.addEventListener('scroll', checkIfSectionIsScrolledToTop)
  checkIfSectionIsScrolledToMiddle() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkIfSectionIsScrolledToMiddle)
  window.removeEventListener('scroll', checkIfSectionIsScrolledToTop)
})
</script>

<template>
  <main class="app">
    <NavigationBar
      :current-section="currentSectionScrolledMiddle"
      :reverted-colors="currentSectionScrolledTop === 'projects'"
      class="app__navigation"
    />
    <AboutSection id="about" />
    <ExperienceSection id="experience" :scrolled-to-section="currentSectionScrolledMiddle === 'experience'" />
    <ProjectsSection id="projects" />
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
