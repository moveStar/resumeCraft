<!-- WhyChooseUs.vue -->
<template>
  <section class="why-choose-us">
    <div class="container">
      <h2>为什么选择我们的FressResumeAI</h2>
      <p>专为求职者设计的智能工具，帮助您轻松创建专业简历</p>

      <div class="features">
        <!-- AI 智能优化 -->
        <div class="feature-item">
          <img src="../assets/icons/ai-optimize.png" alt="AI 智能优化图标" />
          <h3>AI 智能优化</h3>
          <p>根据目标职位自动调整简历内容，突出相关技能和经验</p>
        </div>

        <!-- 专业模板 -->
        <div class="feature-item">
          <img src="../assets/icons/professional-template.png" alt="专业模板图标" />
          <h3>专业模板</h3>
          <p>20+ 精心设计的简历模板，适应不同行业和职位需求</p>
        </div>

        <!-- 实时分析 -->
        <div class="feature-item">
          <img src="../assets/icons/real-time-analysis.png" alt="实时分析图标" />
          <h3>实时分析</h3>
          <p>智能分析简历质量，提供改进建议和关键词优化</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseUs',
};
</script>

<style scoped>
.why-choose-us {
  width: 100%;
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  text-align: center;
}

.container {
  margin: 0 auto;
}

.why-choose-us h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.why-choose-us p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.features {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.feature-item {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin: 0 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  flex: 1;
  min-width: 300px;
  text-align: left;
}

.feature-item img {
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.feature-item p {
  font-size: 0.95rem;
  color: #777;
  margin: 0;
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .features {
    flex-direction: column;
  }

  .feature-item {
    margin-bottom: 2rem;
  }

  .feature-item:last-child {
    margin-bottom: 0;
  }
}
</style>