export default {
    data() {
      return {
        rotationX: 0,
        rotationY: 0
      };
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