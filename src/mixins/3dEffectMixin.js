export default {
    data() {
      return {
        rotationX: 0,
        rotationY: 0
      };
    },
    created() {
        this.intervalId = setInterval(() => {
            let changeX = (Math.random() - 0.5); // Random value between -0.1 and 0.1
            let changeY = (Math.random() - 0.5); // Random value between -0.1 and 0.1

            // If rotationX or rotationY are too far from 0, reduce the amount added
            if (Math.abs(this.rotationX + changeX) > 10) {
                changeX /= 2    ;
            }
            if (Math.abs(this.rotationY + changeY) > 10) {
                changeY /= 2;
            }

            this.rotationX += changeX;
            this.rotationY += changeY;
        }, 1);
    },
    beforeDestroy() {
        // Clear the interval when the component is destroyed
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    },
    methods: {
      map(val, minA, maxA, minB, maxB) {
        return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
      },
      card3D(ev) {
        const card = ev.target;
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const mouseX = ev.clientX;
        const mouseY = ev.clientY;
        const rotationX = this.map(mouseY - centerY, -cardRect.height / 2, cardRect.height / 2, -10, 10);
        const rotationY = this.map(mouseX - centerX, -cardRect.width / 2, cardRect.width / 2, -10, 10);
        this.rotationX = rotationX;
        this.rotationY = rotationY;
      },
      handleMouseMove(ev) {
        this.card3D(ev);
      },
      handleMouseLeave() {
        this.rotationX = 0;
        this.rotationY = 0;
      }
    }
  };