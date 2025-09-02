<template>
  <div class="editor-view">
    <ResumeEditor :initialData="resumeData" @saveResume="handleSaveResume" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ResumeEditor from '../components/ResumeEditor.vue';

export default defineComponent({
  name: 'ResumeEditorView',
  components: {
    ResumeEditor
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const resumeData = ref<any>({});

    onMounted(() => {
      // 获取并解析路由中的简历数据
      if (route.query.resumeData) {
        try {
          const decodedData = decodeURIComponent(route.query.resumeData as string);
          resumeData.value = JSON.parse(decodedData);
          console.log('解析的简历数据:', resumeData.value);
        } catch (error) {
          console.error('解析简历数据失败:', error);
        }
      }
    });

    const handleSaveResume = (resumeData: any) => {
      // 将简历数据转为JSON字符串并编码，以便在URL中传递
      const encodedData = encodeURIComponent(JSON.stringify(resumeData));
      // 导航到预览页面，并传递简历数据
      router.push({ name: 'preview', query: { resumeData: encodedData } });
    };

    return {
      handleSaveResume,
      resumeData
    };
  }
});
</script>

<style scoped>
.editor-view {
  padding: 2rem 0;
}
</style>