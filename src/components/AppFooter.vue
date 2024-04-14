<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logo">
          <router-link to="/">
            <img
              src="/content/images/footer-logo.png"
              alt="Легион снабжение"
              class="footer__logo-img"
            />
          </router-link>
        </div>
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <h4 class="footer__nav-title">Услуги</h4>
              <div class="footer__nav-subitem">
                <a href="#" class="footer__nav-link"> Расчет материалов </a>
              </div>
              <div class="footer__nav-subitem">
                <a href="#" class="footer__nav-link"> Доставка товара </a>
              </div>
              <div class="footer__nav-subitem">
                <a href="#" class="footer__nav-link"> Разгрузка/подъем </a>
              </div>
            </li>
            <li class="footer__nav-item">
              <h4 class="footer__nav-title">Акции</h4>
              <div class="footer__nav-subitem">
                <a href="#" class="footer__nav-link"> Все акции </a>
              </div>
            </li>
            <li class="footer__nav-item">
              <h4 class="footer__nav-title">Услуги</h4>
              <div class="footer__nav-subitem">
                <a href="#" class="footer__nav-link"> Реквизиты </a>
              </div>
              <div class="footer__nav-subitem">
                <a href="#" class="footer__nav-link"> Сертификаты </a>
              </div>
            </li>
          </ul>
        </nav>
        <div class="footer__contact">
          <h4 class="footer__contact-office">Офис в Санкт-Петербурге</h4>
          <a href="#" class="footer__contact-address">Ул. Маршала Говорова 35к4</a>
          <a href="mailto:legion.material@mail.ru" class="footer__contact-email"
            >legion.material@mail.ru</a
          >
          <a href="tel:+79117301195" class="footer__contact-phone">+7 (911)-730-11-95</a>
          <a href="#" class="footer__contact-telegram">
            <div class="footer__contact-icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
                stroke-width="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.144"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
            </div>
            Telegram
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 68px 0 166px;
  background: #2b2b2d;
  border-radius: 64px 64px 0px 0px;
  color: #ffffff;
}

.footer__inner {
  display: flex;
}
.footer__logo {
  margin-right: 147px;
}

.footer__nav-list {
  display: flex;
  gap: 60px;
}

.footer__nav-title {
  margin-bottom: 19px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}
.footer__nav-subitem {
  font-weight: 400;
  line-height: 19px;
  margin-bottom: 16px;
  transition: all var(--transition);
}

.footer__nav-subitem:last-child {
  margin-bottom: 0;
}

.footer__nav-subitem:hover {
  color: rgb(232, 162, 12);
}

.footer__nav-link {
  color: #fff;
}
.footer__contact {
  margin-left: 313px;
  display: flex;
  flex-direction: column;
}
.footer__contact-office {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
  color: #fff;
}
.footer__contact-address {
  margin-bottom: 16px;
  transition: all var(--transition);
  color: #fff;
}
.footer__contact-address:hover {
  color: rgb(232, 162, 12);
}
.footer__contact-email {
  margin-bottom: 16px;
  transition: all var(--transition);
  color: #fff;
}
.footer__contact-email:hover {
  color: rgb(232, 162, 12);
}
.footer__contact-phone {
  margin-bottom: 19px;
  transition: all var(--transition);
  color: #fff;
}
.footer__contact-phone:hover {
  color: rgb(232, 162, 12);
}
.footer__contact-telegram {
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all var(--transition);
  color: #fff;
}

.footer__contact-telegram:hover {
  color: rgb(232, 162, 12);
}
.footer__contact-telegram path {
  transition: all var(--transition);
}
.footer__contact-telegram:hover path {
  fill: rgb(232, 162, 12);
}

.footer__contact-icon {
}
</style>
