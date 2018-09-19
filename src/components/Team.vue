<template>
    <section id="team" class="section">
        <div class="container">
            <h1 class="title">团队</h1>
            <hr>
            <carousel :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :perPageCustom="[[0, 1], [768, 3], [1024, 5]]" :loop="true">
                <slide v-for="member in team" :key="member.id">
                    <div class="person">
                        <figure class="image is-1by1">
                            <img class="is-rounded is-64x64" :src="'http://static.tedxsuzhou.com' + member.avatar_template" alt="">
                        </figure>
                        <h4>{{member.name}}<template v-if="member.title">, {{member.title}}</template></h4>
                        <p>{{member.bio}}</p>
                    </div>
                </slide>
            </carousel>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import team from '../db/team.json'
export default {
  data () {
    return {
      team
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
.person {
    padding: 1rem;
}
</style>
