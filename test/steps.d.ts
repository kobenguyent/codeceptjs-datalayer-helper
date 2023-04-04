/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type DatalayerHelper = import('../dist/index.js');
type ExpectHelper = import('codeceptjs-expect');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, DatalayerHelper, ExpectHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<DatalayerHelper>, WithTranslation<ExpectHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
