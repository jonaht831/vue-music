<template>
  <div class="results row">
    <div class="col">
      <Song></Song>
    </div>
  </div>
</template>

<script>
  import Song from '@/components/Song.vue'
  export default {
    name: 'results',
    data() {
      return {

      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {},
    components: {
      Song
    }
  }

</script>

<style>
  .results {
    background: grey
  }
</style>