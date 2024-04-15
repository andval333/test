<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps({
  img: { type: String, default: '' },
});
</script>

<template>
  <div class="place-card">
    <router-link to="/">
      <div class="place-card__img">
        <img :src="img" alt="" />
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
  /* background-image: linear-gradient(120deg, #c4c4c4, #e8e8e8, #c7c7c7); */
  border-radius: 20px;
}
.place-card a {
  display: inline-block;
  width: 100%;
  min-height: 400px;
  padding: 20px;
  color: var(--general-text);
  display: flex;
  flex-direction: column;
}
.place-card__img {
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e2e2e2;
  border-radius: 15px;
  padding: 10px;
}
.place-card__img img {
  border-radius: 15px;
  max-height: 100%;
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
