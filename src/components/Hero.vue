<template>
<section class="hero is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://tedxsz.oss-cn-shanghai.aliyuncs.com/image/logo2.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" v-bind:class="{ 'is-active': showMenu }" @click.stop.prevent="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div ref="menus" class="navbar-menu" v-bind:class="{ 'is-active': showMenu }">
          <div class="navbar-end">
            <a class="navbar-item" href="#talks">
              演讲视频
            </a>
            <a class="navbar-item" href="#join">
              参与
            </a>
            <a class="navbar-item" href="#team">
              团队
            </a>
            <a class="navbar-item" href="#what">
              关于
            </a>
            <a class="navbar-item" href="#contact">
              联系我们
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="hero-body">
    <div class="container has-text-centered landing slow">
        <h1 class="title tedxlogo">
            <span class=tedx>TED<sup class="thex">x</sup></span><span class=suzhou>Suzhou</span>
        </h1>
        <h2 class="subtitle">传播有价值的<span>思想</span></h2>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
.landing {
    animation: fadein 2s;
}
@keyframes fadein {
    from {
        transform: scale(1.1) translate(0, -3rem);
        opacity:0;
    }
    to {
        transform: scale(1) translate(0, -3rem);
        opacity:1;
    }
}
.navbar-menu {
    background-color: transparent;
}
.hero {
    background: url(https://tedxsz.oss-cn-shanghai.aliyuncs.com/image/tedxsuzhou_feel.jpg) 50% 0px / cover no-repeat fixed rgb(34, 34, 34);
}
@media (max-width: 1024px) {
    .hero{
        background-attachment: scroll;
    }
}
.hero:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
}
.hero-head, .hero-body {
    z-index: 1;
}
.hero-head {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.10);
    // padding: 10px 0;
    transition: all 0.2s ease-in-out;
}
.hero-body .container {
    transform: translate(0, -3rem);
}

.title {
    font-size: 3.5rem;
    margin-bottom: .15rem !important;
}

.subtitle {
    color: #ffffff;
    font-size: 1.6rem;
    margin-top: 0 !important;
}
@media (min-width: 768px) {
    .title {
        font-size: 7rem;
        margin-bottom: .3rem !important;
    }
    .subtitle {
        font-size: 3.5rem;
    }
}
.tedxlogo .tedx {
    color: #e62b1e;
    font-weight: 900;
    letter-spacing: -0.4rem;
}
.tedxlogo .thex {
    padding-left: 0.3rem;
    font-weight: 600;
}
.tedxlogo .suzhou {
    color: white;
    letter-spacing: -0.2rem;
    font-weight: normal;
}
</style>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  },
  mounted () {
    this.$refs.menus.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }

}
</script>
