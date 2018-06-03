<template>
  <div id="app">
    <!-- app bar -->
    <mu-appbar v-if="!isLoginPage" :title="title" class="my-appbar" :class="{'nav-hide' : !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
      <mu-icon-button @click="onDialogOpen" icon="search" slot="right" />
    </mu-appbar>
    <!-- 搜索对话框 -->
    <mu-dialog :open="searchDialog" title="搜索" @close="onDialogClose" dialogClass="my-dialog">
      <div class="my-search">
        <mu-text-field v-model="keyword" hintText="输入关键字..." />      
      </div>
      <mu-flat-button slot="actions" @click="onDialogClose" label="取消" primary />
      <mu-flat-button slot="actions" @click="search" label="确定" primary />
    </mu-dialog>
    <!-- 抽屉 -->
    <app-nav v-if="!isLoginPage" @change="onMenuChange" @close="toggleNav" :open="open" :docked="docked" />
    <!-- 主体 -->
    <div class="my-content" :class="{'nav-hide': !open, 'login-page': isLoginPage}">
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavDrawer from "./components/AppNavDrawer";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    "app-nav": AppNavDrawer
  },

  data() {
    const desktop = this.isDesktop();
    return {
      title: "",
      open: desktop,
      docked: desktop,
      desktop: desktop,
      searchDialog: false,
      selectValue: "All",
      keyword: ""
    };
  },

  computed: {
    ...mapState(["userInfo"]),
    isLoginPage() {
      if (this.$route.fullPath === "/login") {
        return true;
      }
      return false;
    }
  },

  mounted() {
    this.getUserInfo().then(() => {
      document.title = this.userInfo.nickName;
    });
    this.routes = this.$router.options.routes;
    this.setTitle(this.$route);
    this.$router.afterEach(this.setTitle);
    this.changeNav();
    this.handleResize = () => {
      this.changeNav();
    };
    window.addEventListener("resize", this.handleResize);
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    ...mapActions(["getUserInfo"]),
    toggleNav() {
      this.open = !this.open;
    },
    onMenuChange() {
      if (!this.desktop) this.open = false;
    },
    changeNav() {
      const desktop = this.isDesktop();
      this.docked = desktop;
      if (desktop === this.desktop) return;
      if (!desktop && this.desktop && this.open) {
        this.open = false;
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true;
      }
      this.desktop = desktop;
    },
    setTitle(to) {
      for (let i = 0; i < this.routes.length; i++) {
        let route = this.routes[i];
        if (route.path === to.path) {
          this.title = route.alias || "";
          return;
        }
      }
    },
    onSelect(value) {
      this.selectValue = value;
    },
    onDialogOpen() {
      this.keyword = "";
      this.searchDialog = true;
    },
    onDialogClose() {
      this.searchDialog = false;
    },
    search() {
      this.onDialogClose();
      if (this.keyword != "") {
        this.$router.push({
          name: "Search",
          params: { keyword: this.keyword }
        });
      }
    },
    isDesktop() {
      return window.innerWidth > 993;
    }
  }
};
</script>

<style scoped lang="less">
@import "../node_modules/muse-ui/src/styles/themes/variables/default.less";
@import "../node_modules/muse-ui/src/styles/mixins.less";
.my-appbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all 0.45s @easeOutFunction;
  &.nav-hide {
    left: 0;
  }
}

.my-content {
  padding-top: 56px;
  padding-left: 256px;
  transition: all 0.45s @easeOutFunction;
  &.nav-hide {
    padding-left: 0;
  }
}

.content-wrapper {
  padding: 32px 32px;
}

.login-page {
  padding: 0;
  .my-content {
    transition-duration: 0s;
  }
}

.my-search {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 480px) {
  .my-content {
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .my-appbar {
    left: 0;
  }
  .my-content {
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 16px;
  }
}
</style>


