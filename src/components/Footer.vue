<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 简历转化器介绍 -->
        <div class="footer-section">
          <h3>简历转化器</h3>
          <p>
            帮助求职者创建专业简历，获得更多面试机会的智能工具
          </p>
        </div>

        <!-- 产品相关链接 -->
        <div class="footer-section">
          <h3>产品</h3>
          <ul>
            <li><a href="#">功能</a></li>
            <li><a href="#">模板</a></li>
            <li><a href="#">定价</a></li>
            <li><a href="#">常见问题</a></li>
          </ul>
        </div>

        <!-- 公司相关链接 -->
        <div class="footer-section">
          <h3>公司</h3>
          <ul>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">博客</a></li>
            <li><a href="#">职业</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>

        <!-- 关注我们 -->
        <div class="footer-section">
          <h3>关注我们</h3>
          <div class="social-media-icons">
            <a href="#" target="_blank"><img src="../assets/images/wechat.png" alt="WeChat"/></a>
            <a href="#" target="_blank"><img src="../assets/images/weibo.png" alt="Weibo"/></a>
            <a href="#" target="_blank"><img src="../assets/images/zhihu.png" alt="Zhihu"/></a>
            <a href="#" target="_blank"><img src="../assets/images/github.png" alt="GitHub"/></a>
          </div>
        </div>
      </div>

      <!-- 版权和法律条款 -->
      <div class="footer-bottom">
        <p>© 2023 简历转化器. 保留所有权利.</p>
        <ul class="legal-links">
          <li><a href="#">隐私政策</a></li>
          <li><a href="#">服务条款</a></li>
          <li><a href="#">Cookie 政策</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #4c7aff;
}

.social-media-icons {
  display: flex;
}

.social-media-icons a {
  margin-right: 1rem;
}

.social-media-icons img {
  width: 30px;
  height: 30px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p,
.footer-bottom .legal-links {
  font-size: 0.9rem;
}

.legal-links {
  list-style: none;
  padding: 0;
  display: flex;
}

.legal-links li {
  margin-left: 1rem;
}
</style>