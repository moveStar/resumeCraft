<!--
 * @Description: 
 * @Author: vivi
 * @Date: 2025-09-02 09:56:12
 * @LastEditTime: 2025-09-02 10:01:35
-->
<template>
  <div class="preview-view">
    <ResumePreview :resumeData="resumeData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ResumePreview from '../components/ResumePreview.vue';

export default defineComponent({
  name: 'ResumePreviewView',
  components: {
    ResumePreview
  },
  setup() {
    const route = useRoute();
    const resumeData = ref<any>({});

    onMounted(() => {
      // 获取并解析路由中的简历数据
      if (route.query.resumeData) {
        try {
          const decodedData = decodeURIComponent(route.query.resumeData as string);
          resumeData.value = JSON.parse(decodedData);
        } catch (error) {
          console.error('解析简历数据失败:', error);
          // 可以添加错误处理逻辑，例如导航回编辑页面
        }
      }
    });

    return {
      resumeData
    };
  }
});
</script>

<style scoped>
.preview-view {
  padding: 2rem 0;
}
</style>