<template>
  <div class="language-nav">
    <div class="locale-links">
      <span 
        :id="`locale-link-${locale.code}`"
        class="locale-link"
        :class="{ 'is-active': $i18n.locale === locale.code }"
        v-for="locale in locales"
        :key="locale.code"
        @click="switchLanguage(locale.code)">
        {{ locale.name }}
      </span>
    </div>
  </div>
</template>
<script>
import locales from '@/locales.json';

export default {
  data() {
    return { 
      opened: false,
    }
  },
  methods: {
    switchLanguage(locale) {
      this.$router.push(this.switchLocalePath(locale));
    },
    closeLanguageNav() {
      this.opened = false;
    },
  },
  computed: {
    locales: () => locales,
    locale() {
      return this.$i18n.locale;
    },
  },
};
</script>
<style scoped>
.locale-link {
  cursor: pointer;
  color: teal;
}
</style>
