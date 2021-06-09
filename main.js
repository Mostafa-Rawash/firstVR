// flag is the oposite direction of y and the sign of x

// to return the val of y position
function position_z(val_x, radius) {
  // console.log(Math.abs(Math.sqrt(radius * radius - val_x * val_x)));
  return Math.abs(Math.sqrt(radius * radius - val_x * val_x));
}

AFRAME.registerComponent("my_rotation", {
  init: function () {
    let radius = this.el.object3D.position.x;
    let flag = 0;
    setInterval(() => {
      this.el.object3D.rotation.x += 0.0005;

      //will work with positive z
      if (flag == 0) {
        this.el.object3D.position.z = position_z(
          this.el.object3D.position.x,
          radius
        );
        this.el.object3D.position.x -= 0.1;
      } else if (flag == 1) {
        this.el.object3D.position.z = -position_z(
          this.el.object3D.position.x,
          radius
        );
        this.el.object3D.position.x += 0.1;
      }

      if (this.el.object3D.position.x == radius) {
        flag = 0;
      } if (this.el.object3D.position.x <= -radius) {
        flag = 1;
      }
      console.log(-radius);
    }, 0);
  },
});


const constraints = {
  video: {
    facingMode: "environment",
  }
};

const video = document.querySelector('video');

navigator.mediaDevices.getUserMedia(constraints).
  then((stream) => {video.srcObject = stream});