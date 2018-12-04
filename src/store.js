import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let itunesApi = Axios.create({
  baseURL: 'https://itunes.apple.com',
  timeout: 5000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: []
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      itunesApi.get("search?&term=" + query)
        .then(res => {

          let data = res.data.results.map(s => {
            return { ...s, img: s.artworkUrl100.replace(/100x100/g, "250x250") }
          })
          commit('setResults', data)
        })
    },
  }
})
