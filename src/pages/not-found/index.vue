<template>
  <div class="not-found-page">
    <div class="not-found-page__inner">
      <img
        src="/images/something-wrong.svg"
        alt=""
        class="not-found-page__img"
      />
      <div class="not-found-page__code">{{ code }}</div>
      <div class="not-found-page__text">
        <template v-if="code === 404">
          Кажется, что-то пошло нет так. <br>
          Страница, которую вы запрашиваете, не&nbsp;существует.
          Возможно, она&nbsp;устарела, была&nbsp;удалена, или&nbsp;был&nbsp;введен неверный&nbsp;адрес&nbsp;в&nbsp;адресной&nbsp;строке.
        </template>
        <template v-else-if="code === 403">
          К сожалению, у вас нет доступа <br>к просмотру информации <br>в данной компании
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundPage',

  props: {
    code: {
      type: Number,
      default: 404
    }
  }
});
</script>

<style lang="scss" scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  &__inner {
    padding-top: 64px;
    padding-left: 16px;
    padding-right: 16px;
  }

  &__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &__code {
    margin-top: 24px;
    margin-bottom: 4px;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    color: var(--color-black);
  }

  &__text {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: var(--color-grey-500);
  }
}
</style>
