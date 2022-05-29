<template>
  <div class="form-container">
    <form v-on:submit="handleSubmit">
      <input
        @input="handleChange"
        placeholder="Email"
        :value="email"
        name="email"
        type="email"
      />
      <input
        @input="handleChange"
        placeholder="Password"
        :value="password"
        name="password"
        type="password"
      />
      <button :disabled="!email || !password">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  props: {
    email: String,
    password: String
  },
  methods: {
    handleChange() {},
    handleSubmit() {}
  }
}
</script>
