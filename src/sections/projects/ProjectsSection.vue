<script setup lang="ts">
import { ref } from 'vue'
import ProjectAccordion from './ProjectAccordion.vue'
import { projects } from './projects'

const isOpen = ref<Record<string, boolean>>({
  [projects[0].name]: true,
  [projects[1].name]: false,
})
</script>

<template>
  <section class="projects-section">
    <h2 class="projects-section__title">My Projects:</h2>

    <ProjectAccordion
      v-for="{ name, website, repository, about, techStack } in projects"
      :key="name"
      :name="name"
      :website="website"
      :repository="repository"
      :about="about"
      :tech-stack="techStack"
      :is-open="isOpen[name]"
      class="projects-section__project"
      @toggle="isOpen[name] = !isOpen[name]"
    />
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/typography.scss';

.projects-section {
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: var(--color-blue);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    @extend %kumbh-sans-extra-bold;
    font-size: var(--font-40);
    color: var(--color-white);
    margin: 100px 0;

    @media only screen and (min-width: 768px) {
      font-size: var(--font-50);
    }
  }

  &__project {
    @media only screen and (min-width: 768px) {
      width: 80%;
    }

    @media only screen and (min-width: 1440px) {
      width: 50%;
    }
  }
}
</style>
