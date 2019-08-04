<template>
  <div class="login_box">
    <div class="login">
      <header><img src="../../assets/login/logo.png" alt=""></header>
      <div class="input_box">

        <cube-input
        class="user_name"
        :model="userName"
        v-model="userName"
        :placeholder= "uesePlaceholder"
        ></cube-input>

        <cube-input
        class="password"
        :type="type"
        :model="password"
        v-model="password"
        :placeholder= "passwordPlaceholder"
        :eye="eye"
        ></cube-input>

        <cube-button class="forget_password">忘记密码</cube-button>
        <cube-button
        class="submit"
        @click="login('myPopup')"
        >
        登录</cube-button>
      </div>
      <div class="registered_box">
        没有账号吗？那就<cube-button class="registered" @click="registeredRouter">&nbsp;注册一个吧</cube-button>
      </div>
    </div>
    <cube-popup
    type="my-popup"
    :mask="false"
    ref="myPopup">
      <div class="popup">
        {{ popupText }}
      </div>
    </cube-popup>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      userName: '',
      password: '',
      uesePlaceholder: '请输入用户名',
      passwordPlaceholder: '请输入密码',
      type: 'password',
      popupText: '',
      eye: {
        open: false,
        reverse: false
      }
    }
  },
  mounted () {
  },
  methods: {
    registeredRouter: function () {
      this.$router.push('/registered')
    },
    login: function (refId) {
      // 用户名正则，4到16位（字母，数字，下划线，减号）
      let uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      const component = this.$refs[refId]
      if (this.userName == '') {
        this.popupText = '请输入账号！'
        component.show()
        setTimeout(() => {
          component.hide()
        }, 2000)
        return false
      }
      if (this.password == '') {
        this.popupText = '请输入密码！'
        component.show()
        setTimeout(() => {
          component.hide()
        }, 2000)
        return false
      }
      if (!uPattern.test(this.userName)) {
        this.popupText = '请输入正确的账号格式'
        component.show()
        setTimeout(() => {
          component.hide()
        }, 2000)
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login_box{
   height: 100%;
  background: url('../../assets/login/timg.jpg') no-repeat;
  background-size: 100%, 100%;
}
header{
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'sub-528-1564024666865';
}
header img {
  width: 100px;
}
.registered_box{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
}
.registered{
  // position: absolute;
  // right: 0;
  // top: 0;
  display: inline;
  width: auto;
  padding: 0;
  text-align: center;
  font-size: 16px;
  color: #308a18;
  background: rgba($color: #000000, $alpha: 0);
}
.login{
  height: 100%;
  background: rgba(0,  0, 0, .5);
}
.input_box{
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 90%;
  margin: 0 auto;
}
.cube-input{
  border: 0;
}
.user_name, .password{
  background: rgba($color: #000000, $alpha: 0);
  // border-bottom: 1PX solid #ebebeb;
}
.password{
  margin-top: 20px;
}
.submit{
  // margin-top: 30px;
  background: #16a9e7;
}
.forget_password{
  width: auto;
  float: right;
  background: rgba($color: #000000, $alpha: 0);
  text-align: right;
  font-size: 14px;
  color: #ccc;
}
.popup{
  padding: 20px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, .8);
}
</style>
