<template>
<footer id="contact" v-bind:class="{ chromefix: isChrome }" class="footer has-text-centered whitefont">
    <h1 class="title whitefont">联系我们</h1>
    <hr>
    <div class="footer-content">
        <img id="wechatQR" src="/image/wechat-qr.png">
        <ul class="social-links">
            <li class="email" title="pr@tedxsuzhou.com">
                <a target=_blank href="mailto:pr@tedxsuzhou.com">
                    <v-icon scale=2.5 name="envelope"/>
                </a>
            </li>
            <li class=weibo title=微博>
                <a target=_blank href=http://weibo.com/tedxsuzhou>
                    <v-icon scale=2.5 name="brands/weibo"/>
                </a>
            </li>
            <li class=youku title=优酷>
                <a target=_blank href=http://i.youku.com/u/UNTI4NDU4OTgw>
                    <v-icon scale=2.5 name="play-circle"/>
                </a>
            </li>
            <li class=facebook title=facebook>
                <a target=_blank href=https://www.facebook.com/tedxsuzhou>
                    <v-icon scale=2.5 name="brands/facebook-f"/>
                </a>
            </li>
            <li class=twitter title=twitter>
                <a target=_blank href=https://twitter.com/TEDxSuzhou>
                    <v-icon scale=2.5 name="brands/twitter"/>
                </a>
            </li>
            <li class=instagram title=instagram>
                <a target=_blank href=http://instagram.com/tedxsuzhou>
                    <v-icon scale=2.5 name="brands/instagram"/>
                </a>
            </li>
            <li class=linkedin title=linkedin>
                <a target=_blank href=https://www.linkedin.com/company/5269464>
                    <v-icon scale=2.5 name="brands/linkedin"/>
                </a>
            </li>
            <li class=youtube title=youtube>
                <a target=_blank href=https://www.youtube.com/user/TEDxTalks>
                    <v-icon scale=2.5 name="brands/youtube"/>
                </a>
            </li>
            <li class=flickr title=flickr>
                <a target=_blank href=https://www.flickr.com/photos/tedxsuzhou/sets/>
                    <v-icon scale=2.5 name="brands/flickr"/>
                </a>
            </li>
        </ul>
    </div>
    <div class="site-info">
        <p>
            <a rel="nofollow" href="http://www.beian.miit.gov.cn">苏ICP备14048502号-2</a> ©2023 创学空间（苏州工业园区庭恒汇文化交流中心）
            <br>
            This independent TEDx event is operated under license from TED | TEDxSuzhou 2022 | Made with <v-icon name="heart"/> by <a href="https://simon1987.com" target="_blank">Shih</a>
        </p>
    </div>
</footer>
</template>

<script>
export default {
  data () {
    return {
      isChrome: !!window.chrome && !!window.chrome.webstore
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
    background: url(/image/men-750.jpg) no-repeat center center fixed;
    background-size: cover;
    position: relative;
}
@media (max-width: 1024px) {
    .footer{
        background-attachment: scroll;
    }
}
.footer > * {
    z-index: 1;
    position: relative;
}
.footer:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    content: "";
    position: absolute;
}
.social-links {
    padding: 0;
    list-style: none;
    li {
        margin: 0 .75rem;
        display: inline-block;
        a {
            color: rgba(255, 255, 255, .8);
            transition: all 0.1s ease-in-out;
            font-size: 3rem;
        }
    }
}
.social-links li.twitter a:hover {
    color: #2b7bb9;
}
.social-links li.skype a:hover {
    color: #00aff0;
}
.social-links li.linkedin a:hover {
    color: #0976b4;
}
.social-links li.googleplus a:hover {
    color: #dd4b39;
}
.social-links li.youtube a:hover {
    color: #b31217;
}
.social-links li.flickr a:hover {
    color: #ff0084;
}
.social-links li.facebook a:hover {
    color: #3b5998;
}
.social-links li.pinterest a:hover {
    color: #cb2027;
}
.social-links li.weibo a:hover {
    color: #e6162d;
}
.social-links li.instagram a:hover {
    color: #517fa4;
}
.social-links li.youku a:hover {
    color: #06a7e1;
}
#wechatQR {
    opacity: 0.8;
}
.site-info {
    margin-top: 2rem;
    a {
        color: inherit
    }
}
.chromefix {
    transform: translate3d(0,0,0); /* fix chrome 69 bug: https://github.com/pojome/elementor/issues/4692 */
}
</style>
