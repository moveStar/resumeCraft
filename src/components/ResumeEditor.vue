<template>
  <div class="resume-editor">
    <header class="editor-header">
      <h1>编辑您的简历</h1>
      <div class="header-actions">
        <button class="save-btn" @click="saveResume">保存并预览</button>
      </div>
    </header>

    <div class="editor-content">
      <!-- 左侧导航菜单 -->
      <aside class="editor-sidebar">
        <nav class="sidebar-nav">
          <button 
            v-for="section in sections" 
            :key="section.id"
            :class="['nav-item', { active: activeSection === section.id }]"
            @click="activeSection = section.id"
          >
            {{ section.title }}
          </button>
        </nav>
      </aside>

      <!-- 右侧编辑区域 -->
      <main class="editor-main">
        <!-- 基本信息部分 -->
        <div v-if="activeSection === 'basic-info'" class="section-content">
          <h2>基本信息</h2>
          <form class="info-form">
            <div class="form-group">
              <label>姓名</label>
              <input v-model="resumeData.name" type="text" placeholder="请输入您的姓名" />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>性别</label>
                <select v-model="resumeData.gender">
                  <option value="">请选择</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
              </div>
              <div class="form-group">
                <label>出生日期</label>
                <input v-model="resumeData.birthDate" type="date" />
              </div>
            </div>
            <div class="form-group">
              <label>手机号码</label>
              <input v-model="resumeData.phone" type="tel" placeholder="请输入您的手机号码" />
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>
            <div class="form-group">
              <label>邮箱</label>
              <input v-model="resumeData.email" type="email" placeholder="请输入您的邮箱地址" />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            <div class="form-group">
              <label>居住城市</label>
              <input v-model="resumeData.location" type="text" placeholder="请输入您的居住城市" />
            </div>
            <div class="form-group">
              <label>个人简介</label>
              <textarea v-model="resumeData.summary" rows="4" placeholder="请简要介绍您自己"></textarea>
            </div>
          </form>
        </div>

        <!-- 教育背景部分 -->
        <div v-if="activeSection === 'education'" class="section-content">
          <h2>教育背景</h2>
          <div v-for="(edu, index) in resumeData.education" :key="index" class="education-item">
            <div class="item-header">
              <h3>教育经历 #{{ index + 1 }}</h3>
              <button class="remove-btn" @click="removeEducation(index)">删除</button>
            </div>
            <form class="info-form">
              <div class="form-group">
                <label>学校名称</label>
                <input v-model="edu.school" type="text" placeholder="请输入学校名称" />
              </div>
              <div class="form-group">
                <label>专业</label>
                <input v-model="edu.major" type="text" placeholder="请输入专业" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>开始时间</label>
                  <input v-model="edu.startDate" type="month" />
                </div>
                <div class="form-group">
                  <label>结束时间</label>
                  <input v-model="edu.endDate" type="month" />
                </div>
              </div>
              <div class="form-group">
                <label>学历</label>
                <select v-model="edu.degree">
                  <option value="">请选择</option>
                  <option value="bachelor">本科</option>
                  <option value="master">硕士</option>
                  <option value="doctor">博士</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div class="form-group">
                <label>描述</label>
                <textarea v-model="edu.description" rows="3" placeholder="请描述您的学习成果、获奖情况等"></textarea>
              </div>
            </form>
          </div>
          <button class="add-btn" @click="addEducation">添加教育经历</button>
        </div>

        <!-- 工作经历部分 -->
        <div v-if="activeSection === 'work-experience'" class="section-content">
          <h2>工作经历</h2>
          <div v-for="(work, index) in resumeData.workExperience" :key="index" class="work-item">
            <div class="item-header">
              <h3>工作经历 #{{ index + 1 }}</h3>
              <button class="remove-btn" @click="removeWorkExperience(index)">删除</button>
            </div>
            <form class="info-form">
              <div class="form-group">
                <label>公司名称</label>
                <input v-model="work.company" type="text" placeholder="请输入公司名称" />
              </div>
              <div class="form-group">
                <label>职位</label>
                <input v-model="work.position" type="text" placeholder="请输入职位" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>开始时间</label>
                  <input v-model="work.startDate" type="month" />
                </div>
                <div class="form-group">
                  <label>结束时间</label>
                  <input v-model="work.endDate" type="month" placeholder="至今" />
                </div>
              </div>
              <div class="form-group">
                <label>工作描述</label>
                <textarea v-model="work.description" rows="4" placeholder="请描述您的工作内容和成就"></textarea>
              </div>
            </form>
          </div>
          <button class="add-btn" @click="addWorkExperience">添加工作经历</button>
        </div>

        <!-- 项目经验部分 -->
        <div v-if="activeSection === 'projects'" class="section-content">
          <h2>项目经验</h2>
          <div v-for="(project, index) in resumeData.projects" :key="index" class="project-item">
            <div class="item-header">
              <h3>项目 #{{ index + 1 }}</h3>
              <button class="remove-btn" @click="removeProject(index)">删除</button>
            </div>
            <form class="info-form">
              <div class="form-group">
                <label>项目名称</label>
                <input v-model="project.name" type="text" placeholder="请输入项目名称" />
              </div>
              <div class="form-group">
                <label>角色</label>
                <input v-model="project.role" type="text" placeholder="请输入您在项目中的角色" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>开始时间</label>
                  <input v-model="project.startDate" type="month" />
                </div>
                <div class="form-group">
                  <label>结束时间</label>
                  <input v-model="project.endDate" type="month" />
                </div>
              </div>
              <div class="form-group">
                <label>项目描述</label>
                <textarea v-model="project.description" rows="3" placeholder="请描述项目背景和目标"></textarea>
              </div>
              <div class="form-group">
                <label>您的贡献</label>
                <textarea v-model="project.contribution" rows="3" placeholder="请描述您在项目中的具体贡献" ></textarea>
              </div>
              <div class="form-group">
                <label>技术栈</label>
                <input v-model="project.techStack" type="text" placeholder="请输入使用的技术栈，用逗号分隔" />
              </div>
            </form>
          </div>
          <button class="add-btn" @click="addProject">添加项目经验</button>
        </div>

        <!-- 技能特长部分 -->
        <div v-if="activeSection === 'skills'" class="section-content">
          <h2>技能特长</h2>
          <div v-for="(skill, index) in resumeData.skills" :key="index" class="skill-item">
            <div class="form-row">
              <div class="form-group" style="flex: 3;">
                <label>技能名称</label>
                <input v-model="skill.name" type="text" placeholder="请输入技能名称" />
              </div>
              <div class="form-group" style="flex: 1;">
                <label>熟练度</label>
                <select v-model="skill.level">
                  <option value="">请选择</option>
                  <option value="beginner">入门</option>
                  <option value="intermediate">中级</option>
                  <option value="advanced">高级</option>
                  <option value="expert">专家</option>
                </select>
              </div>
              <div class="form-group" style="flex: 0 0 50px; display: flex; align-items: flex-end;">
                <button class="remove-btn" @click="removeSkill(index)">删除</button>
              </div>
            </div>
          </div>
          <button class="add-btn" @click="addSkill">添加技能</button>
        </div>

        <!-- 证书部分 -->
        <div v-if="activeSection === 'certifications'" class="section-content">
          <h2>证书与资质</h2>
          <div v-for="(cert, index) in resumeData.certifications" :key="index" class="cert-item">
            <div class="item-header">
              <h3>证书 #{{ index + 1 }}</h3>
              <button class="remove-btn" @click="removeCertification(index)">删除</button>
            </div>
            <form class="info-form">
              <div class="form-group">
                <label>证书名称</label>
                <input v-model="cert.name" type="text" placeholder="请输入证书名称" />
              </div>
              <div class="form-group">
                <label>颁发机构</label>
                <input v-model="cert.issuer" type="text" placeholder="请输入颁发机构" />
              </div>
              <div class="form-group">
                <label>获得日期</label>
                <input v-model="cert.date" type="month" />
              </div>
              <div class="form-group">
                <label>证书描述</label>
                <textarea v-model="cert.description" rows="2" placeholder="请描述证书的相关信息"></textarea>
              </div>
            </form>
          </div>
          <button class="add-btn" @click="addCertification">添加证书</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
