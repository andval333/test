<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="place-card">
    <router-link to="/">
      <div class="place-card__img">
        <img src="/content/images/void-image.png" alt="" />
      </div>
      <p class="place-card__title">Ресторон Арт</p>
      <p class="place-card__address">Г.Симферполь ул. Пушкина 5</p>
      <div class="place-card__info">
        <div class="place-card__testimonials">Отзывов: 3</div>
        <div class="place-card__rating">Оценка: 5</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.place-card {
  max-width: 300px;
  width: 100%;
  background: #4b8fb9;
  background: linear-gradient(128deg, rgb(103, 151, 255) 0%, rgba(74, 79, 255, 1) 100%);
  border-radius: 20px;
}
.place-card a {
  display: inline-block;
  width: 100%;
  min-height: 450px;
  padding: 20px;
  color: var(--general-text);
  display: flex;
  flex-direction: column;
}
.place-card__img img {
  border-radius: 15px;
}
.place-card__title {
  font-size: 25px;
  font-weight: 500;
  margin-top: 15px;
}
.place-card__address {
  font-size: 16px;
  margin-top: 10px;
}
.place-card__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-top: auto;
}
.place-card__testimonials {
}
.place-card__rating {
}
</style>
