<!-- ResumeUploader.vue -->
<template>
  <div class="resume-uploader">
    <h2>开始创建您的简历</h2>
    <p>上传现有简历或从零开始创建</p>

    <div class="upload-section">
      <!-- 文件上传区域 -->
      <div class="upload-area" @dragover.prevent @drop.prevent="handleDrop">
        <img src="../assets/icons/upload-icon.png" alt="上传图标" />
        <p>拖放文件到此处</p>
        <p>支持 DOCX, PDF, TXT 格式</p>
        <button @click="openFilePicker">选择文件</button>
        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
      </div>

      <!-- 手动创建简历按钮 -->
      <div class="manual-create">
        <img src="../assets/icons/manual-create.png" alt="手动创建图标" />
        <p>手动创建简历</p>
        <p>从空白模板开始，逐步填写</p>
        <button @click="startManualCreation">开始创建</button>
      </div>
    </div>

    <p class="ai-note">我们的 AI 系统可以自动识别简历信息，准确率高达 90% 以上</p>
  </div>
</template>

<script>
import FileParserService from '../services/FileParserService';

export default {
  name: 'ResumeUploader',
  data() {
    return {
      fileParserService: new FileParserService(),
    };
  },
  methods: {
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    async handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        console.log('Selected file:', file);
        await this.fileParserService.handleFileUpload(file);
      }
    },
    async handleDrop(event) {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        console.log('Dropped file:', file);
        await this.fileParserService.handleFileUpload(file);
      }
    },
    startManualCreation() {
      console.log('开始手动创建简历');
      this.$router.push('/editor');
    },
  },
};
</script>

<style scoped>
.resume-uploader {
  background-color: #fff;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  margin: 0 auto;
}

.upload-section {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-wrap: wrap;
  width: 100%;
}

/* 响应式：小屏幕设备 (宽度 < 768px) */
@media (max-width: 768px) {
  .upload-section {
    flex-direction: column;
    align-content: center;
  }

  .upload-area,
  .manual-create {
    width: 100%;
    margin: 1rem 0;
  }
}

/* 响应式：中等屏幕 (768px ~ 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .upload-area,
  .manual-create {
    width: 100%;
  }
}

.upload-area,
.manual-create {
  margin: 1rem;
  width: 43%;
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.upload-area img,
.manual-create img {
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
}

.upload-area p,
.manual-create p {
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
}

.upload-area button,
.manual-create button {
  padding: 0.7rem 1.5rem;
  background-color: #4c7aff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.upload-area button:hover,
.manual-create button:hover {
  background-color: #3b69ff;
}

.ai-note {
  font-size: 0.9rem;
  color: #777;
  margin-top: 2rem;
}
</style>