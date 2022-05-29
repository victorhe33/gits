<template>
  <div className="container-grid"></div>
</template>

<script>
  export default {
    name: 'ViewGames',
    data: () => ({
      games: []
    }),
    mounted() {},
    methods: {
      async getGamesByGenre() {
        // Get Genre Id here
      }
    }
  }
</script>
