<template>
  <section class="resume-templates">
    <div class="container">
      <h2>精选简历模板</h2>
      <p class="subtitle">适用于不同行业和职位的高级模板</p>

      <div class="template-slider">
        <!-- 模板卡片 -->
        <div
          v-for="(template, index) in visibleTemplates"
          :key="index"
          class="template-card"
          @click="previewTemplate(template)"
        >
          <img
            :src="template.preview"
            :alt="`简历模板 ${template.name}`"
            class="template-image"
          />
          <div class="template-info">
            <h3 class="template-title">{{ template.name }}</h3>
            <p class="template-category">{{ template.category }}</p>
            <button class="use-btn">使用模板</button>
          </div>
        </div>
      </div>

      <div v-if="hasMoreTemplates" class="view-all-link">
        <a href="#" @click.prevent="showAllTemplates">查看全部模板 &gt;</a>
      </div>
    </div>
  </section>
</template>

<script>
import template1 from '../assets/images/template-1.png';
import template2 from '../assets/images/template-2.png';
import template3 from '../assets/images/template-3.png';
import template4 from '../assets/images/template-4.png';
import template5 from '../assets/images/template-5.png';
import template6 from '../assets/images/template-6.png';
export default {
  name: 'ResumeTemplates',
  data() {
    return {
      templates: [
        {
          name: '简约专业',
          category: '适合传统行业',
          preview: template1,
        },
        {
          name: '现代创意',
          category: '适合设计师和创意人士',
          preview: template2,
        },
        {
          name: '高管精英',
          category: '适合管理层和高级职位',
          preview: template3,
        },
        {
          name: '技术专业',
          category: '适合工程师和技术人员',
          preview: template4,
        },
        {
          name: '高管精英',
          category: '适合管理层和高级职位',
          preview: template5,
        },
        {
          name: '技术专业',
          category: '适合工程师和技术人员',
          preview: template6,
        },
        // 更多模板...
      ],
      maxVisibleTemplates: 5,
    };
  },
  computed: {
    visibleTemplates() {
      return this.templates.slice(0, this.maxVisibleTemplates);
    },
    hasMoreTemplates() {
      return this.templates.length > this.maxVisibleTemplates;
    },
  },
  methods: {
    previewTemplate(template) {
      console.log('预览模板:', template.name);
    },
    showAllTemplates() {
      this.maxVisibleTemplates = this.templates.length;
    },
  },
};
</script>

<style scoped>
.resume-templates {
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  text-align: center;
}

.container {
  margin: 0 auto;
}

.resume-templates h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.resume-templates .subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
}

/* 模板滑动容器 */
.template-slider {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.template-slider::-webkit-scrollbar {
  display: none;
}

/* 模板卡片 */
.template-card {
  min-width: 300px;
  margin-right: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  background: #fff;
  flex-shrink: 0;
}

.template-card:last-child {
  margin-right: 0;
}

.template-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.template-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.template-info {
  padding: 1.2rem;
  text-align: left;
}

.template-title {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.template-category {
  font-size: 0.95rem;
  color: #777;
  margin: 0 0 1rem 0;
}

.use-btn {
  padding: 0.6rem 1rem;
  background-color: #4c7aff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.use-btn:hover {
  background-color: #3b69ff;
}

/* 查看全部链接 */
.view-all-link {
  text-align: center;
  margin-top: 1rem;
}

.view-all-link a {
  color: #4c7aff;
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.view-all-link a:hover {
  color: #3b69ff;
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .resume-templates {
    padding: 3rem 1rem;
  }

  .resume-templates h2 {
    font-size: 2rem;
  }

  .template-card {
    min-width: 240px;
    max-width: 260px;
  }
}

@media (max-width: 768px) {
  .resume-templates h2 {
    font-size: 1.8rem;
  }

  .resume-templates .subtitle {
    font-size: 1rem;
  }

  .template-card {
    min-width: 200px;
    max-width: 220px;
  }

  .template-image {
    height: 200px;
  }

  .template-info {
    padding: 1rem;
  }

  .use-btn {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>