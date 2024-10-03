<template>
  <div class="home">
    <router-link to="/phone1">Phone1</router-link>
    <router-link to="/phone2">Phone2</router-link>
    <router-link to="/phone3">Phone3</router-link>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
</style>
