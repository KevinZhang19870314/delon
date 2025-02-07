import { AlainSTConfig } from '@delon/util/config';

export const ST_DEFAULT_CONFIG: AlainSTConfig = {
  pi: 1,
  ps: 10,
  size: 'default',
  responsive: true,
  responsiveHideHeaderFooter: false,
  req: {
    type: 'page',
    method: 'GET',
    allInBody: false,
    lazyLoad: false,
    reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }
  },
  res: {
    reName: { list: ['list'], total: ['total'] }
  },
  page: {
    front: true,
    zeroIndexed: false,
    position: 'bottom',
    placement: 'right',
    show: true,
    showSize: false,
    pageSizes: [10, 20, 30, 40, 50],
    showQuickJumper: false,
    total: true,
    toTop: true,
    toTopOffset: 100,
    itemRender: null,
    simple: false
  },
  modal: {
    paramsName: 'record',
    size: 'lg',
    exact: true
  },
  drawer: {
    paramsName: 'record',
    size: 'md',
    footer: true,
    footerHeight: 55
  },
  pop: {
    title: '确认删除吗？',
    trigger: 'click',
    placement: 'top'
  },
  btnIcon: {
    theme: 'outline',
    spin: false
  },
  noIndex: 1,
  expandRowByClick: false,
  expandAccordion: false,
  widthMode: {
    type: 'default',
    strictBehavior: 'truncate'
  },
  virtualItemSize: 54,
  virtualMaxBufferPx: 200,
  virtualMinBufferPx: 100,
  iifBehavior: 'hide',
  loadingDelay: 0,
  safeType: 'safeHtml',
  date: {
    format: `yyyy-MM-dd HH:mm`
  },
  yn: {
    truth: true,
    yes: '是',
    mode: 'icon'
  }
};
