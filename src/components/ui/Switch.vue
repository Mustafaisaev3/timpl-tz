<!-- <template>
    <div
      class="switch"
      :class="{ 'switch--active': isActive }"
      @click="toggle"
    >
      <div class="switch__thumb">
        <img src='@/assets/images/icons/switch-round.svg' alt="thumb" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const isActive = ref(false);
  
  const toggle = () => {
    isActive.value = !isActive.value;
  };
  </script>
  
  <style lang="scss" scoped>
  .switch {
    position: relative;
    width: 54px;
    height: 30px;
    background-color: rgba(142, 108, 234, 0.4);
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
  
    &--active {
      background-color: #96ff43;
    }
  
    &__thumb {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      transition: left 0.3s;
  
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  
    &--active .switch__thumb {
      left: 27px;
    }
  }
  </style> -->

<template>
  <div
    class="switch"
    :class="{ 'switch--active': isActive }"
    @click="toggle"
  >
    <div class="switch__thumb"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  width: 54px;
  height: 30px;
  background-color: rgba(142, 108, 234, 0.4);
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &--active {
    background-color: #96ff43;
  }

  &__thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transition: left 0.3s;
  }

  &--active .switch__thumb {
    left: 27px;
  }
}
</style>