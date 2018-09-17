<template>
    <section class="section">
        <div class=container>
            <h1 class="title">演讲视频</h1>
            <hr>
            <p class="">汇集各行精英，感受无限创想，激荡头脑风暴，畅享视听盛宴</p>
            <div>
                <div id="event-select" class="filters">
                    <a
                        class="button"
                        v-for="event in events"
                        v-bind:key="event.id"
                        v-bind:class="{ active: event.isActive }"
                        v-on:click.stop.prevent="selectEvent(event)"
                    >{{event.displayName}}</a>
                </div>
            </div>
            <div>
                <div class="columns is-multiline">
                    <div v-for="talk in displayingTalks" v-bind:key="talk.performerName" class="column is-one-quarter talk">
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
      selectedEvent: events[0].eventId
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
      this.selectedEvent = event.eventId
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
