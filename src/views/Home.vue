<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Welcome to VueMusic</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>Searching for: {{query}}</p>
        <form @submit.prevent="search">
          <input type="text" placeholder="Search" v-model="query">
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results></Results>
      </div>
    </div>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'
  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    },
    components: {
      Results,
    }
  }

</script>

<style>
  .home {
    background-color: skyblue;
  }
</style>