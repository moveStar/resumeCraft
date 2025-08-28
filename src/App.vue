<template>
  <div class="app-content">
    <Header />
    <MainFeatures />
    <ResumeUploader />
    <WhyChooseUs />
    <ResumeTemplates />
    <UserReviews />
    <CallToAction />
  </div>
  
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import MainFeatures from './components/MainFeatures.vue';
import ResumeUploader from './components/ResumeUploader.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import ResumeTemplates from './components/ResumeTemplates.vue';
import UserReviews from './components/UserReviews.vue';
import CallToAction from './components/CallToAction.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Header,
    MainFeatures,
    ResumeUploader,
    WhyChooseUs,
    ResumeTemplates,
    UserReviews,
    CallToAction,
    Footer
  }
});
</script>

<style>
/* 全局样式 */
.app-content {
  font-family: Arial, sans-serif;
  background-color: #F9FAFB;
  margin: 0;
  padding: 0 2rem;
}
</style>