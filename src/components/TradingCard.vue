<template>
    <div :key="cardId" class="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
        :style="{ backgroundImage: 'url(' + imagePath + ')', transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)` }">
    </div>
    {{ name }}
</template>

<script>
import card3DEffect from '../mixins/3dEffectMixin.js';

export default {
    name: 'TradingCard',
    mixins: [card3DEffect],
    props: ['cardId', 'imagePath', 'name'],
    data() {
    },
    methods: {
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
    transform: scale(1.05);
}
</style>