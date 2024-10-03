<template>
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: 'Manrope';
  src: url('@/assets/fonts/Manrope-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F7F9FC;
}

</style>
