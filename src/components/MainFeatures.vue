<template>
  <section class="main-features">
    <div class="content-wrapper">
      <h2>3 分钟创建专业简历</h2>
      <p>Ai 驱动的简历优化工具，帮助您从众多求职者中脱颖而出，获得更多面试机会</p>
      <div class="buttons">
        <button class="start-btn">立即开始</button>
        <button class="view-templates-btn">查看模板</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'MainFeatures'
};
</script>

<style lang="scss" scoped>
.main-features {
  margin: 2rem 0;
  position: relative;
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  height: 40vh;
  background: url('../assets/main_bg.png') no-repeat center center / cover;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;

  // 防止图片抖动或加载闪烁
  background-size: cover;
  background-position: center;
}

.content-wrapper {
  width: 50%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center; // 改为居中更稳妥，space-between 在小屏可能拉太开
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
  border-radius: 8px 0 0 8px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);

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
      &:hover {
        background-color: #3b69ff;
        transform: translateY(-1px);
      }
    }

    .view-templates-btn {
      background-color: transparent;
      color: #4c7aff;
      border: 2px solid #4c7aff;
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
    width: 55%; /* 稍微增加宽度，避免文字换行 */
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

// 响应式：超大屏幕 (>= 1920px)
@media (min-width: 1920px) {
  .content-wrapper h2 {
    font-size: 3rem;
  }

  .content-wrapper p {
    font-size: 1.3rem;
  }

  .content-wrapper .start-btn,
  .content-wrapper .view-templates-btn {
    font-size: 1.1rem;
    padding: 0.8rem 2.2rem;
  }
}

// 可选：如果页面有最大宽度容器，可限制 content-wrapper 最大宽度
// .content-wrapper {
//   max-width: 600px; /* 防止文字行过长影响阅读 */
// }
</style>