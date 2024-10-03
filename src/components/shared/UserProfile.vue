<template>
  <div class="user-profile">
    <div class="user-profile__side user-profile__side--left">
      <img src="@/assets/images/user-left.svg" alt="Side Image Left" class="user-profile__side-image" />
    </div>
    <div class="user-profile__main">
      <img src="@/assets/images/user-main.svg" alt="Main Image" class="user-profile__main-image" />
      <div class="user-profile__main-info">
        <h2 class="user-profile__main-name">Madison</h2>
        <h2 class="user-profile__main-surname">Waiter</h2>
      </div>
    </div>
    <div class="user-profile__side user-profile__side--right">
      <img src="@/assets/images/user-right.svg" alt="Side Image Right" class="user-profile__side-image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 20px;

  &__side {
    flex: 1;
    display: flex;
    justify-content: center;

    &--left {
      justify-content: flex-end;
    }

    &--right {
      justify-content: flex-start;
    }

    &-image {
      width: 100%;
      height: 66px;
    }
  }

  &__main {
    flex: 2;
    display: flex;
    align-items: center;
    gap: 12px;

    &-image {
      width: 92px;
      height: 92px;
      border-radius: 50%;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: baseline;
    }

    &-name {
      color: #0F0A2F;
      font-size: 22px;
      font-weight: 600;
    }
    
    &-surname {
      color: #9771FD;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>