<template>
  <div>
    <mu-sub-header class="my-sub-header">搜索 {{keyword}} 的结果</mu-sub-header>
    <template v-for="(item, index) in searchList">
      <app-article-card v-if="item.title" :article="item" @click.native="go(item)" :key="index" />
      <app-dynamic-card v-else :dynamic="item" :key="index" />
    </template>
    <mu-back-top />
    <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["keyword"],

  data() {
    return {
      loading: false,
      scroller: null,
      loadingText: "正在加载..."
    };
  },

  mounted() {
    this.scroller = window;
    this.getSearchList(this.keyword, 1);
  },

  computed: {
    ...mapState(["searchList", "searchListPage"])
  },

  watch: {
    keyword() {
      this.cleanSearchList();
      this.getSearchList(this.keyword, 1);
    }
  },

  methods: {
    ...mapActions([
      "getSearchList",
      "saveTemp",
      "upSearchListPage",
      "cleanSearchList"
    ]),
    go(item) {
      this.saveTemp(item);
      this.$router.push({ name: "Article", params: { id: item.id } });
    },
    loadMore() {
      this.loading = true;
      this.upSearchListPage();
      this.getSearchList(this.keyword, this.searchListPage).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>
