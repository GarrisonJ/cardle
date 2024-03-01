<template>
  <div :class="{ shake: this.isShaking }" 
  class="card-pack" 
  @click="explodeCards"
  @mousemove="handleMouseMove" 
  @mouseleave="handleMouseLeave"
  :style="{ transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)` }"
  >
    <div class="crimps top"></div>
    Pack {{ this.packId }}
    <div class="crimps bottom"></div>
  </div>
</template>

<script>
import card3DEffect from '../mixins/3dEffectMixin.js';

export default {
  name: 'CardPack',
  mixins: [card3DEffect],
  props: ['packId', 'cards'],
  data() {
    return {
      shakingDuration: 500,
      isShaking: false,
    };
  },
  methods: {
    explodeCards() {
      if (this.isShaking) return; // Prevent exploding an already exploded pack

      this.isShaking = true;

      setTimeout(() => {
        this.isShaking = false;
        // Proceed with your logic after shaking
        // For example, revealing cards
        this.$emit('open-animation-ended');

      }, 1000); // Adjust timeout to match your CSS animation duration
    }
  },
};
</script>

<style scoped>
.card-pack {
  cursor: pointer;
  width: 240px; 
  height: 336px;
  background-color: rgb(109, 116, 148);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow:1px 4px 7px 1px rgba(0, 0, 0, 0.8);
}
.card-pack:hover {
  box-shadow:4px 6px 9px 3px rgba(0, 0, 0, 0.8);
  transform: scale(1.05);
}

.crimps {
  position: absolute;
  left: -5px;
  height: 20px; /* Height of the crimps */
  width: 250px;
  background-image: repeating-linear-gradient(
    90deg,
    rgb(148, 151, 165),
    rgb(148, 151, 165) 2px,
    rgb(109, 116, 148) 2px,
    rgb(109, 116, 148) 4px /* Adjust the color to match the card pack */
  );
}

.crimps::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Adjust this to control the shadow's height */
  box-shadow:3px 5px 5px 4px rgba(0, 0, 0, 0.5);
  z-index: -1;
}
.top, ::before {
  top: 0px;
  border-bottom-left-radius: 8px; /* Adjust to match the card pack's border-radius */
  border-bottom-right-radius: 8px;
}

.bottom, ::before {
  bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}


.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>

