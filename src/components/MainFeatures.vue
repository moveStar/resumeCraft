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
  width: 50%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
  border-radius: 8px 0 0 8px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
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

  // === 关键修改：右侧模糊延伸效果 ===
  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   right: -100px; // 向右延伸
  //   width: 100px;
  //   height: 100%;
  //   background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  //   box-shadow: 
  //     0 0 30px 10px rgba(255, 255, 255, 0.4),
  //     0 0 60px 20px rgba(255, 255, 255, 0.2),
  //     0 0 100px 40px rgba(255, 255, 255, 0.1);
  //   pointer-events: none;
  //   z-index: -1;
  //   // 可选：模糊增强（需支持 backdrop-filter）
  //   // backdrop-filter: blur(20px);
  //   // -webkit-backdrop-filter: blur(20px);
  // }
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
</style>