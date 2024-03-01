<template>
  <!--For testing only-->
  <h1 style="position: absolute; top: 0; z-index: 100;">
    <button @click="reset">Reset</button>
  </h1>
  <div>
    <div v-if="!selectedPack" class="packs-container">
      <div v-for="pack in packs" :key="pack.id">
          <CardPack
              v-if="pack.visible"
              :packId="pack.id"
              :class="{ 'fade-out': pack.fadeOut }"
              @click="hideOtherPacks(pack.id)"
              @open-animation-ended="displayCards(pack.id)" />
          </div>
    </div>
    <div v-if="selectedPack" class="card-container">
      <div v-for="card in selectedPack.cards" :key="card.id">
        <TradingCard :cardId="card.id" :name="card.name" :imagePath="card.imagePath"></TradingCard>
        <button>Collect</button>
      </div>
    </div>
  </div>
</template>

<script>
import packsData from '@/assets/cardsData.js';
import TradingCard from './TradingCard.vue'
import CardPack from './CardPack.vue'

export default {
  name: 'CardManager',
  components: {
    TradingCard: TradingCard,
    CardPack: CardPack
  },
  data() {
    return {
      packs: packsData.map(item => {
        return {
          ...item,
          visible: true
        };
      }),
      selectedPack: null,
    };
  },
  methods: {
    reset() {
      this.packs.forEach((pack) => {
        pack.visible = true;
        pack.fadeOut = false;
      })
      this.selectedPack = null;
    },
    hideOtherPacks(packId) {
      this.packs.forEach((pack) => {
        if (pack.id === packId) {
          pack.centered = true;
        } else {
          pack.fadeOut = true;
          setTimeout(() => {
            pack.visible = false;
          }, 200);
        }
      });
    },
    displayCards(packId) {
      const pack = this.packs.find(p => p.id === packId);
      this.selectedPack = pack;
      pack.cards.forEach((card) => {
        card.visible = true;
      });
    }
  },
};
</script>

<style scoped>
.packs-container {
  display: flex;
  gap: 20px;
  justify-content: space-around;
}

.card-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.fade-out {
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
</style>

