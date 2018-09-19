<template>
<section class="hero is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="http://static.tedxsuzhou.com/images/logo2.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active" href=#talkv>
              首页
            </a>
            <a class="navbar-item" href=#talkv>
              演讲视频
            </a>
            <a class="navbar-item" href=#participate>
              参与
            </a>
            <a class="navbar-item" href=#team>
              团队
            </a>
            <a class="navbar-item" href=#contact>
              联系方式
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
        <h2 class="subtitle">传播有价值的<span><a id="org-vid" title="主题视频" href="http://static.tedxsuzhou.com/orginfo/TEDxSuzhou2017.mp4">思想<i class="fa fa-play-circle-o"></i></a></span></h2>
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
.hero {
    background: url(http://static.tedxsuzhou.com/images/tedxsuzhou_feel.jpg) 50% 0px / cover no-repeat fixed rgb(34, 34, 34);
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
    padding: 10px 0;
    transition: all 0.2s ease-in-out;
}
.hero-body .container {
    transform: translate(0, -3rem);
}
.title {
    font-size: 7rem;
    margin-bottom: .3rem !important;
}
.subtitle {
    color: #ffffff;
    font-size: 3.5rem;
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
