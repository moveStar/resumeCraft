<!--
 * @Description: 
 * @Author: zhangweijuan
 * @Date: 2025-08-27 10:52:13
 * @LastEditTime: 2025-08-27 10:54:09
-->
<template>
  <div class="resume-uploader">
    <div class="upload-area">
      <i class="icon-cloud-upload"></i>
      <p>拖放文件到此处</p>
      <p>支持 DOCX, PDF, TXT 格式</p>
      <button>选择文件</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResumeUploader',
});
</script>

<style scoped>
/* 添加样式 */
</style>