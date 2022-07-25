
import { createSSRApp, createApp, h } from "vue";

export function createPageApp(pageContext, clientOnly) {
  const { Page: PageComponent, pageProps } = pageContext;
  const createAppFunc = clientOnly ? createApp : createSSRApp;

  const page = createAppFunc({ render: _ => h(PageComponent, pageProps || {}) });
  page.provide("pageContext", pageContext);
  return page;
}
