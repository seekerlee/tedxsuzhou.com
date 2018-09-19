<template>
    <section class="section">
        <div class=container>
            <h1 class="title">演讲视频</h1>
            <hr>
            <ul class="nav-pills">
                <li v-bind:class="{ active: pendingSelectedEvent === event.eventId }" v-for="event in events" v-bind:key="event.id" v-on:click.stop.prevent="selectEvent(event)">
                    <a href="#">{{event.displayName}}</a>
                </li>
            </ul>
            <div>
                <div class="columns is-multiline">
                    <div
                    v-for="talk in displayingTalks"
                    v-bind:key="talk.performerName"
                    class="talk column is-one-quarter"
                    v-bind:class="{ 'talk-leave': talkLeaving, 'talk-enter': !talkLeaving }"
                    v-on:click.stop.prevent="openVodeo(talk)"
                    >
                        <div class="card">
                            <div class="card-content">
                                <figure class="image is-3by2">
                                    <img :src="talk.coverImg" alt="">
                                </figure>
                                <div class="content">
                                    <span>{{talk.sessionDesc}}</span>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a :href="talk.video.url" class="talklink card-footer-item">{{talk.performerName}}</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal is-active video-modal" v-if="modal.isActive" >
            <div class="modal-background"></div>
            <div class="modal-content">
                <iframe :src="modal.iframeUrl" ref="videoFrame" frameborder="0" allowfullscreen="">
                </iframe>
            </div>
            <button class="modal-close is-large" v-on:click.stop.prevent="closeVodeo()" aria-label="close"></button>
        </div>
    </section>
</template>

<script>
import events from '../db/event.json'
import talks from '../db/talk.json'
import * as NProgress from 'nprogress'
export default {
  data () {
    return {
      events,
      selectedEvent: events[0].eventId,
      pendingSelectedEvent: events[0].eventId,
      talkLeaving: false,
      modal: {
        isActive: false,
        iframeUrl: null
      }
    }
  },
  computed: {
    displayingTalks: function () {
      return talks.filter(talk => {
        return talk.eventId === this.selectedEvent
      })
    }
  },
  methods: {
    selectEvent (event) {
      if (this.selectedEvent !== event.eventId) {
        // for animation, first show leave animation
        this.talkLeaving = true
        this.pendingSelectedEvent = event.eventId
        setTimeout(() => {
          this.talkLeaving = false
          this.selectedEvent = event.eventId
        }, 280)
      }
    },
    openVodeo (talk) {
      this.modal.isActive = true
      this.modal.iframeUrl = talk.video.url

      this.$nextTick(function () {
        NProgress.start()
        this.$refs.videoFrame.onload = () => {
          NProgress.done()
        }
      })
    },
    closeVodeo () {
      NProgress.done()
      this.modal.isActive = false
    }
  },
  mounted: function () {
    NProgress.configure({ showSpinner: false })
  }
}
</script>

<style lang="scss" scoped>
@keyframes enter {
    from {
        transform: perspective(100rem) rotateY(90deg);
    }
    to {
        transform: perspective(100rem) rotateY(0);
    }
}
@keyframes leave {
    from {
        transform: perspective(100rem) rotateY(0);
    }
    to {
        transform: perspective(100rem) rotateY(-90deg);
    }
}
.talk-enter {
    animation: enter .3s linear;
}
.talk-leave {
    animation: leave .3s linear;
}
.talk {
    cursor: pointer;
    .card-content {
        padding: 0;
        position: relative;
        overflow: hidden;
        .content{
            opacity: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0;
            transform: scale(2);
            transition: all linear 0.2s;
            span {
                color: white;
                position: absolute;
                padding: .75rem;
                bottom: 0;
                font-size: .8rem;
                text-align: center;
            }
        }
    }
    .talklink {
        color: inherit;
    }
}

.talk:hover {
    .talklink {
        color: #e62b1f;
    }
     .card-content .content{
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.7);
        transform: scale(1);
    }
}

.nav-pills {
    text-align: center;
    margin: 1.5rem auto;
}
.nav-pills > li {
    margin: .1rem .1rem;
    display: inline-block;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus,
.nav-pills > li > a:hover {
    background-color: #e62b1f;
    border-color: #e62b1f;
    color: #ffffff;
}
.nav-pills > li > a {
    border-radius: 0;
    padding: .4rem 1rem;
    border: 1px solid #cacaca;
    color: #666666;
    font-size: 1.2rem;
    font-weight: 300;
    display: block;
}
.video-modal .modal-content{
    position: relative;
    width: 80%;
    height: 80%;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
}
</style>
