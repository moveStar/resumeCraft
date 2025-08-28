<!-- CallToAction.vue -->
<template>
  <section class="call-to-action">
    <div class="container">
      <h2>立即创建您的专业简历</h2>
      <p class="subtitle">
        免费试用，无需信用卡。3分钟内即可获得一份优化后的专业简历
      </p>
      <button @click="startFreeTrial">开始免费试用</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction',
  methods: {
    startFreeTrial() {
      console.log('开始免费试用');
      // 跳转到注册或创建简历页面的逻辑
    },
  },
};
</script>

<style scoped>
.call-to-action {
  background-color: #4c7aff;
  padding: 4rem 1rem;
  text-align: center;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.call-to-action h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.call-to-action .subtitle {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.call-to-action button {
  padding: 0.7rem 2rem;
  background-color: #fff;
  color: #4c7aff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
}

.call-to-action button:hover {
  background-color: #f0f4ff;
}
</style>