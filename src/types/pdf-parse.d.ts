/*
 * @Description: 
 * @Author: vivi
 * @Date: 2025-09-02 10:28:01
 * @LastEditTime: 2025-09-02 10:28:29
 */
// 自定义pdf-parse模块类型声明
declare module 'pdf-parse' {
  interface PdfParseResult {
    text: string;
    pages: number;
    info: {[key: string]: any};
    metadata: {[key: string]: any};
    version: string;
  }

  function pdfParse(dataBuffer: Buffer | Uint8Array): Promise<PdfParseResult>;

  export default pdfParse;
}