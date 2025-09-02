<template>
  <div class="tutorials">
    <Header />
    <main class="container">
      <h1>使用教程</h1>
      <p class="subtitle">学习如何使用我们的简历生成器创建专业简历</p>

      <div class="tutorial-categories">
        <button class="category-btn active" @click="selectCategory('all')">全部教程</button>
        <button class="category-btn" @click="selectCategory('basic')">基础操作</button>
        <button class="category-btn" @click="selectCategory('templates')">模板使用</button>
        <button class="category-btn" @click="selectCategory('formatting')">格式调整</button>
        <button class="category-btn" @click="selectCategory('export')">导出与分享</button>
      </div>

      <div class="tutorial-list">
        <div v-for="tutorial in filteredTutorials" :key="tutorial.id" class="tutorial-card">
          <div class="tutorial-thumbnail">
            <img :src="tutorial.thumbnail" :alt="tutorial.title" />
          </div>
          <div class="tutorial-content">
            <h3 class="tutorial-title">{{ tutorial.title }}</h3>
            <p class="tutorial-description">{{ tutorial.description }}</p>
            <div class="tutorial-meta">
              <span class="tutorial-category">{{ tutorial.category }}</span>
              <span class="tutorial-duration">{{ tutorial.duration }}</span>
            </div>
            <button class="watch-btn">观看教程</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import tutorial1 from '../assets/images/tutorial-1.png';
import tutorial2 from '../assets/images/tutorial-2.png';
import tutorial3 from '../assets/images/tutorial-3.png';
import tutorial4 from '../assets/images/tutorial-4.png';
import tutorial5 from '../assets/images/tutorial-5.png';
import tutorial6 from '../assets/images/tutorial-6.png';

// 教程数据
interface Tutorial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  categoryId: string;
  duration: string;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: '如何开始创建你的第一份简历',
    description: '本教程将引导你完成简历创建的基本步骤，包括个人信息填写、工作经历添加等。',
    thumbnail: tutorial1,
    category: '基础操作',
    categoryId: 'basic',
    duration: '5:30',
  },
  {
    id: 2,
    title: '如何选择适合你的简历模板',
    description: '了解不同类型的简历模板及其适用场景，选择最能展示你优势的模板。',
    thumbnail: tutorial2,
    category: '模板使用',
    categoryId: 'templates',
    duration: '4:15',
  },
  {
    id: 3,
    title: '简历格式调整技巧',
    description: '学习如何调整简历的字体、间距和布局，使你的简历更加专业和易读。',
    thumbnail: tutorial3,
    category: '格式调整',
    categoryId: 'formatting',
    duration: '6:20',
  },
  {
    id: 4,
    title: '如何导出和分享你的简历',
    description: '了解如何将你的简历导出为PDF格式，以及如何通过邮件或社交媒体分享。',
    thumbnail: tutorial4,
    category: '导出与分享',
    categoryId: 'export',
    duration: '3:45',
  },
  {
    id: 5,
    title: '简历内容写作技巧',
    description: '学习如何撰写有效的简历内容，突出你的技能和成就，吸引雇主注意。',
    thumbnail: tutorial5,
    category: '基础操作',
    categoryId: 'basic',
    duration: '7:10',
  },
  {
    id: 6,
    title: '如何使用高级模板功能',
    description: '探索我们的高级模板功能，如自定义颜色、添加徽标和调整部分布局。',
    thumbnail: tutorial6,
    category: '模板使用',
    categoryId: 'templates',
    duration: '5:50',
  },
];

// 状态管理
const selectedCategory = ref('all');

// 过滤教程
const filteredTutorials = computed(() => {
  if (selectedCategory.value === 'all') {
    return tutorials;
  }
  return tutorials.filter(tutorial => tutorial.categoryId === selectedCategory.value);
});

// 选择分类
const selectCategory = (category: string) => {
  selectedCategory.value = category;
};
</script>

<style lang="scss" scoped>
.tutorials {
  padding-top: 80px; // 为固定的头部留出空间
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1600px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.tutorial-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-btn {
  padding: 0.8rem 1.5rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #4c7aff;
    color: white;
  }
}

.tutorial-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.tutorial-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.tutorial-thumbnail {
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.tutorial-content {
  padding: 1.5rem;
}

.tutorial-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.tutorial-description {
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tutorial-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #95a5a6;
}

.watch-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: #4c7aff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a69e9;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .tutorial-list {
    grid-template-columns: 1fr;
  }
}
</style>