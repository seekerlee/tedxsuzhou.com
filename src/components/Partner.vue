<template>
<section class="section has-text-centered">
    <div class="container">
        <h1 class="title">合作伙伴</h1>
        <hr>
        <div>
            <a v-for="sponsor in sponsors" :href="sponsor.link" target=_blank v-bind:key="sponsor.id">
                <img class="plogo" :src="sponsor.logoUrl">
            </a>
        </div>
    </div>
</section>
</template>

<script>
import sponsors from '../db/sponsor.json'
const activePartner = sponsors.filter(p => p.active)
export default {
  data () {
    return {
      sponsors: activePartner
    }
  }
}
</script>

<style lang="scss" scoped>
.plogo {
    width: auto;
    display: inline-block;
    margin: 10px 10px;
    height: 4rem;
}
</style>
