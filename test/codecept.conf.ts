import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview/jQuery/Light/',
      show: false,
      browser: 'chromium'
    },
    DatalayerHelper: {
      require: '../dist/index.js',
    },
    ExpectHelper: {
      require: "codeceptjs-expect"
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'test'
}
