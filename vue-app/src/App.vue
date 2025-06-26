<script setup>

const auth = useAuthStore()
const token = localStorage.getItem('token')
if (token) {
  auth.token = token
}

</script>

<template>
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
