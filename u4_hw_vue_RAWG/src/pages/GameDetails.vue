<template>
  <div class="game-content">
    <section class="image-container">
      <div></div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3></h3>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null
    }),
    mounted() {},
    methods: {
      async getGameDetails() {
        // Get game id from router here
      }
    }
  }
</script>
