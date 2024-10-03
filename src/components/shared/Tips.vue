<template>
  <div class="tips-component">
    <h1 class="tips-component__title">Enter amount of tips</h1>
    <div :class="['tips-component__amount', { 'tips-component__amount--transparent': amount === 0 }]">
      {{ amount }}€
    </div>
    <div class="tips-component__tabs">
      <div
        v-for="tab in tabs"
        :key="tab"
        :class="['tips-component__tab', { 'tips-component__tab--active': tab === selectedTab }]"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs = [2, 5, 100];
const selectedTab = ref<number | null>(null);
const amount = ref(0);

const selectTab = (tab: number) => {
  selectedTab.value = tab;
  amount.value = tab;
};
</script>

<style lang="scss" scoped>
.tips-component {
  text-align: center;
  margin-inline: 20px;
  margin-top: 20px;
  margin-bottom: 12px;

  &__title {
    font-size: 12px;
    margin-bottom: 6px;
  }

  &__amount {
    font-size: 34px;
    color: #0f0a2f;
    font-weight: bold;
    margin-bottom: 24px;

    &--transparent {
      opacity: 0.1;
    }
  }

  &__tabs {
    display: flex;
    justify-content: space-between;
    gap: 4px;
  }

  &__tab {
    flex: 1;
    border-radius: 12px;
    background-color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    text-align: center;

    &--active {
      background-color: #9771fd;
      color: #fff;
    }
  }
}
</style>
  
Мне нужно сделать компонент на vue 3 typescript setup sass бэм. В котором сперва идет заголовок по центру  а по бокам от текста полосы по центру (цвет полос - #9771FD). 
На второй строке должны быть звезды (5 звезд). У меня есть две картинки с активной звездой и не активной. Изначально все 5 должны быть неактивными. Но при клике например на 3 звезду, первые 3 должны быть активными (рейтинг звездами)
