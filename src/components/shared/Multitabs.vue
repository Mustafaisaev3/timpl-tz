<template>
  <div class="multi-tab">
    <h1 class="multi-tab__title">What did you like?</h1>
    <div class="multi-tab__tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="multi-tab__tab"
        :class="{ 'multi-tab__tab--active': activeTabs.includes(index) }"
        @click="toggleTab(index)"
      >
        <div class="multi-tab__tab-block">
          <img :src="tab.image" alt="Tab Image" class="multi-tab__tab-image" />
        </div>
        <div class="multi-tab__tab-text">{{ tab.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Tab {
  image: string;
  text: string;
}

const tabs: Tab[] = [
{ image: require('@/assets/images/icons/smiling-face-with-hearts.svg'), text: 'Service' },
  { image: require('@/assets/images/icons/glowing-star.svg'), text: 'Cleanliness' },
  { image: require('@/assets/images/icons/smiling-face.svg'), text: 'Atmosphere' },
  { image: require('@/assets/images/icons/hamburger.svg'), text: 'Food quality' },
];

const activeTabs = ref<number[]>([]);

const toggleTab = (index: number) => {
  if (activeTabs.value.includes(index)) {
    activeTabs.value = activeTabs.value.filter(tabIndex => tabIndex !== index);
  } else {
    activeTabs.value.push(index);
  }
};
</script>

<style lang="scss" scoped>
.multi-tab {
  text-align: center;
  margin-top: 16px;

  &__title {
    font-size: 15px;
    margin-bottom: 12px;
  }

  &__tabs {
    display: flex;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
  }

  &__tab {
    cursor: pointer;
    text-align: center;
    flex: 1;
    max-width: calc(25% - 12px);

    &-block {
      width: 74px;
      height: 74px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      margin-bottom: 10px;
      margin: 0 auto;
    }

    &-image {
      max-width: 80%;
      max-height: 80%;
    }

    &-text {
      width: 100%;
      color: #808191;
      font-size: 12px;
      align-self: center;
      margin-top: 8px
    }

    &--active {
      .multi-tab__tab-block {
        background-color: #9771FD;
      }

      .multi-tab__tab-text {
        color: #9771FD;
      }
    }
  }
}
</style>