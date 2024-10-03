<template>
  <div class="home">
    <Header />
    <Marquee :texts="marqueeText" />
    <UserProfile />
    <Tips />
    <Rating :title="'Rate your experience'" />
    <Togle />
    <Feedback />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Marquee from '@/components/shared/Marquee.vue';
import UserProfile from '@/components/shared/UserProfile.vue';
import Tips from '@/components/shared/Tips.vue';
import Rating from '@/components/shared/Rating.vue';
import Togle from '@/components/shared/Togle.vue';
import Feedback from '@/components/shared/Feedback.vue';
import Footer from '@/components/layout/Footer.vue';

const marqueeText = ['Part of the profit goes to sWen', 'By leaving a tip, you take care of nature', 'Part of the profit goes to sWen', 'By leaving a tip, you take care of nature']
</script>
  