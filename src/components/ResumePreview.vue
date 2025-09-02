<template>
  <div class="resume-preview-container">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 左侧简历预览 -->
      <div class="resume-display">
        <!-- <div class="preview-tabs">
          <button class="active">优化版本</button>
          <button>原始版本</button>
        </div> -->

        <div class="resume-paper">
          <!-- 个人信息 -->
          <div class="personal-info">
            <h1>{{ resumeData.name }}</h1>
            <div class="contact-details">
              <span>{{ resumeData.phone }}</span>
              <span>{{ resumeData.email }}</span>
              <span>{{ resumeData.location }}</span>
            </div>
          </div>

          <!-- 个人简介 -->
          <div class="section">
            <h2>个人简介</h2>
            <p>{{ resumeData.summary }}</p>
          </div>

          <!-- 工作经历 -->
          <div class="section">
            <h2>工作经历</h2>
            <div v-for="(exp, index) in resumeData.workExperience" :key="index" class="experience-item">
              <div class="exp-header">
                <h3>{{ exp.position }} | {{ exp.company }}</h3>
                <span>{{ exp.duration }}</span>
              </div>
              <ul>
                <li v-for="(desc, i) in exp.descriptions" :key="i">{{ desc }}</li>
              </ul>
            </div>
          </div>

          <!-- 教育背景 -->
          <div class="section">
            <h2>教育背景</h2>
            <div v-for="(edu, index) in resumeData.education" :key="index" class="education-item">
              <div class="edu-header">
                <h3>{{ edu.degree }} | {{ edu.school }}</h3>
                <span>{{ edu.duration }}</span>
              </div>
              <p>{{ edu.description }}</p>
            </div>
          </div>

          <!-- 技能 -->
          <div class="section" v-if="resumeData.skills && resumeData.skills.length > 0">
            <h2>技能</h2>
            <div class="skills-container">
              <span v-for="(skill, index) in resumeData.skills" :key="index" class="skill-tag">{{ skill }}</span>
            </div>
          </div>

          <div class="watermark">
            <span>优化版本已用黄色高亮标注</span>
          </div>
          <div class="version-info">
            <span>最后更新: {{ resumeData.lastUpdated }}</span>
          </div>
        </div>
      </div>

      <!-- 右侧控制面板 -->
      <div class="control-panel">
        <div class="action-buttons">
          <button class="primary-btn">导出PDF</button>
          <button class="secondary-btn">分享</button>
        </div>

        <div class="export-settings">
          <h3>导出设置</h3>
          <div class="setting-item">
            <label>导出格式</label>
            <select>
              <option>PDF (.pdf)</option>
            </select>
          </div>

          <div class="setting-item">
            <label>文件名</label>
            <input type="text" :value="fileName" readonly />
          </div>

          <div class="setting-item">
            <label>页边距</label>
            <input type="range" min="0" max="50" value="15" />
            <div class="range-values">
              <span>窄</span>
              <span>适中</span>
              <span>宽</span>
            </div>
          </div>

          <div class="setting-item">
            <label>字体大小</label>
            <div class="font-size-buttons">
              <button>小</button>
              <button class="active">中</button>
              <button>大</button>
            </div>
          </div>

          <button class="export-btn">立即导出</button>
        </div>

        <div class="share-section">
          <h3>分享简历</h3>
          <div class="setting-item">
            <label>有效期</label>
            <select>
              <option>24小时</option>
              <option>7天</option>
              <option>30天</option>
            </select>
          </div>

          <div class="setting-item">
            <label>访问密码 (可选)</label>
            <input type="password" placeholder="设置4位数字密码" />
          </div>

          <button class="share-btn">生成分享链接</button>

          <div class="share-link" v-if="shareUrl">
            <a :href="shareUrl" target="_blank">{{ shareUrl }}</a>
            <button class="copy-btn">复制</button>
          </div>
        </div>

        <div class="optimization-section">
          <h3>优化建议</h3>
          <div class="suggestion-item">
            <div class="checkbox checked"></div>
            <span>已添加5个量化成果，提升可信度</span>
          </div>
          <div class="suggestion-item">
            <div class="checkbox checked"></div>
            <span>已优化3处专业术语，更符合行业标准</span>
          </div>
          <div class="suggestion-item">
            <div class="checkbox"></div>
            <span>建议添加1-2个项目成果截图</span>
          </div>

          <button class="optimize-btn">再次优化</button>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h4>产品介绍</h4>
          <ul>
            <li>功能介绍</li>
            <li>模板中心</li>
            <li>价格方案</li>
            <li>更新日志</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>帮助</h4>
          <ul>
            <li>使用教程</li>
            <li>常见问题</li>
            <li>联系我们</li>
            <li>隐私政策</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>资源</h4>
          <ul>
            <li>简历写作指南</li>
            <li>面试技巧</li>
            <li>职业规划</li>
            <li>行业报告</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>关注我们</h4>
          <div class="social-icons">
            <!-- 社交媒体图标 -->
          </div>
          <p>客服邮箱: support@resumehelper.com</p>
          <p>工作时间: 9:00-18:00</p>
        </div>
      </div>
      <div class="copyright">
        <p>logo让每一份简历都闪闪发光</p>
        <p>© 2023 简历优化助手. 保留所有权利</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 模拟简历数据，实际应用中应该从父组件或API获取
