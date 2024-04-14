<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <nav class="header__nav">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <a href="#" class="header__nav-link"
                  >О нас
                  <div class="header__nav-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9338 17.075L12 17.1334L12.0662 17.075L18.0662 11.7809L18.1511 11.7059L18.0662 11.6309L17.2662 10.925L17.2 10.8666L17.1338 10.925L12 15.4549L6.86617 10.925L6.80001 10.8666L6.73385 10.925L5.93384 11.6309L5.84886 11.7059L5.93384 11.7809L11.9338 17.075Z"
                        fill="#2B2B2D"
                        stroke="#2B2B2D"
                        stroke-width="0.2"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li class="header__nav-item">
                <a href="#" class="header__nav-link">Акции</a>
              </li>
              <li class="header__nav-item">
                <a href="#" class="header__nav-link"
                  >Услуги
                  <div class="header__nav-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9338 17.075L12 17.1334L12.0662 17.075L18.0662 11.7809L18.1511 11.7059L18.0662 11.6309L17.2662 10.925L17.2 10.8666L17.1338 10.925L12 15.4549L6.86617 10.925L6.80001 10.8666L6.73385 10.925L5.93384 11.6309L5.84886 11.7059L5.93384 11.7809L11.9338 17.075Z"
                        fill="#2B2B2D"
                        stroke="#2B2B2D"
                        stroke-width="0.2"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li class="header__nav-item">
                <a href="#" class="header__nav-link">Отзывы</a>
              </li>
              <li class="header__nav-item">
                <a href="#" class="header__nav-link"
                  >Контакты
                  <div class="header__nav-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9338 17.075L12 17.1334L12.0662 17.075L18.0662 11.7809L18.1511 11.7059L18.0662 11.6309L17.2662 10.925L17.2 10.8666L17.1338 10.925L12 15.4549L6.86617 10.925L6.80001 10.8666L6.73385 10.925L5.93384 11.6309L5.84886 11.7059L5.93384 11.7809L11.9338 17.075Z"
                        fill="#2B2B2D"
                        stroke="#2B2B2D"
                        stroke-width="0.2"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <a href="tel:+79117301195" class="header__number">+7 (911)-730-11-95</a>
        </div>
        <div class="header__bot">
          <div class="header__logo">
            <router-link to="/">
              <img
                class="header__logo-img"
                src="/content/images/header-logo.png"
                alt="Легион снабжение"
              />
            </router-link>
          </div>
          <button class="header__catalog">
            <div class="header__catalog-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9672 16.186L22.1072 16.3289L21.9672 16.186C20.3441 17.7766 19.5308 19.7251 19.5308 22.0193C19.5308 24.3133 20.3431 26.2617 21.9644 27.8524C23.5849 29.4421 25.5493 30.2385 27.8461 30.2385C28.7586 30.2385 29.6494 30.0865 30.5179 29.7831L30.452 29.5943L30.5179 29.7831C31.3308 29.499 32.0879 29.1046 32.7887 28.6005L40.3028 36.0032C40.4594 36.1574 40.711 36.1564 40.8664 36.0011L41.9989 34.8685C42.156 34.7115 42.155 34.4566 41.9968 34.3007L34.4915 26.9067C35.0173 26.229 35.4224 25.4837 35.7061 24.6717C36.0096 23.8033 36.1616 22.9124 36.1616 22C36.1616 19.7186 35.3512 17.7767 33.7345 16.1863C32.1183 14.5963 30.1546 13.8 27.8552 13.8C25.5559 13.8 23.5894 14.5963 21.9672 16.186ZM5.8 35.7231C5.8 35.944 5.97909 36.1231 6.2 36.1231H24.9154C25.1363 36.1231 25.3154 35.944 25.3154 35.7231V34.1231C25.3154 33.9022 25.1363 33.7231 24.9154 33.7231H6.2C5.97909 33.7231 5.8 33.9022 5.8 34.1231V35.7231ZM5.8 26.1462C5.8 26.3671 5.97909 26.5462 6.2 26.5462H14.7231C14.944 26.5462 15.123 26.3671 15.123 26.1462V24.5462C15.123 24.3252 14.944 24.1462 14.7231 24.1462H6.2C5.97909 24.1462 5.8 24.3252 5.8 24.5462V26.1462ZM5.8 16.5693C5.8 16.7902 5.97909 16.9693 6.2 16.9693H14.7231C14.944 16.9693 15.123 16.7902 15.123 16.5693V14.9693C15.123 14.7483 14.944 14.5693 14.7231 14.5693H6.2C5.97909 14.5693 5.8 14.7483 5.8 14.9693V16.5693ZM32.0378 26.1457C30.8869 27.2749 29.4937 27.8385 27.8461 27.8385C26.1987 27.8385 24.8054 27.2749 23.6545 26.1457C22.5041 25.017 21.9307 23.6455 21.9307 22.0193C21.9307 20.393 22.5041 19.0215 23.6545 17.8928C24.8054 16.7636 26.1987 16.2 27.8461 16.2C29.4937 16.2 30.8869 16.7636 32.0378 17.8928C33.1882 19.0215 33.7616 20.393 33.7616 22.0193C33.7616 23.6455 33.1882 25.017 32.0378 26.1457Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.4"
                />
              </svg>
            </div>
            Каталог
          </button>
          <div class="header__search">
            <input type="text" class="header__input" placeholder="ПОИСК ПО ТОВАРУ ИЛИ АРТИКУЛУ" />
            <button class="header__search-button">Найти</button>
          </div>
          <button class="header__basket">
            <div class="header__basket-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.258 21.9808L12.1572 11.25H36.0616C36.3032 11.25 36.427 11.3297 36.4999 11.4537L36.7154 11.327L36.4999 11.4537C36.5712 11.5749 36.5823 11.728 36.4577 11.9566C36.4576 11.9568 36.4575 11.957 36.4574 11.9572L31.2306 21.4501C31.1202 21.6252 30.9925 21.7554 30.8494 21.8474C30.7136 21.9347 30.5562 21.9808 30.3693 21.9808H17.258ZM39.073 12.3741L39.0731 12.3741L39.0755 12.3696C39.5078 11.5417 39.4831 10.7175 38.9973 9.93196C38.5109 9.14557 37.7745 8.75 36.8231 8.75H10.9426L9.16466 5.00692C9.09012 4.85 8.93191 4.75 8.75818 4.75H4.2C3.95147 4.75 3.75 4.95147 3.75 5.2V6.8C3.75 7.04853 3.95147 7.25 4.2 7.25H7.45756L14.6878 22.4214L11.7435 27.67L11.7425 27.6718C11.1537 28.7416 11.1696 29.8231 11.788 30.8819C12.4085 31.9443 13.3626 32.4808 14.6154 32.4808H36.1847C36.4332 32.4808 36.6347 32.2793 36.6347 32.0308V30.4308C36.6347 30.1822 36.4332 29.9808 36.1847 29.9808H14.6154C14.4634 29.9808 14.3422 29.9458 14.2426 29.8839C14.1423 29.8215 14.05 29.7228 13.9704 29.5742C13.89 29.4242 13.8583 29.2932 13.8605 29.1779C13.8627 29.0641 13.8982 28.9496 13.9773 28.831L13.9834 28.8217L13.9888 28.8119L16.3485 24.4808H30.4846C31.0824 24.4808 31.6353 24.3307 32.138 24.0299C32.6382 23.7306 33.0435 23.318 33.3533 22.797L33.3535 22.7971L33.3576 22.7895L39.073 12.3741ZM12.3059 41.5402C12.9326 42.167 13.7078 42.4808 14.6154 42.4808C15.5229 42.4808 16.2981 42.167 16.9249 41.5402C17.5516 40.9135 17.8654 40.1383 17.8654 39.2308C17.8654 38.3232 17.5516 37.548 16.9249 36.9213C16.2981 36.2946 15.5229 35.9808 14.6154 35.9808C13.7078 35.9808 12.9326 36.2946 12.3059 36.9213C11.6792 37.548 11.3654 38.3232 11.3654 39.2308C11.3654 40.1383 11.6792 40.9135 12.3059 41.5402ZM31.0751 41.5402C31.7019 42.167 32.4771 42.4808 33.3846 42.4808C34.2922 42.4808 35.0674 42.167 35.6941 41.5402C36.3208 40.9135 36.6347 40.1383 36.6347 39.2308C36.6347 38.3232 36.3208 37.548 35.6941 36.9213C35.0674 36.2946 34.2922 35.9808 33.3846 35.9808C32.4771 35.9808 31.7019 36.2946 31.0751 36.9213C30.4484 37.548 30.1346 38.3232 30.1346 39.2308C30.1346 40.1383 30.4484 40.9135 31.0751 41.5402Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
}

