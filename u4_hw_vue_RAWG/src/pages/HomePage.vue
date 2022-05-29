<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <h2>Search Results</h2>
      <section class="search-results container-grid"></section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid"></section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted() {},
    methods: {
      async getGenres() {},
      async getSearchResults(e) {
        e.preventDefault()
      },
      handleChange(event) {
        console.log(event)
      },
      selectGame(gameId) {
        console.log(gameId)
      }
    }
  }
</script>
