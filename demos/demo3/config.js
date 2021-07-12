import * as Babel from '@babel/standalone';
export default async () => {
  const [ jsCode] = await Promise.all([
    import('!raw-loader!./index.ts')
  ]);

  return {
    javascript:{
      code: jsCode,
      transformer: 'typescript',
      transform(code) {
        const _code = Babel.transform(code, { 
          presets: ['es2015'],
          plugins: ['transform-typescript'],
        }).code;
        return _code;
      },
      visible: true,
    },
    // foldBoxes: ['html'],  // 在 waterfall 模式下收起的 box
    packages: {
      js: [
        'https://unpkg.com/@babel/standalone/babel.min.js',  // 加载外部 js 文件
      ],
      css: [],  // 加载外部 CSS 文件
    }
  }
}