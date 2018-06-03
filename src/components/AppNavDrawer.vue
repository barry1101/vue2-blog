<template>
  <mu-drawer @close="onDrawerClose" :open="open" :docked="docked" :overlay="docked" class="my-appdrawer">
    <!-- header -->
    <mu-appbar class="my-header" :zDepth="0">
      <div class="my-header-avatar">
        <mu-avatar slot="left" :src="userInfo.avatar" :size="100" />
      </div>
      <div class="my-header-info">
        <strong>{{userInfo.nickName}}</strong>
      </div>
    </mu-appbar>    
    <!-- 导航列表 -->
    <mu-list @itemClick="onMenuClick" @change="onMenuChange" :value="menuVal">
      <mu-list-item title="首页" value="/" to="/">
        <mu-icon slot="left" value="home" />
      </mu-list-item>
      <mu-list-item title="文章" value="/articles" to="/articles">
        <mu-icon slot="left" value="import_contacts" />       
      </mu-list-item>
      <mu-list-item title="动态" value="/dynamics" to="/dynamics">
        <mu-icon slot="left" value="stars" />       
      </mu-list-item>
      <mu-list-item title="关于" value="/about" to="/about">
        <mu-icon slot="left" value="info" />     
      </mu-list-item>     
    </mu-list>
  </mu-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      menuVal: this.$route.fullPath
    };
  },

  computed: {
    ...mapState(["userInfo"])
  },

  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onDrawerClose() {
      this.$emit("close");
    },
    onMenuClick() {
      if (!this.docked) {
        this.onDrawerClose();
      }
    },
    onMenuChange(val) {
      this.menuVal = val;
    }
  }
};
</script>

<style scoped lang="less">
.my-appdrawer {
  width: 256px;
  display: flex;
  flex-direction: column;
}

.my-header {
  height: 240px;
}

.my-header-avatar {
  margin-top: 40px;
}

.my-header-info {
  margin-top: -10px;
  margin-left: 5px;
}

// .my-header-p {
//   color: #cfd8dc !important;
//   font-size: 16px;
//   margin-top: -18px;
// }

@media (max-width: 767px) and (orientation: landscape) {
  .my-appdrawer {
    //width: 256px;
    display: inherit;
    flex-direction: inherit;
  }
}
</style>

