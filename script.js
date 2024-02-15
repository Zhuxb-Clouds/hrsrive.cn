const { createApp } = Vue;
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
console.log("scroll", scroll);
createApp({
  data() {
    return {
      wheel: window.wheel,
    };
  },
  beforeDestroy() {
    clearInterval(timer);
  },
  methods: {},
  computed: {
    logoStyle() {
      return {
        /* 居中 */
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        /* height: 5rem; */
      };
    },
  },
}).mount("#app");