const resumeData = ref({
  name: '张明远',
  phone: '138 **** 5678',
  email: 'zhangmingyuan@email.com',
  location: '上海市浦东新区',
  summary: '5年全栈开发经验，精通React/Vue前端框架和Node.js后端开发，主导过3个百万级用户项目，擅长性能优化和团队协作。',
  workExperience: [
    {
      position: '高级前端工程师',
      company: '上海科技有限公司',
      duration: '2020.07 - 至今',
      descriptions: [
        '负责公司核心产品用户增长系统的前端架构设计，使用React Hooks重构代码，性能提升40%',
        '带领5人前端团队完成数据可视化平台开发，日活PV 50万+',
        '引入Webpack 5优化构建流程，打包时间缩短65%'
      ]
    },
    {
      position: '前端开发工程师',
      company: '北京互联网有限公司',
      duration: '2018.06 - 2020.06',
      descriptions: [
        '参与电商平台前端开发，负责商品详情页和购物车模块',
        '优化页面加载速度，Lighthouse评分从65提升至92',
        '实现SSR方案，SEO效果提升300%'
      ]
    }
  ],
  education: [
    {
      degree: '计算机科学与技术',
      school: '复旦大学',
      duration: '2014.09 - 2018.06',
      description: 'GPA: 3.74/4.0 | 校级优秀毕业生'
    }
  ],
  skills: ['React', 'Vue', 'Node.js', 'TypeScript', 'Webpack', '性能优化'],
  lastUpdated: '2023-11-15 14:30'
});

// 计算文件名
const fileName = computed(() => {
  return `${resumeData.value.name}_${resumeData.value.workExperience[0]?.position}_${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`;
});

// 分享链接状态
const shareUrl = ref('');

// 生成分享链接
const generateShareLink = () => {
  // 实际应用中应该调用API生成分享链接
  shareUrl.value = 'https://resumehelper.com/sf3t2e';
};

// 复制链接到剪贴板
const copyToClipboard = () => {
  if (shareUrl.value) {
    navigator.clipboard.writeText(shareUrl.value);
    // 这里可以添加复制成功的提示
  }
};
</script>

<style scoped>
.resume-preview-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
}

/* 顶部导航样式 */
.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-bottom: 1px solid #eee;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #4e6ef2;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links span {
  cursor: pointer;
  color: #666;
}

/* 主要内容区域样式 */
.main-content {
  display: flex;
  padding: 24px 40px;
  gap: 24px;
}

/* 简历展示区域样式 */
.resume-display {
  flex: 1;
  max-width: 80%;
}

.preview-tabs {
  display: flex;
  margin-bottom: 16px;
}

.preview-tabs button {
  padding: 8px 16px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
}

.preview-tabs button.active {
  background-color: #4e6ef2;
  color: white;
}

.resume-paper {
  background-color: white;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* 个人信息样式 */
.personal-info {
  margin-bottom: 32px;
}

.personal-info h1 {
  font-size: 28px;
  margin-bottom: 8px;
  color: #222;
}

.contact-details {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: #666;
  font-size: 14px;
}

/* 章节样式 */
.section {
  margin-bottom: 24px;
}

.section h2 {
  font-size: 18px;
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid #4e6ef2;
  color: #222;
}

/* 工作经历样式 */
.experience-item {
  margin-bottom: 16px;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.exp-header h3 {
  font-size: 16px;
  color: #333;
}

.exp-header span {
  font-size: 14px;
  color: #666;
}

.experience-item ul {
  padding-left: 20px;
}

.experience-item li {
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.5;
}

/* 教育背景样式 */
.education-item {
  margin-bottom: 16px;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.edu-header h3 {
  font-size: 16px;
  color: #333;
}

.edu-header span {
  font-size: 14px;
  color: #666;
}

.education-item p {
  font-size: 14px;
  color: #666;
}

/* 技能样式 */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background-color: #f0f2ff;
  color: #4e6ef2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
}

/* 水印和版本信息 */
.watermark {
  position: absolute;
  bottom: 40px;
  left: 40px;
  font-size: 12px;
  color: #999;
}

.version-info {
  position: absolute;
  bottom: 20px;
  right: 40px;
  font-size: 12px;
  color: #999;
}

/* 控制面板样式 */
.control-panel {
  max-width: 20%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.primary-btn {
  background-color: #4e6ef2;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
}

.secondary-btn {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
}

/* 导出设置样式 */
.export-settings,
.share-section,
.optimization-section {
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.export-settings h3,
.share-section h3,
.optimization-section h3 {
  font-size: 16px;
  margin-bottom: 16px;
  color: #222;
}

.setting-item {
  margin-bottom: 16px;
  width: 100%;
}

.setting-item label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
}

.setting-item select,
.setting-item input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.range-values {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.font-size-buttons {
  display: flex;
  gap: 8px;
}

.font-size-buttons button {
  flex: 1;
  padding: 6px 0;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: pointer;
}

.font-size-buttons button.active {
  background-color: #4e6ef2;
  color: white;
  border-color: #4e6ef2;
}

.export-btn,
.share-btn,
.optimize-btn {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.export-btn,
.share-btn {
  background-color: #4e6ef2;
  color: white;
}

.optimize-btn {
  background-color: #f5f5f5;
  color: #333;
  margin-top: 16px;
}

/* 分享链接样式 */
.share-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 10px;
  background-color: #f0f2ff;
  border-radius: 4px;
}

.share-link a {
  color: #4e6ef2;
  text-decoration: none;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  margin-right: 8px;
}

.copy-btn {
  padding: 4px 8px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

/* 优化建议样式 */
.suggestion-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 8px;
}

.checkbox.checked {
  background-color: #4e6ef2;
  border-color: #4e6ef2;
  position: relative;
}

.checkbox.checked::after {
  content: '✓';
  position: absolute;
  top: -2px;
  left: 2px;
  color: white;
  font-size: 12px;
}

/* 页脚样式 */
footer {
  margin-top: 40px;
  padding: 40px;
  background-color: #f8f9fa;
  border-top: 1px solid #eee;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.footer-section {
  flex: 1;
  margin-right: 40px;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 16px;
  color: #333;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.copyright {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: #999;
}
</style>