<script setup lang="ts">
const advantages = [
  {
    img: '/content/icons/like.svg',
    title: 'Похвали',
    text: 'Оставьте положительный отзыв о месте, которое Вам понравилось',
  },
  {
    img: '/content/icons/dislike.svg',
    title: 'Пожалуйся',
    text: 'Напишите, что именно Вам не понравиилось, чтобы другие знали',
  },
  {
    img: '/content/icons/search.svg',
    title: 'Посмотри',
    text: 'Узнайте, стоит ли посетить именно это место',
  },
];
</script>

<template>
  <section class="welcome__hero">
    <div class="container">
      <div class="hero__inner">
        <h1 class="hero__title">Place List</h1>
        <h3 class="hero__subtitle">Оставьте отзыв о месте, в котором Вы побывали</h3>
        <button class="hero__button">
          <router-link to="/general">Начать пользоваться</router-link>
        </button>
      </div>
    </div>
  </section>
  <section class="advanatages">
    <div class="container">
      <div class="advanatages__inner">
        <ul class="advanatages__list">
          <li v-for="item in advantages" :key="item.title" class="advanatages__item">
            <div class="advanatages__item-head">
              <div class="advanatages__item-icon">
                <img :src="item.img" alt="" />
              </div>
              {{ item.title }}
            </div>
            <p class="advanatages__item-text">
              {{ item.text }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome__hero {
  padding: 100px 0;
}
.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
}
.hero__title {
  font-size: 100px;
  font-weight: 700;
  letter-spacing: 4px;
  text-align: center;
  background: linear-gradient(135deg, rgba(103, 199, 255, 1) 0%, rgba(74, 79, 255, 1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px #ffffff28;
}
.hero__subtitle {
  font-size: 32px;
}
.hero__button {
  position: relative;
  padding: 0;
  max-width: 300px;
  width: 100%;
  border-radius: 15px;
  background: linear-gradient(235deg, rgb(103, 151, 255) 0%, rgba(74, 79, 255, 1) 100%);
  transition: box-shadow var(--transition);
}
.hero__button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(103, 151, 255);
  border-radius: 15px;
  z-index: -1;
  transition: all var(--transition);
  animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes ping {
  15%,
  100% {
    transform: scale(1.25, 2);
    opacity: 0;
  }
}
.hero__button:hover {
  box-shadow: 0 0 20px #ffffff62;
}
.hero__button a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  color: var(--general-text);
  font-size: 20px;
  font-weight: 500;
}
.advanatages {
  padding-bottom: 140px;
}
.advanatages__inner {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
.advanatages__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.advanatages__item {
  padding: 20px;
  width: 100%;
  min-height: 200px;
  /* background: rgba(255, 255, 255, 0.116); */
  background: rgba(103, 151, 255, 0.144);
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow var(--transition);
  /* box-shadow: 0 0 10px rgba(255, 255, 255, 0.108); */
  /* backdrop-filter: blur(10px); */
}
.advanatages__item:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.508);
  /* backdrop-filter: blur(10px); */
}
.advanatages__item-head {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
}
.advanatages__item-icon {
  max-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.advanatages__item-text {
  font-size: 18px;
  opacity: 0.7;
  line-height: 1.37;
}
</style>
