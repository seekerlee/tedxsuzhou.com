<template>
  <div>
    <hero />
    <talks />
    <join />
    <team />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Talks from './components/Talks.vue'
import Join from './components/Join.vue'
import Team from './components/Team.vue'

export default {
  components: {
    Hero,
    Talks,
    Join,
    Team
  }
}
</script>

<style>
</style>
