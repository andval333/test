<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const offerSlides = [
  {
    title: 'СУПЕР ЦЕНА',
    descr: 'Штукатурка гипсовая машинного нанесения KNAUF MP 75 30кг',
    oldPrice: '650',
    newPrice: '567',
    img: '/content/images/offer-image.png',
    id: 1,
  },
  {
    title: 'МЕГА ЦЕНА',
    descr: 'Штукатурка гипсовая машинного нанесения KNAUF MP 75 30кг',
    oldPrice: '1234',
    newPrice: '999',
    img: 'https://fuzeservers.ru/wp-content/uploads/3/7/b/37b8775656f08e6a95bc1cb87563e40e.png',
    id: 2,
  },
  {
    title: 'ЛУЧШАЯ ЦЕНА',
    descr: 'Штукатурка гипсовая машинного нанесения KNAUF MP 75 30кг',
    oldPrice: '12345',
    newPrice: '9999',
    img: '/content/images/offer-image.png',
    id: 3,
  },
];
</script>

<template>
  <section class="main__offers offers">
    <div class="container">
      <div class="offers__inner">
        <swiper
          :modules="[Pagination]"
          :slides-per-view="1"
          :space-between="15"
          :pagination="{ clickable: true }"
          :grab-cursor="true"
          class="slider__swiper"
        >
          <swiper-slide v-for="item in offerSlides" :key="item.id" class="slider__slide">
            <div class="slider__inner">
              <div class="slider__info">
                <h2 class="slider__info-title">{{ item.title }}</h2>
                <p class="slider__info-desc">
                  {{ item.descr }}
                </p>
                <div class="slider__info-price">
                  <span class="slider__info-oldPrice">{{ item.oldPrice }}</span>
                  <span class="slider__info-newPrice">{{ item.newPrice }}</span>
                </div>
              </div>
              <div class="slider__image">
                <img width="736" height="431" :src="item.img" alt="" class="slider__img" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offers {
  margin-bottom: 152px;
}

.slider__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 178px 64px 165px;
  background: rgb(64, 120, 189);
  border-radius: 38px;
}
.slider__info {
  max-width: 700px;
}
.slider__info-title {
  color: rgb(249, 189, 58);
  font-size: 70px;
  font-weight: 800;
  line-height: 85px;
  margin-bottom: 40px;
}
.slider__info-desc {
  font-size: 32px;
  font-weight: 500;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 57px;
}
.slider__info-price {
  padding: 19px 47px;
  border-radius: 24px;
  background: var(--button-color);
  transform: rotate(-4.92deg);
  display: inline-block;
}
.slider__info-oldPrice {
  position: relative;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  color: #fff;
  margin-right: 29px;
}
.slider__info-oldPrice::after {
  content: '';
  position: absolute;
  left: -15px;
  right: -15px;
  top: calc(50% - 2px);
  height: 4px;
  transform: rotate(-10deg);
  background: red;
}
.slider__info-newPrice {
  font-size: 55px;
  font-weight: 600;
  line-height: 67px;
  color: #fff;
}
.slider__image {
  max-width: 736px;
  max-height: 461px;
}
.slider__img {
}

:deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  background: rgb(232, 162, 12);
}

:deep(.swiper-pagination .swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
}

:deep(.swiper-pagination.swiper-pagination-clickable) {
  position: static;
  margin-top: 20px;
}
</style>
