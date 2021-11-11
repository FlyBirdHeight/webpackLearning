<template>
  <div id="root">
      333
      <h1>{{titleMessage}}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            titleMessage: "Hello Vue By Webpack HMR"
        }
    },
}
</script>

<style>
h1 {
    color: orange;
}
</style>