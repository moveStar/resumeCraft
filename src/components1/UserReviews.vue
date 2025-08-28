<!--
 * @Description: 
 * @Author: zhangweijuan
 * @Date: 2025-08-27 10:52:54
 * @LastEditTime: 2025-08-27 10:56:16
-->
<template>
  <div class="user-reviews">
    <h2>用户评价</h2>
    <p>听听我们的用户怎么说</p>
    <div class="reviews">
      <div class="review">
        <img src="https://tdesign.gtimg.com/site/avatar.jpg" alt="User 1">
        <p>“使用简历转化器后，我的面试邀请增加了50%。”</p>
        <span>张雨薇 - 设计师</span>
        <div class="rating">★★★★★</div>
      </div>
      <!-- 其他用户评价 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserReviews',
});
</script>

<style scoped>
/* 添加样式 */
</style>