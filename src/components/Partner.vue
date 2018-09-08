<template>
<div class="section clearfix object-non-visible" data-animation-effect=fadeIn>
    <div class id=sponsor>
        <h1 class="title text-center">合作伙伴</h1>
        <hr class=colored>
        <div class=text-center>
            <transition-group name="list" tag="div">
                <a v-for="sponsor in sponsors" :href="sponsor.link" target=_blank v-bind:key="sponsor"><img class="slogo h70" :src="sponsor.logoUrl"></a>
            </transition-group>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
