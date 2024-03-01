<template>
    <div :key="cardId" class="card"
        @mousemove="handleMouseMove($event)"
        @mouseleave="handleMouseLeave($event)"
        :style="dynamicStyles">
    </div>
    {{ name }}
</template>

<script>
import card3DEffect from '../mixins/3dEffectMixin.js';

export default {
    name: 'TradingCard',
    mixins: [card3DEffect],
    props: ['cardId', 'imagePath', 'name'],
    computed: {
        dynamicStyles() {
            let transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
            if (this.hovering) {
                transform += ' scale(1.10)';
            }
            return {
                backgroundImage: 'url(' + this.imagePath + ')',
                transform: transform,
            };
        }
    }
};
</script>

<style scoped>
.card {
    width: 240px; 
    height: 336px;
    background-color: white;
    border: 1px solid #000;
    border-radius: 6px;
    text-align: center;
    line-height: 160px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow:1px 4px 7px 1px rgba(0, 0, 0, 0.8);
}

.card:hover {
    box-shadow:4px 6px 9px 3px rgba(0, 0, 0, 0.8);
}
</style>