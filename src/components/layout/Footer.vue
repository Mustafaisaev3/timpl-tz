<template>
  <footer class="footer">
    <div class="footer__info">
      <span class="footer__info-total">To pay 100€</span>
      <span class="footer__info-feed">Service fees 1.2€</span>
    </div>
    <div class="footer__buttons">
      <Button
        text="Pay with"
        variant="primary"
        :icon="apple_pay"
        @click="openModal"
      />
      <Button
        text="Pay with debit card"
        variant="secondary"
        @click="openModal"
      />
    </div>
    <p class="footer__terms">
      By clicking the button, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>, and <span>authorize payment</span> and <span>data processing</span>.
    </p>
    <Modal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event">
      <ModalView />
    </Modal>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/ui/Modal.vue';
import Button from '@/components/ui/Button.vue';
import ModalView from '@/components/shared/ModalView.vue';

const apple_pay = require('@/assets/images/icons/apple-pay.svg')

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 49px;

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-total {
      font-size: 15px;
      color: #000;
      font-weight: 600;
    }

    &-feed {
      font-size: 14px;
      color: #808191;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 24px;
  }

  &__terms {
    font-size: 11px;
    color: #808191;
    text-align: center;
    padding-top: 12px;

    & span {
      color: #9771FD;
    }
  }
}
</style>