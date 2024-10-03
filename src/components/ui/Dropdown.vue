<template>
  <div class="dropdown">
    <div class="selected-item" @click="toggleDropdown">
      {{ selectedItem }}
      <img src="@/assets/images/icons/angle-down.svg" alt="angle-down" />
    </div>
    <div v-if="isOpen" class="dropdown-menu">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="dropdown-item"
        @click="selectItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },
  defaultItem: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['itemSelected']);

const selectedItem = ref(props.defaultItem);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item: string) => {
  selectedItem.value = item;
  isOpen.value = false;
  emit('itemSelected', item);
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  cursor: pointer;

  .selected-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 5px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 1000;

    .dropdown-item {
      padding: 10px;
      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
  