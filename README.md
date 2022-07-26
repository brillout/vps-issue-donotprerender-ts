```
DEBUG=vps:extractExportNames pnpm run build
```

Observe how `ts.page.vue` was transformed to include a wildcard re-export:

```
vps:extractExportNames id: /home/romuuu/tmp/vps-issue-donotprerender-ts/pages/ts.page.vue?extractExportNames&lang.vue 
result:
export const exportNames = ["default"];
export const hasReExports = true; 
src:
import _sfc_main from "/home/romuuu/tmp/vps-issue-donotprerender-ts/pages/ts.page.vue?vue&type=script&lang.ts";
export * from "/home/romuuu/tmp/vps-issue-donotprerender-ts/pages/ts.page.vue?vue&type=script&lang.ts";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(` ts `);
}
import { useSSRContext as __vite_useSSRContext } from "vue";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ts.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
import _export_sfc from "\0plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
```
