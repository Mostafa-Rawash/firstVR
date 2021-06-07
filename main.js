const sky = document.querySelector("a-sky");
let NUM = 2;
AFRAME.registerComponent("set-sky", {
  init: function () {
//     setInterval(() => {
      console.log(NUM);
      sky.setAttribute("src", `#earth_${NUM++}`);
      if ((NUM == 5)) {
        NUM = 1 ;
      }
//     }, 10000);
  },
});
