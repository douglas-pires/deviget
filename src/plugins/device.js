/**
 *
 * @param {VueInstance} Vue a default plugin structure.
 *
 * This case could be much more sophisticated, listening to the viewport changes,
 * for example, if you are using the Chrome Dev Tools to adjust the viewport.
 * But I think it would increase the complexity unnecessarily for this test purpose.
 */
const install = Vue => {
  Vue.prototype.$device = {
    isMobile: window.innerWidth < 768,
    isDesktop: window.innerWidth >= 768
  };
};

export default { install };