.header__inner {
}
.header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 0 30px;
}
.header__nav {
}
.header__nav-list {
  display: flex;
  align-items: center;
  gap: 60px;
  line-height: 19px;
}

.header__nav-link path {
  transition: all var(--transition);
}
.header__nav-link:hover {
  color: rgb(232, 162, 12);
}
.header__nav-link:hover path {
  fill: rgb(232, 162, 12);
}
.header__nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--general-text);
  transition: all var(--transition);
}

.header__number {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  transition: all var(--transition);
  color: var(--general-text);
}

.header__number:hover {
  color: rgb(232, 162, 12);
}

.header__bot {
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  gap: 20px;
}

.header__catalog {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--button-color);
  padding: 10px 24px;
  border-radius: 25px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all var(--transition);
}
.header__catalog:hover {
  background: rgb(246, 181, 43);
}

.header__catalog-icon {
  max-height: 48px;
}

.header__search {
  flex-grow: 1;
  position: relative;
}
.header__input {
  width: 100%;
  padding: 25px 24px;
  background: var(--gray-color);
  border-radius: 25px;
}
.header__input::placeholder {
  color: rgba(43, 43, 45, 0.3);
  font-size: 16px;
  font-weight: 500;
}
.header__search-button {
  position: absolute;
  right: 0;
  padding: 22px 52px;
  background: var(--button-color);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 25px;
  transition: all var(--transition);
}
.header__search-button:hover {
  background: rgb(246, 181, 43);
}
.header__basket {
  padding: 10px 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--button-color);
  transition: all var(--transition);
  border-radius: 25px;
}

.header__basket:hover {
  background: rgb(246, 181, 43);
}
</style>
