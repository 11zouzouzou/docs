export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!./index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!./style.css'),
  ]);

  return {
    javascript: {
      code: jsCode, // JavaScript 代码
      transformer: 'javascript',  // JavaScript transformer
      visible: true,  // 是否显示编辑器
    },
    html: {
      code: htmlCode, // HTML 代码
      transformer: 'html',
      visible: true,
    },
    css: {
      code: cssCode,  // CSS 代码
      transformer: 'css',
      visible: true,
    },
    foldBoxes: ['html'],  // 在 waterfall 模式下收起的 box
    packages: {
      js: [
        '',  // 加载外部 js 文件
      ],
      css: [],  // 加载外部 CSS 文件
    }
  }
}