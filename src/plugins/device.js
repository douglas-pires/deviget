const install = Vue => {
  Vue.prototype.$device = {
    isMobile: window.innerWidth < 768,
    isDesktop: window.innerWidth >= 768
  };
};

export default { install };
