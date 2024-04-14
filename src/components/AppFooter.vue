<script setup lang="ts">
import { RouterLink } from 'vue-router';
const headerNav = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Оставить отзыв',
    link: '/',
  },
  {
    name: 'Найти место',
    link: '/',
  },
  {
    name: 'Контакты',
    link: '/',
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logo">
          <router-link to="/">
            <img src="/content/icons/logo.svg" alt="log" />
            <span class="footer__logo-name">Place List</span>
          </router-link>
        </div>
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li v-for="item in headerNav" :key="item.name" class="footer__nav-item">
              <router-link :to="item.link">{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
        <p class="footer__text">Сервис отзывов о местах, где вы побывали</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 20px 0;
  border-top: 1.5px solid rgba(0, 0, 0, 0.322);
}
.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.footer__logo a {
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer__logo img {
  max-width: 40px;
}
.footer__logo-name {
  flex-shrink: 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--general-text);
}
.footer__nav {
  max-width: 500px;
  width: 100%;
}
.footer__nav-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__nav-item a {
  color: var(--general-text);
  font-size: 18px;
}
.footer__text {
  font-size: 18px;
  margin-top: 35px;
}
</style>
