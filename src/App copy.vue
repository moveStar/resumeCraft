<!--
 * @Description: 
 * @Author: zhangweijuan
 * @Date: 2025-08-27 10:19:06
 * @LastEditTime: 2025-08-27 10:53:55
-->
<template>
  <div id="app">
    <header>
      <!-- 导航栏 -->
      <nav>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">模板库</a></li>
          <li><a href="#">使用教程</a></li>
          <li><a href="#">定价</a></li>
        </ul>
        <button>登录</button>
        <button>免费注册</button>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>3 分钟创建专业简历</h1>
        <p>AI 驱动的简历优化工具，帮助您从众多求职者中脱颖而出，获得更多面试机会</p>
        <button>立即开始</button>
        <button>查看模板</button>
      </section>

      <section class="resume-creation">
        <h2>开始创建您的简历</h2>
        <p>上传现有简历或从零开始创建</p>
        <ResumeUploader />
        <ManualResumeCreator />
      </section>

      <section class="why-choose-us">
        <WhyChooseUs />
      </section>

      <section class="template-gallery">
        <TemplateGallery />
      </section>

      <section class="user-reviews">
        <UserReviews />
      </section>

      <section class="call-to-action">
        <CallToAction />
      </section>
    </main>

    <footer>
      <!-- 底部导航和版权信息 -->
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResumeUploader from './components/ResumeUploader.vue';
import ManualResumeCreator from './components/ManualResumeCreator.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import TemplateGallery from './components/TemplateGallery.vue';
import UserReviews from './components/UserReviews.vue';
import CallToAction from './components/CallToAction.vue';

export default defineComponent({
  components: {
    ResumeUploader,
    ManualResumeCreator,
    WhyChooseUs,
    TemplateGallery,
    UserReviews,
    CallToAction,
  },
});
</script>

<style scoped>
/* 添加样式 */
</style>