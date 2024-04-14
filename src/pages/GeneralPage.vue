<script setup lang="ts">
import CardPlace from '~/components/ui/CardPlace.vue';
</script>

<template>
  <section class="general__marketing">
    <div class="container">
      <div class="marketing__inner">
        <h3 class="marketing__title">Места, которые могут Вам понравиться</h3>
        <div class="marketing__hero">
          <ul class="marketing__list">
            <li class="marketing__item">
              <card-place />
            </li>
            <li class="marketing__item">
              <card-place />
            </li>
            <li class="marketing__item">
              <card-place />
            </li>
          </ul>
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
.marketing__item img {
  max-width: 300px;
}
</style>
