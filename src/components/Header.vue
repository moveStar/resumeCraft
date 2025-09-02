<template>
  <header class="header">
    <nav class="nav-container">
      <router-link to="/" class="logo">简历转化器</router-link>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/templates">模板库</router-link></li>
        <li><router-link to="/tutorials">使用教程</router-link></li>
      </ul>
      <div class="actions">
        <a href="#" class="login-link">登录</a>
        <button class="register-btn">免费注册</button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: box-shadow 0.3s ease; // 平滑阴影变化
  margin-bottom: 40px; // 给内容留出空间，防止被遮挡

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  height: 60px; // 固定导航栏高度，增强一致性
  box-sizing: border-box;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
  letter-spacing: -0.5px;

  &:hover {
    color: #4c7aff;
  }
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem; // 更现代的间距方式

  a {
    color: #555;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 0.5rem 0;

    &:hover {
      color: #4c7aff;
      transform: translateY(-1px);
    }

    &.router-link-active {
      color: #4c7aff;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #4c7aff;
      }
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1.2rem; // 统一间距

  .login-link {
    color: #666;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #4c7aff;
    }
  }

  .register-btn {
    background-color: #4c7aff;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(76, 122, 255, 0.3);

    &:hover {
      background-color: #3b69ff;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(76, 122, 255, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }
}

// 响应式：中等屏幕（1024px ~ 1200px）
@media (max-width: 1200px) {
  .nav-container {
    padding: 1rem 1.5rem;
    gap: 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-links a,
  .login-link {
    font-size: 0.95rem;
  }

  .register-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

// 响应式：小尺寸 PC 屏幕（如 768px ~ 1023px）
@media (max-width: 1023px) {
  .nav-container {
    padding: 0.8rem 1rem;
    height: 56px;
    gap: 0.8rem;
  }

  .logo {
    font-size: 1.4rem;
  }

  .nav-links {
    gap: 1.2rem;
  }

  .nav-links a,
  .login-link {
    font-size: 0.9rem;
  }

  .actions {
    gap: 1rem;
  }

  .register-btn {
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
  }
}

// 可选：超大屏幕适配（>1400px）
@media (min-width: 1400px) {
  .nav-container {
    max-width: 1600px;
  }

  .nav-links {
    gap: 2.5rem;
  }

  .register-btn {
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
  }
}
</style>