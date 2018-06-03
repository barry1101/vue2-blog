<template>
  <div>
    <app-dynamic-card v-for="(item, index) in dynamicList" 
      :key="index"
      :dynamic="item" />
    <mu-back-top />
    <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
    this.dynamicList.length || this.getDynamicList(1);
  },

  computed: {
    ...mapState(["dynamicList", "dynamicListPage"])
  },

  methods: {
    ...mapActions(["getDynamicList", "upDynamicListPage"]),
    loadMore() {
      this.loading = true;
      this.upDynamicListPage();
      this.getDynamicList(this.dynamicListPage).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>
