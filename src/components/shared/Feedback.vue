<template>
  <div class="feedback-form">
    <h1 class="feedback-form__title">Share your feedback</h1>
    <textarea class="feedback-form__textarea" placeholder="Describe your own"></textarea>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.feedback-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  margin-top: 16px;

  &__title {
    font-size: 15px;
    margin-bottom: 20px;
  }

  &__textarea {
    width: 100%;
    max-width: 600px;
    height: 150px;
    padding: 20px;
    background: #fff;
    color: #808191;
    font-size: 17px;
    font-family: Arial, sans-serif;
    border: none;
    border-radius: 20px;
    resize: vertical;

    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>