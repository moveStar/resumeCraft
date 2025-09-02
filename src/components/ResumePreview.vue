<template>
  <div class="resume-preview-container">

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 左侧简历预览 -->
      <div class="resume-display">
        <div class="preview-tabs">
          <button class="active">优化版本</button>
          <button>原始版本</button>
        </div>

        <div class="resume-paper">
          <!-- 个人信息 -->
          <div class="personal-info">
            <div class="avatar-container">
              <img :src="resumeData.avatar || defaultAvatar" alt="个人头像" class="avatar" />
            </div>
            <h1>{{ resumeData.name }}</h1>
            <div class="professional-title">{{ resumeData.title }}</div>
            <div class="contact-details">
              <div class="contact-item">
                <i class="icon-phone"></i>
                <span>{{ resumeData.phone }}</span>
              </div>
              <div class="contact-item">
                <i class="icon-email"></i>
                <span>{{ resumeData.email }}</span>
              </div>
              <div class="contact-item">
                <i class="icon-location"></i>
                <span>{{ resumeData.location }}</span>
              </div>
              <div class="contact-item" v-if="resumeData.website">
                <i class="icon-website"></i>
                <a :href="resumeData.website" target="_blank">{{ resumeData.website }}</a>
              </div>
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
            <div class="timeline">
              <div v-for="(exp, index) in resumeData.workExperience" :key="index" class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="exp-header">
                    <div class="company-info">
                      <div class="company-logo">
                        <t-icon name="work-history" style="font-size: 24px; color: #4e6ef2;"></t-icon>
                      </div>
                      <h3>{{ exp.position }}</h3>
                      <div class="company-name">{{ exp.company }}</div>
                    </div>
                    <span class="exp-duration">{{ exp.duration }}</span>
                  </div>
                  <ul class="exp-details">
                    <li v-for="(desc, i) in exp.descriptions" :key="i">{{ desc }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 项目经验 -->
          <div class="section" v-if="resumeData.projects && resumeData.projects.length > 0">
            <h2>项目经验</h2>
            <div class="projects-container">
              <div v-for="(project, index) in resumeData.projects" :key="index" class="project-card">
                <div class="project-header">
                  <h3>{{ project.name }}</h3>
                  <span>{{ project.duration }}</span>
                </div>
                <div class="project-role">{{ project.role }}</div>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-achievements">
                  <h4>主要成果:</h4>
                  <ul>
                    <li v-for="(achievement, i) in project.achievements" :key="i">{{ achievement }}</li>
                  </ul>
                </div>
                <div class="project-tech-stack">
                  <span v-for="(tech, i) in project.techStack" :key="i" class="tech-tag">{{ tech }}</span>
                </div>
              </div>
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

          <!-- 技能特长 -->
          <div class="section" v-if="resumeData.skills && resumeData.skills.length > 0">
            <h2>技能特长</h2>
            <div class="skills-tag-cloud">
              <div v-for="(skillGroup, groupIndex) in resumeData.skills" :key="groupIndex" class="tag-group">
                <h3 class="skill-group-title">{{ skillGroup.category }}</h3>
                <div class="tag-container">
                  <span v-for="(skill, index) in skillGroup.skills" :key="index" 
                        :style="{ fontSize: Math.max(14, 14 + (skill.level - 50) / 10) + 'px', backgroundColor: getSkillColor(groupIndex) + '20' }"
                        class="skill-tag" 
                        :title="skill.name + ' - ' + skill.level + '%'">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 证书资质 -->
          <div class="section" v-if="resumeData.certifications && resumeData.certifications.length > 0">
            <h2>证书资质</h2>
            <div class="certifications-container">
              <div v-for="(cert, index) in resumeData.certifications" :key="index" class="certificate-card">
                <div class="certificate-header">
                  <div class="cert-logo" v-if="cert.logo">
                    <img :src="cert.logo" alt="{{ cert.name }}" />
                  </div>
                  <h3>{{ cert.name }}</h3>
                </div>
                <div class="certificate-issuer">{{ cert.issuer }}</div>
                <div class="certificate-date">{{ cert.date }}</div>
                <p class="certificate-description">{{ cert.description }}</p>
              </div>
            </div>
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
    <!-- <footer>
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
          </div>
          <p>客服邮箱: support@resumehelper.com</p>
          <p>工作时间: 9:00-18:00</p>
        </div>
      </div>
      <div class="copyright">
        <p>logo让每一份简历都闪闪发光</p>
        <p>© 2023 简历优化助手. 保留所有权利</p>
      </div>
    </footer> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 技能颜色生成函数
const getSkillColor = (index: number) => {
  const colors = ['#4e6ef2', '#36cbcb', '#f7ba1e', '#ff7d00', '#722ed1'];
  return colors[index % colors.length];
};
const defaultAvatar = ref('/src/assets/images/default-avatar.png');

// 模拟简历数据，实际应用中应该从父组件或API获取
const resumeData = ref({
  name: '张明远',
  title: '高级全栈开发工程师',
  avatar: '',
  phone: '138 **** 5678',
  email: 'zhangmingyuan@email.com',
  location: '上海市浦东新区',
  website: 'https://github.com/zhangmingyuan',
  summary: '5年全栈开发经验，精通React/Vue前端框架和Node.js后端开发，主导过3个百万级用户项目，擅长性能优化和团队协作。',
  workExperience: [
    {
      position: '高级前端工程师',
      company: '上海科技有限公司',
      logo: 'https://via.placeholder.com/40',
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
      logo: 'https://via.placeholder.com/40',
      duration: '2018.06 - 2020.06',
      descriptions: [
        '参与电商平台前端开发，负责商品详情页和购物车模块',
        '优化页面加载速度，Lighthouse评分从65提升至92',
        '实现SSR方案，SEO效果提升300%'
      ]
    }
  ],
  projects: [
    {
      name: '数据可视化平台',
      role: '技术负责人',
      duration: '2021.03 - 2022.01',
      description: '设计并开发了公司核心数据可视化平台，支持多维度数据展示和分析。',
      achievements: [
        '用户满意度提升45%',
        '数据处理效率提升60%',
        '减少决策时间30%'
      ],
      techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB']
    },
    {
      name: '电商移动端网站',
      role: '前端开发',
      duration: '2019.05 - 2020.02',
      description: '负责电商平台移动端网站的开发和优化，提升移动端用户体验。',
      achievements: [
        '移动端转化率提升25%',
        '页面加载速度提升50%',
        '用户停留时间增加35%'
      ],
      techStack: ['Vue', 'JavaScript', 'Webpack', 'Sass', 'FastAPI']
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
  skills: [
    {
      category: '前端技术',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      category: '后端技术',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      category: '其他技能',
      skills: [
        { name: 'Webpack', level: 85 },
        { name: '性能优化', level: 88 },
        { name: '团队管理', level: 75 }
      ]
    }
  ],
  certifications: [
    {
      name: 'AWS认证解决方案架构师',
      logo: 'https://via.placeholder.com/40',
      issuer: '亚马逊AWS',
      date: '2022年6月',
      description: '验证了在设计和部署AWS云基础设施方面的专业知识和技能。'
    },
    {
      name: 'React高级开发者认证',
      logo: 'https://via.placeholder.com/40',
      issuer: 'React官方',
      date: '2021年3月',
      description: '验证了在React应用开发和优化方面的高级技能。'
    }
  ],
  lastUpdated: '2023-11-15 14:30'
});

// 计算文件名
const fileName = computed(() => {
  return `${resumeData.value.name}_${resumeData.value.title}_${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`;
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
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* 顶部导航样式 */
.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #4e6ef2;
  display: flex;
  align-items: center;
}

.logo::before {
  content: '✨';
  margin-right: 8px;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links span {
  cursor: pointer;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links span:hover, .nav-links span.active {
  color: #4e6ef2;
}

.user-actions {
  display: flex;
  align-items: center;
}

.avatar-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  background: none;
  cursor: pointer;
}

.avatar-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 主要内容区域样式 */
.main-content {
  display: flex;
  padding: 32px 40px;
  gap: 32px;
  background-color: #f8f9fa;
}

/* 简历展示区域样式 */
.resume-display {
  flex: 1;
  max-width: 75%;
}

.preview-tabs {
  display: flex;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.preview-tabs button {
  padding: 10px 20px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.preview-tabs button.active {
  background-color: #4e6ef2;
  color: white;
}

.resume-paper {
  background-color: white;
  padding: 32px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

/* 个人信息样式 */
.personal-info {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.avatar-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid #f0f7ff;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.personal-info h1 {
  font-size: 32px;
  margin-bottom: 8px;
  color: #222;
  font-weight: 700;
}

.professional-title {
  font-size: 18px;
  color: #4e6ef2;
  margin-bottom: 16px;
  font-weight: 500;
}

.contact-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 24px;
  color: #666;
  font-size: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-phone, .icon-email, .icon-location, .icon-website {
  width: 18px;
  height: 18px;
  color: #4e6ef2;
}

.contact-item a {
  color: #4e6ef2;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* 章节样式 */
.section {
  margin-bottom: 32px;
  position: relative;
}

.section h2 {
  font-size: 22px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #4e6ef2;
  color: #222;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.section h2::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 22px;
  background-color: #4e6ef2;
  margin-right: 12px;
  border-radius: 4px;
}

/* 工作经历样式 - 时间线 */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  width: 2px;
  background-color: #e0e0e0;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-dot {
  position: absolute;
  left: -30px;
  top: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #4e6ef2;
  border: 3px solid #f0f7ff;
  z-index: 1;
}

.timeline-content {
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 12px;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-logo {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f0f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-logo img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.exp-header h3 {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.company-name {
  color: #666;
  font-size: 15px;
}

.exp-duration {
  background-color: #f0f7ff;
  color: #4e6ef2;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
}

.exp-details {
  padding-left: 20px;
  margin-top: 12px;
}

.exp-details li {
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 1.6;
  position: relative;
}

.exp-details li::before {
  content: '•';
  color: #4e6ef2;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* 项目经验样式 */
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card {
  width: 100%;
  box-sizing: border-box;
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.project-header h3 {
  font-size: 18px;
  color: #222;
  font-weight: 600;
  margin: 0;
}

.project-role {
  color: #4e6ef2;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
}

.project-description {
  color: #666;
  margin-bottom: 16px;
  font-size: 15px;
}

.project-achievements h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}

.project-achievements ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.project-achievements li {
  margin-bottom: 6px;
  font-size: 14px;
  color: #555;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tech-tag {
  background-color: #f0f2ff;
  color: #4e6ef2;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
}

/* 教育背景样式 */
.education-item {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.education-item:last-child {
  border-bottom: none;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: flex-start;
}

.edu-header h3 {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.edu-header span {
  background-color: #f0f7ff;
  color: #4e6ef2;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
}

.education-item p {
  font-size: 15px;
  color: #666;
}

/* 技能特长样式 */
.skills-container {
  margin-top: 24px;
}

.skills-tag-cloud {
  margin-top: 24px;
}

.tag-group {
  margin-bottom: 32px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.skill-tag {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #4e6ef2 !important;
  color: white;
}

.skill-group {
  margin-bottom: 24px;
}

.skill-group-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.skill-group-title::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 20px;
  background-color: #4e6ef2;
  margin-right: 10px;
  border-radius: 3px;
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-bar {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.skill-level {
  font-size: 15px;
  color: #4e6ef2;
  font-weight: 600;
}

.skill-progress {
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 1.5s ease-in-out, background-color 0.5s ease;
}

.skill-bar:hover .skill-progress-bar {
  background-color: #3a5ae8 !important;
  transform: scaleX(1.02);
  transform-origin: left;
}

/* 证书资质样式 */
.certifications-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.certificate-card {
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.certificate-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.cert-logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f0f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-logo img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.certificate-header h3 {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.certificate-issuer {
  color: #666;
  font-size: 15px;
  margin-bottom: 8px;
}

.certificate-date {
  color: #888;
  font-size: 14px;
  margin-bottom: 16px;
}

.certificate-description {
  color: #555;
  font-size: 15px;
  line-height: 1.6;
}

/* 版本信息 */
.version-info {
  position: absolute;
  bottom: 20px;
  right: 40px;
  font-size: 12px;
  color: #999;
}

/* 控制面板样式 */
.control-panel {
  max-width: 25%;
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
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(78, 110, 242, 0.3);
}

.primary-btn:hover {
  background-color: #3a5ae8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(78, 110, 242, 0.4);
}

.secondary-btn {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.secondary-btn:hover {
  background-color: #e9e9e9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 导出设置样式 */
.export-settings, .share-section, .optimization-section {
  background-color: white;
  padding: 24px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
}

.export-settings h3, .share-section h3, .optimization-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #222;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.setting-item {
  margin-bottom: 20px;
  width: 100%;
}

.setting-item label {
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  color: #666;
  font-weight: 500;
}

.setting-item select, .setting-item input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.setting-item select:focus, .setting-item input:focus {
  outline: none;
  border-color: #4e6ef2;
  box-shadow: 0 0 0 3px rgba(78, 110, 242, 0.1);
}

.range-values {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #999;
  margin-top: 6px;
}

.font-size-buttons {
  display: flex;
  gap: 8px;
}

.font-size-buttons button {
  flex: 1;
  padding: 8px 0;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;
}

.font-size-buttons button.active {
  background-color: #4e6ef2;
  color: white;
  border-color: #4e6ef2;
}

.export-btn, .share-btn, .optimize-btn {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.export-btn, .share-btn {
  background-color: #4e6ef2;
  color: white;
  box-shadow: 0 2px 8px rgba(78, 110, 242, 0.3);
}

.export-btn:hover, .share-btn:hover {
  background-color: #3a5ae8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(78, 110, 242, 0.4);
}

.optimize-btn {
  background-color: #f5f5f5;
  color: #333;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.optimize-btn:hover {
  background-color: #e9e9e9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 分享链接样式 */
.share-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 12px;
  background-color: #f0f7ff;
  border-radius: 6px;
}

.share-link a {
  color: #4e6ef2;
  text-decoration: none;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  margin-right: 8px;
}

.copy-btn {
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background-color: #f9f9f9;
  border-color: #4e6ef2;
}

/* 优化建议样式 */
.suggestion-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.checkbox {
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkbox.checked {
  background-color: #4e6ef2;
  border-color: #4e6ef2;
  position: relative;
}

.checkbox.checked::after {
  content: '✓';
  position: absolute;
  top: -1px;
  left: 2px;
  color: white;
  font-size: 14px;
}

.suggestion-item span {
  font-size: 15px;
  color: #555;
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
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin-right: 40px;
  min-width: 180px;
  margin-bottom: 24px;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 16px;
  color: #333;
  font-weight: 600;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-section li:hover {
  color: #4e6ef2;
}

.copyright {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #eee;
  font-size: 15px;
  color: #999;
}
</style>