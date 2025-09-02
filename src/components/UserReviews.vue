<!-- UserReviews.vue -->
<template>
  <section class="user-reviews">
    <div class="container">
      <h2>用户评价</h2>
      <p class="subtitle">听听我们的用户怎么说</p>

      <div class="reviews-container">
        <!-- 用户评价卡片 -->
        <div v-for="(review, index) in reviews" :key="index" class="review-card">
          <img :src="review.avatar" :alt="`${review.name} 的头像`" class="avatar" />
          <div class="review-content">
            <div class="review-header">
              <span class="name">{{ review.name }}</span>
              <span class="position">@ {{ review.position }}</span>
            </div>
            <p class="description">{{ review.description }}</p>
            <div class="rating">
              <span v-for="n in review.rating" :key="n" class="star">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import avatar1 from '../assets/images/avatar-1.png';
import avatar2 from '../assets/images/avatar-2.png';
import avatar3 from '../assets/images/avatar-3.png';
export default {
  name: 'UserReviews',
  data() {
    return {
      reviews: [
        {
          avatar: avatar1,
          name: '张雨薇',
          position: '市场经理 @ 腾讯',
          description:
            '使用AIResumeCraft后，我的面试邀请增加了60%。AI优化功能帮我突出了最相关的经验，让我的简历在众多申请者中脱颖而出。',
          rating: 5,
        },
        {
          avatar: avatar2,
          name: '李志强',
          position: '高级工程师 @ 阿里巴巴',
          description:
            '作为一名技术人员，我不擅长写简历。这个工具帮我组织了我的项目经验和技术栈，最终获得了心仪公司的offer。',
          rating: 4,
        },
        {
          avatar: avatar3,
          name: '王思颖',
          position: 'UI设计师 @ 字节跳动',
          description:
            '创意模板让我的作品集和简历完美结合，HR特别提到我的简历设计给他们留下了深刻印象。强烈推荐给设计师同行！',
          rating: 5,
        },
      ],
    };
  },
};
</script>

<style scoped>
.user-reviews {
  background-color: rgba(79, 70, 229, 0.05);
  border-radius: 16px;
  padding: 4rem 1rem;
}

.container {
  margin: 0 auto;
  text-align: center;
}

.user-reviews h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.user-reviews .subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.reviews-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.review-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin: 1rem;
  width: calc(33.333% - 2rem);
  text-align: left;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  vertical-align: middle;
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 0.5rem;
}

.position {
  font-size: 0.9rem;
  color: #777;
}

.description {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}

.rating {
  color: #ffcc00;
}

.star {
  font-size: 1.2rem;
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .reviews-container {
    flex-direction: column;
  }

  .review-card {
    width: 100%;
    margin-bottom: 2rem;
  }

  .review-card:last-child {
    margin-bottom: 0;
  }
}
</style>