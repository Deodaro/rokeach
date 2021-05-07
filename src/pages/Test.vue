<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Test Page</h1>
        <div class="cards__wrapper">
          <card
            v-for="card in cardsList" :key="card.id"
            :card="card"
          />
        </div>
      
      </div>
    </section>
  </div>
</template>

<script>
import card from '@/components/Card.vue'
export default {
  components: { card },
  data() {
    return {
      cardsList: null
    }
  },
  created () {
    this.cardsList = this.$store.getters.getCardsList
  }
}
</script>

<style lang="scss">
.cards__wrapper {
  // max-width: ;
  border: 1px solid #C0C4CC;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>