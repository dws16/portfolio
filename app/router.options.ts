import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    const findEl = async (hash: string, x = 0) => {
      return (
        document.getElementById(hash) ||
        new Promise((resolve) => {
          if (x > 0) {
            return resolve(document.querySelector("#app"));
          }
          setTimeout(() => {
            resolve(findEl(hash, 1));
          }, 300);
        })
      );
    };
    if (to.params.params) {
      const el: any = await findEl(to.params.params as string);

      if ("scrollBehavior" in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop - 160, behavior: "smooth" });
      } else {
        return window.scrollTo(0, el.offsetTop);
      }
    }
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
