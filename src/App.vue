<!--
 * @Description: 
 * @Author: zhangweijuan
 * @Date: 2025-08-27 10:19:06
 * @LastEditTime: 2025-09-02 09:57:14
-->
<template>
  <div class="app-content">
    <Header />
    <router-view />
  </div>
  
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Header,
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