<template>
    <section class="section">
        <div class=container>
            <h1 class="title">演讲视频</h1>
            <hr>
            <ul class="nav-pills">
                <li v-bind:class="{ active: selectedEvent === event.eventId }" v-for="event in events" v-bind:key="event.id" v-on:click.stop.prevent="selectEvent(event)">
                    <a href="#">{{event.displayName}}</a>
                </li>
            </ul>
            <div>
                <div class="columns is-multiline">
                    <div
                    v-for="talk in displayingTalks"
                    v-bind:key="talk.performerName"
                    class="column is-one-quarter talk"
                    v-bind:class="{ 'talk-leave': talkLeaving, 'talk-enter': !talkLeaving }"
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
                                <a href="#" class="card-footer-item">{{talk.performerName}}</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import events from '../db/event.json'
import talks from '../db/talk.json'
export default {
  data () {
    return {
      events,
      selectedEvent: events[0].eventId,
      talkLeaving: false
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
    selectEvent: function (event) {
      if (this.selectedEvent !== event.eventId) {
        // for animation, first show leave animation
        this.talkLeaving = true
        setTimeout(() => {
          this.talkLeaving = false
          this.selectedEvent = event.eventId
        }, 280)
      }
    }
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
.talk .card-content {
    padding: 0;
    position: relative;
    overflow: hidden;
}
.talk .card-content .content{
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: scale(2);
    transition: all linear 0.2s;
}
.talk:hover .card-content .content{
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
    transform: scale(1);
}
.talk .card-content .content span {
    color: white;
    position: absolute;
    padding: .75rem;
    bottom: 0;
    font-size: .8rem;
    text-align: center;
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

</style>
