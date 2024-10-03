<template>
  <div v-if="isOpen" class="modal" @click.self="closeModal">
    <div class="modal__content">
      <button class="modal__close-button" @click="closeModal">
        <img src="@/assets/images/icons/close.svg" alt="Close" />
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:isOpen', value: boolean): void;
}>();

const isOpen = ref(props.isOpen);

watch(() => props.isOpen, (newVal) => {
  isOpen.value = newVal;
});

const closeModal = () => {
  isOpen.value = false;
  emit('update:isOpen', false);
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(48, 55, 71, 0.377);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background: white;
    border-radius: 24px;
    padding: 12px;
    position: relative;
  }

  &__close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>