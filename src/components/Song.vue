<template>
  <div class="row">
    <div class="Song col-3" v-for="song in songs">
      <div class="card" style="width: 24rem">
        <img class="card-img-top" :src="song.img" alt="card image cap">
        <div class="card-body">
          <h4>{{song.artistName}}</h4>
          <h4>{{song.trackName}}</h4>
          <audio controls ref="audio" id="audio">
            <source :src="song.previewUrl" type="mpeg/audio">
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'song',
    // props: ['musicData'],
    data() {
      return {

      }
    },
    // mounted(){
    //   this.$store.dispatch("getResults")
    // },
    computed: {
      songs() {
        return this.$store.state.searchResults;
      }
    },
    methods: {}
  }

</script>

<style>
  h4 {
    color: black
  }

  .card {
    padding-bottom: -2px;
  }
</style>