<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import CardPlace from '~/components/ui/CardPlace.vue';

const marketing = [
  'https://klike.net/uploads/posts/2023-02/1676355617_3-4.jpg',
  '/content/images/void-image.png',
  'https://klike.net/uploads/posts/2023-02/1676355617_3-4.jpg',
  '/content/images/void-image.png',
];

const aside = ref([
  {
    name: 'Все',
    value: '',
    isActive: true,
  },
  {
    name: 'Питание',
    value: '',
    isActive: false,
  },
  {
    name: 'Красота',
    value: '',
    isActive: false,
  },
  {
    name: 'Продукты',
    value: '',
    isActive: false,
  },
]);

const cardsOfPlace = [
  'https://klike.net/uploads/posts/2023-02/1676355617_3-4.jpg',
  '/content/images/void-image.png',
  'https://klike.net/uploads/posts/2023-02/1676355617_3-4.jpg',
  '/content/images/void-image.png',
  '/content/images/void-image.png',
  'https://klike.net/uploads/posts/2023-02/1676355617_3-4.jpg',
  '/content/images/void-image.png',
];

const changeTab = (item: any) => {
  aside.value.forEach((e) => {
    e.isActive = false;
  });
  item.isActive = true;
};
</script>

<template>
  <section class="general__marketing">
    <div class="container">
      <div class="marketing__inner">
        <h3 class="marketing__title">Места, которые могут Вам понравиться</h3>
        <div class="marketing__hero">
          <ul class="marketing__list">
            <li v-for="item in marketing" :key="item" class="marketing__item">
              <card-place :img="item" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="general__places">
    <div class="container">
      <h2 class="places__title">Список мест</h2>
      <div class="places__top">
        <button class="places__top-button"><router-link to="/">Найти место</router-link></button>
      </div>
      <div class="places__inner">
        <aside class="places__aside">
          <ul class="places__aside-list">
            <li
              v-for="item in aside"
              :key="item.name"
              class="places__aside-item"
              :class="{ 'places__aside-item--active': item.isActive }"
              @click="changeTab(item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </aside>
        <div class="places__hero">
          <card-place v-for="item in cardsOfPlace" :key="item" :img="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.general__marketing {
  padding: 50px 0 100px;
}
.marketing__inner {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}
.marketing__title {
  font-size: 22px;
  font-weight: 500;
}
.marketing__hero {
}
.marketing__list {
  display: flex;
  gap: 20px;
}
.marketing__item {
  max-width: 300px;
  width: 100%;
}

.general__places {
  padding-bottom: 130px;
}

.places__title {
  font-size: 60px;
  font-weight: 600;
  text-align: center;
}
.places__top {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.places__top-button {
  max-width: 250px;
  width: 100%;
  border-radius: 15px;
  background: linear-gradient(235deg, rgb(103, 151, 255) 0%, rgba(74, 79, 255, 1) 100%);
  transition: box-shadow var(--transition);
  margin-left: auto;
  padding: 0;
}
.places__top-button a {
  display: inline-block;
  padding: 15px;
  width: 100%;
  height: 100%;
  color: var(--general-text);
  font-size: 20px;
  font-weight: 500;
}
.places__top-button:hover {
  box-shadow: 0 0 20px #ffffff62;
}
.places__inner {
  display: flex;
  padding-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.137);
}
.places__aside {
  max-width: 500px;
  width: 100%;
}
.places__aside-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
}
.places__aside-item {
  font-size: 20px;
  font-weight: 500;
  padding: 15px 15px 10px 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.137);

  transition:
    background var(--transition),
    border-bottom var(--transition);
}
.places__aside-item:hover {
  border-bottom: 1px solid rgba(255, 255, 255, 0.418);
}

.places__aside-item--active {
  border-bottom: none;
  border-radius: 15px;
  background: linear-gradient(235deg, rgb(103, 151, 255) 0%, rgba(74, 79, 255, 1) 100%);
}
.places__aside-item--active:hover {
  border-bottom: none;
}
.places__hero {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
