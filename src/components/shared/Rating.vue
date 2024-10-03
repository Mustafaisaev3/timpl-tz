<template>
  <div class="rating-component">
    <div class="rating-component__header">
      <div class="rating-component__line"></div>
      <h1 class="rating-component__title">{{ title }}</h1>
      <div class="rating-component__line"></div>
    </div>
    <div class="rating-component__stars">
      <img
        v-for="(star, index) in stars"
        :key="index"
        :src="star ? activeStar : inactiveStar"
        @click="setRating(index + 1)"
        class="rating-component__star"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeStar = require('@/assets/images/icons/active-star.svg');
const inactiveStar = require('@/assets/images/icons/inactive-star.svg');

interface RatingProps {
  title: string;
}

const { title } = defineProps<RatingProps>();

const stars = ref<boolean[]>([false, false, false, false, false]);

const setRating = (rating: number) => {
  stars.value = stars.value.map((_, index) => index < rating);
};
</script>

<style lang="scss" scoped>
.rating-component {
  text-align: center;
  margin-inline: 20px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0px;
  }

  &__line {
    width: 100%;
    height: 1px;
    background-color: #9771FD;
  }

  &__title {
    font-size: 15px;
    white-space: nowrap;
    margin: 0 10px;
  }

  &__stars {
    display: flex;
    justify-content: center;
    padding: 16px 0px;
    background-color: #fff;
    border-radius: 20px;
  }

  &__star {
    cursor: pointer;
    margin: 0 5px;
  }
}
</style>
  