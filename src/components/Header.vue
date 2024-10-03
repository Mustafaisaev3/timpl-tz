<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="language-dropdown">
      <Dropdown :items="languages" :default-item="languages[0]" @itemSelected="handleLanguageChange" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '@/components/ui/Dropdown.vue'

const languages = ref(['En', 'Ru']);

const emit = defineEmits(['languageChanged']);

const handleLanguageChange = (language: string) => {
  emit('languageChanged', language);
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    img {
      height: 24px;
    }
  }

  .language-dropdown {
    position: absolute;
    right: 20px;
  }
}
</style>
