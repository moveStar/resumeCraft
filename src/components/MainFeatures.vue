<template>
  <section class="main-features">
    <div class="content-wrapper">
      <h2>3 分钟创建专业简历</h2>
      <p>Ai 驱动的简历优化工具，帮助您从众多求职者中脱颖而出，获得更多面试机会</p>
      <div class="buttons">
        <router-link to="/editor" class="start-btn">立即开始</router-link>
        <router-link to="/templates" class="view-templates-btn">查看模板</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'MainFeatures',
  components: {
    RouterLink
  }
});
</script>

<style lang="scss" scoped>
.main-features {
  margin: 5rem 0 2rem 0;
  position: relative;
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  height: 40vh;
  background: url('../assets/main_bg.png') no-repeat center center / cover;
  border-radius: 8px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden; // 防止伪元素溢出圆角
}

.content-wrapper {
  width: 45%;
  height: 100%;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6));
  border-radius: 8px 0 0 8px;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;

    .start-btn,
    .view-templates-btn {
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      font-weight: 500;
    }

    .start-btn {
      background-color: #4c7aff;
      color: #fff;
      text-decoration: none;
      &:hover {
        background-color: #3b69ff;
        transform: translateY(-1px);
      }
    }

    .view-templates-btn {
      background-color: transparent;
      color: #4c7aff;
      border: 2px solid #4c7aff;
      text-decoration: none;
      &:hover {
        background-color: #eef2ff;
        transform: translateY(-1px);
      }
    }
  }
}

// 响应式：中等屏幕 (1200px ~ 1440px)
@media (max-width: 1440px) and (min-width: 1200px) {
  .content-wrapper {
    padding: 1.5rem;
  }

  .content-wrapper h2 {
    font-size: 2.2rem;
  }

  .content-wrapper p {
    font-size: 1.1rem;
  }

  .content-wrapper .buttons {
    gap: 0.8rem;
  }

  .content-wrapper .start-btn,
  .content-wrapper .view-templates-btn {
    padding: 0.65rem 1.8rem;
    font-size: 0.95rem;
  }
}

// 响应式：小尺寸 PC 屏幕 (1024px ~ 1199px)
@media (max-width: 1199px) and (min-width: 1024px) {
  .main-features {
    min-height: 280px;
    height: 38vh;
  }

  .content-wrapper {
    padding: 1.2rem;
    width: 55%;
  }

  .content-wrapper h2 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .content-wrapper p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  .content-wrapper .buttons {
    gap: 0.7rem;
  }

  .content-wrapper .start-btn,
  .content-wrapper .view-templates-btn {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
}

// 响应式：大屏幕 (>= 1600px)
@media (min-width: 1600px) {
  .content-wrapper h2 {
    font-size: 2.8rem;
  }

  .content-wrapper p {
    font-size: 1.3rem;
  }

  .content-wrapper .start-btn,
  .content-wrapper .view-templates-btn {
    padding: 0.85rem 2.2rem;
    font-size: 1.1rem;
  }
}

// 响应式：超大屏幕 (>= 1920px)
@media (min-width: 1920px) {
  .content-wrapper h2 {
    font-size: 3.2rem;
  }

  .content-wrapper p {
    font-size: 1.4rem;
  }

  .content-wrapper .start-btn,
  .content-wrapper .view-templates-btn {
    padding: 0.95rem 2.5rem;
    font-size: 1.2rem;
  }
}

// 响应式：超大屏幕 (>= 1920px)
@media (min-width: 1920px) {
  .content-wrapper h2 {
    font-size: 3.2rem;
  }

  .content-wrapper p {
    font-size: 1.4rem;
  }

  .content-wrapper .start-btn,
  .content-wrapper .view-templates-btn {
    padding: 0.95rem 2.5rem;
    font-size: 1.2rem;
  }
}
</style>