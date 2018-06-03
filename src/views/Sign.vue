<template>
  <div class="login-bg">
    <mu-paper class="login-dialog" :zDepth="2">
      <form @submit.prevent="submit">
        <mu-text-field label="用户名" hintText="请输入用户名" v-model="nickName" labelFloat /><br/>
        <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="passWord" labelFloat /><br/>
        <mu-raised-button label="登录" type="submit" class="my-submit" secondary />  
      </form>    
    </mu-paper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName: "",
      passWord: ""
    };
  },

  methods: {
    submit() {
      console.log(this.nickName);
      console.log(this.passWord);
    }
  }
};
</script>


<style scoped>
.login-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00897b;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-dialog {
  padding: 50px;
}

@media (max-width: 993px) {
  .login-dialog {
    padding: 30px;
  }
}
</style>
