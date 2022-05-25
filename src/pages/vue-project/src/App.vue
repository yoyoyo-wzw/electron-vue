<script setup>
import HelloWorld from './components/HelloWorld.vue'

const { ipcRenderer } = window.electronApi

 async function test() {
  const res = await ipcRenderer.invoke('postMessage', '这里是vue，收到消息请回复')
  console.log(res)
}
test()
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
