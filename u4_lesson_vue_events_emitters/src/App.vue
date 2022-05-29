<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="form-container">
      <form>
        <input placeholder="Email" :value="email" name="email" type="email" />
        <input
          placeholder="Password"
          :value="password"
          name="password"
          type="password"
        />
        <button>Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
import './styles/app.css'
export default {
  name: 'App',
  components: {},
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    handleFormChange() {},
    handleSubmit() {}
  }
}
</script>
