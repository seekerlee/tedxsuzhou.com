<template>
  <div>
    <hero />
    <talks />
    <join />
    <team />
    <what />
    <partner />
    <contact />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Talks from './components/Talks.vue'
import Join from './components/Join.vue'
import Team from './components/Team.vue'
import What from './components/What.vue'
import Partner from './components/Partner.vue'
import Contact from './components/Contact.vue'

export default {
  components: {
    Hero,
    Talks,
    Join,
    Team,
    What,
    Partner,
    Contact
  }
}
</script>

<style>
</style>
