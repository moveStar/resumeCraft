<template>
  <div class="home">
    <div class="container">
      <MainFeatures />
      <ResumeUploader />
      <WhyChooseUs />
      <ResumeTemplates />
      <UserReviews />
      <CallToAction />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFeatures from '../components/MainFeatures.vue';
import ResumeUploader from '../components/ResumeUploader.vue';
import WhyChooseUs from '../components/WhyChooseUs.vue';
import ResumeTemplates from '../components/ResumeTemplates.vue';
import UserReviews from '../components/UserReviews.vue';
import CallToAction from '../components/CallToAction.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MainFeatures,
    ResumeUploader,
    WhyChooseUs,
    ResumeTemplates,
    UserReviews,
    CallToAction
  }
});
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.container {
  max-width: 1600px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>