// 定义简历数据接口
interface ResumeData {
  name: string;
  gender: string;
  birthDate: string;
  phone: string;
  email: string;
  location: string;
  summary: string;
  education: Array<{
    school: string;
    major: string;
    startDate: string;
    endDate: string;
    degree: string;
    description: string;
  }>;
  workExperience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    contribution: string;
    techStack: string;
  }>;
  skills: Array<{
    name: string;
    level: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    description: string;
  }>;
}

// 定义错误信息接口
interface Errors {
  name?: string;
  phone?: string;
  email?: string;
}

export default {
  name: 'ResumeEditor',
  props: {
    initialData: {
      type: Object as () => Partial<ResumeData>,
      default: () => ({})
    }
  },

  data(): {
    activeSection: string;
    sections: Array<{ id: string; title: string; }>;
    resumeData: ResumeData;
    errors: Errors;
  } {
    // 如果提供了initialData，则使用它初始化resumeData
    const defaultResumeData: ResumeData = {
      name: '',
      gender: '',
      birthDate: '',
      phone: '',
      email: '',
      location: '',
      summary: '',
      education: [
        {
          school: '',
          major: '',
          startDate: '',
          endDate: '',
          degree: '',
          description: '',
        },
      ],
      workExperience: [
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
      projects: [
        {
          name: '',
          role: '',
          startDate: '',
          endDate: '',
          description: '',
          contribution: '',
          techStack: '',
        },
      ],
      skills: [
        {
          name: '',
          level: '',
        },
      ],
      certifications: [
        {
          name: '',
          issuer: '',
          date: '',
          description: '',
        },
      ],
    };
    
    // 合并initialData和默认值，并进行类型断言
    const initialResumeData = { ...defaultResumeData, ...this.initialData } as ResumeData;

    return {
      activeSection: 'basic-info',
      sections: [
        { id: 'basic-info', title: '基本信息' },
        { id: 'education', title: '教育背景' },
        { id: 'work-experience', title: '工作经历' },
        { id: 'projects', title: '项目经验' },
        { id: 'skills', title: '技能特长' },
        { id: 'certifications', title: '证书资质' },
      ],
      resumeData: initialResumeData,
      errors: {}, // 用于存储表单错误信息
    };
  },
  methods: {
    // 表单验证方法
    validateForm(): boolean {
      const errors: Errors = {};
      // 从this.resumeData中解构字段，由于data中已经初始化，不需要额外空检查
      const { name, phone, email } = this.resumeData;

      // 验证姓名
      if (!name.trim()) {
        errors.name = '姓名不能为空';
      }

      // 验证手机号码
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!phone) {
        errors.phone = '手机号码不能为空';
      } else if (!phoneRegex.test(phone)) {
        errors.phone = '请输入有效的手机号码';
      }

      // 验证邮箱
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email) {
        errors.email = '邮箱不能为空';
      } else if (!emailRegex.test(email)) {
        errors.email = '请输入有效的邮箱地址';
      }

      this.errors = errors;
      return Object.keys(errors).length === 0;
    },

    // 基本信息相关方法
    previewResume() {
      // 跳转到预览页面的逻辑
      console.log('预览简历:', this.resumeData);
      // 实际项目中可能会使用路由跳转并传递数据
      // this.$router.push({ name: 'resume-preview', params: { resumeData: this.resumeData } });
    },
    
    saveResume() {
      // 先验证表单
      if (!this.validateForm()) {
        // 如果验证失败，切换到基本信息标签
        this.activeSection = 'basic-info';
        return;
      }

      // 保存简历的逻辑
      console.log('保存简历:', this.resumeData);
      // 可以将数据保存到localStorage或发送到服务器
      localStorage.setItem('resumeData', JSON.stringify(this.resumeData));
      // 向父组件发射事件，传递简历数据
      this.$emit('saveResume', this.resumeData);
      // 跳转到预览页面
      this.$router.push({ name: 'preview', query: { resumeData: JSON.stringify(this.resumeData) } });
    },

    // 教育背景相关方法
    addEducation() {
      this.resumeData.education.push({
        school: '',
        major: '',
        startDate: '',
        endDate: '',
        degree: '',
        description: '',
      });
    },
    removeEducation(index: number) {
      if (this.resumeData.education.length > 1) {
        this.resumeData.education.splice(index, 1);
      } else {
        alert('至少需要保留一条教育经历');
      }
    },

    // 工作经历相关方法
    addWorkExperience() {
      this.resumeData.workExperience.push({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    },
    removeWorkExperience(index: number) {
      if (this.resumeData.workExperience.length > 1) {
        this.resumeData.workExperience.splice(index, 1);
      } else {
        alert('至少需要保留一条工作经历');
      }
    },

    // 项目经验相关方法
    addProject() {
      this.resumeData.projects.push({
        name: '',
        role: '',
        startDate: '',
        endDate: '',
        description: '',
        contribution: '',
        techStack: '',
      });
    },
    removeProject(index: number) {
      if (this.resumeData.projects.length > 1) {
        this.resumeData.projects.splice(index, 1);
      } else {
        alert('至少需要保留一条项目经验');
      }
    },

    // 技能相关方法
    addSkill() {
      this.resumeData.skills.push({
        name: '',
        level: '',
      });
    },
    removeSkill(index: number) {
      if (this.resumeData.skills.length > 1) {
        this.resumeData.skills.splice(index, 1);
      } else {
        alert('至少需要保留一项技能');
      }
    },

    // 证书相关方法
    addCertification() {
      this.resumeData.certifications.push({
        name: '',
        issuer: '',
        date: '',
        description: '',
      });
    },
    removeCertification(index: number) {
      if (this.resumeData.certifications.length > 1) {
        this.resumeData.certifications.splice(index, 1);
      } else {
        alert('至少需要保留一项证书');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.resume-editor {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4eaf5 100%);
  background-attachment: fixed;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #4c7aff 0%, #36cbcb 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  border-radius: 0 0 12px 12px;
}

.editor-header h1 {
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.save-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  background-color: #fff;
  color: #4c7aff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.save-btn:hover {
  background-color: #f0f7ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.editor-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.editor-sidebar {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #e5e7eb;
  padding: 1rem 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.nav-item {
  padding: 0.8rem 1.5rem;
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background-color: #f5f7fa;
  color: #4c7aff;
}

.nav-item.active {
  background-color: #e6ebff;
  color: #4c7aff;
  font-weight: 500;
  border-left: 3px solid #4c7aff;
}

.editor-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.section-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.section-content h2 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #333;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.info-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row .form-group {
  flex: 1;
}

label {
  font-weight: 500;
  color: #555;
  font-size: 0.9rem;
}

input, select, textarea {
  padding: 0.7rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #4c7aff;
  box-shadow: 0 0 0 2px rgba(76, 122, 255, 0.1);
}

.error-message {
  color: #ff4d4f;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

textarea {
  resize: vertical;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.item-header h3 {
  font-size: 1.1rem;
  color: #444;
}

.remove-btn {
  padding: 0.3rem 0.6rem;
  background-color: #fff;
  color: #ff4d4f;
  border: 1px solid #ff4d4f;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.remove-btn:hover {
  background-color: #fff2f0;
}

.add-btn {
  margin-top: 1.5rem;
  padding: 0.7rem 1rem;
  background-color: #f0f2f5;
  color: #555;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.add-btn:hover {
  background-color: #e5e6eb;
}
</style>