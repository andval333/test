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
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <router-link to="/">
            <img src="/content/icons/logo.svg" alt="log" />
            <span class="header__logo-name">Place List</span>
          </router-link>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li v-for="item in headerNav" :key="item.name" class="header__nav-item">
              <router-link :to="item.link">{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="header__location">
          <svg
            id="Layer_1"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#f0f0f0"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              ></path>
            </g>
          </svg>
          <p>Г. Симферополь</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.322);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo a {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header__logo img {
  max-width: 40px;
}
.header__logo-name {
  flex-shrink: 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--general-text);
}
.header__nav {
  max-width: 500px;
  width: 100%;
}
.header__nav-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__nav-item {
  position: relative;
}
.header__nav-item a {
  color: var(--general-text);
  font-size: 18px;
}
.header__nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  top: 100%;
  right: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.603);
  transition: right var(--transition);
}
.header__nav-item:hover::after {
  right: 0;
}
.header__location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
}
.header__location svg {
  max-width: 24px;
}
</style>
