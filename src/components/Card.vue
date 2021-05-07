<template>
  <div class="card">
    <p> {{ card.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card {
  // display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48%;
  // width: 30%;
  height: 100px;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  // margin: 1em;
  p {
    text-align: center;
  }
}
</style>