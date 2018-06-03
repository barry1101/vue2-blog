<template>
  <!-- 回复评论块 -->
  <form @submit.prevent="submit" class="my-comment-wrapper"> 
    <mu-sub-header>若收到回复，将以电子邮件的形式通知你</mu-sub-header>
    <mu-text-field hintText="昵称（可选）" v-model="nickName" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="nickMaxLength" icon="face" />
    <mu-text-field hintText="电子邮箱（可选）" v-model="email" type="email" icon="email" /><br />
    <mu-text-field :hintText="contentHintText" v-model="content" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" 
          :maxLength="contentMaxLength" multiLine :rows="contentRows" icon="comment" fullWidth /><br/>
    <mu-raised-button label="发送" class="my-submit" type="submit" primary /> 
  </form> 
</template>
<script>
export default {
  data() {
    return {
      nickName: "",
      email: "",
      content: "",
      inputErrorText: "",
      multiLineInputErrorText: ""
    };
  },

  props: {
    nickMaxLength: {
      type: Number,
      default: 10
    },
    contentMaxLength: {
      type: Number,
      default: 200
    },
    contentRows: {
      type: Number,
      default: 3
    },
    contentHintText: {
      default: "输入评论..."
    }
  },

  methods: {
    handleInputOverflow(isOverflow) {
      this.inputErrorText = isOverflow ? "超过啦！！！！" : "";
    },
    handleMultiLineOverflow(isOverflow) {
      this.multiLineInputErrorText = isOverflow ? "超过啦！！！！" : "";
    },
    submit() {
      console.log(this.nickName);
      console.log(this.email);
      console.log(this.content);
    }
  }
};
</script>

