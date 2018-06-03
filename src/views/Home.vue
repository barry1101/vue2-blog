<template>
  <div>
    <mu-sub-header class="my-sub-header">最近更新</mu-sub-header>
    <template v-for="(item, index) in list">
      <app-article-card v-if="item.title" :article="item" @click.native="go(item)" :key="index" />
      <app-dynamic-card v-else :dynamic="item" :key="index" />
    </template>
    <mu-back-top />
    <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore" />
  </div>
</template>

<script scope>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,
      scroller: null,
      loadingText: "正在加载..."
    };
  },

  mounted() {
    this.scroller = window;
    this.list.length || this.getList(1);
  },

  computed: {
    ...mapState(["list", "listPage"])
  },

  methods: {
    ...mapActions(["getList", "saveTemp", "upListPage"]),
    go(item) {
      this.saveTemp(item);
      this.$router.push({ name: "Article", params: { id: item.id } });
    },
    loadMore() {
      this.loading = true;
      this.upListPage();
      this.getList(this.listPage).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>
