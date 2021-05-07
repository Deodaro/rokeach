<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Страница не найдена!</h1>
        <p><router-link class="link" to="/">Вернуться на главную</router-link></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-content {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
} 
</style>