<template>
  <Dialog
    :width="'400px'"
    :visible="open"
    :title="'Login'"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @close="close"
  >
    <Form
      :statusIcon="true"
      :label-width="'auto'"
      :model="loginModel"
      :rules="formValidator"
      size="small"
      @validate="onValidate"
    >
      <FormItem :label="'Username'" required prop="username">
        <Input class="form_input" v-model="loginModel.username" />
      </FormItem>
      <FormItem :label="'Password'" required prop="password">
        <Input
          class="form_input"
          :show-password="true"
          v-model="loginModel.password"
        />
      </FormItem>
    </Form>
    <template #footer>
      <Button type="primary" :disabled="!canSubmit" @click="submitLogin">
        Login
      </Button>
      <Button type="secondary" :disabled="!canSubmit" @click="submitLogin">
        Sign Up
      </Button>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Dialog, Input, Form, FormItem, Button } from "element-ui";

@Component({
  components: {
    Dialog,
    Form,
    FormItem,
    Input,
    Button,
  },
})
export default class Login extends Vue {
  @Prop() open!: boolean;

  // https://github.com/yiminghe/async-validator
  // validatePass = (rule, value, callback: Function) => {
  //       if (value === '') {
  //         callback(new Error('Please input the password'));
  //       } else {
  //         if (this.ruleForm.checkPass !== '') {
  //           this.$refs.ruleForm.validateField('checkPass');
  //         }
  //         callback();
  //       }
  //     };

  formValidator = {
    username: [
      {
        required: true,
        type: "string",
        message: "C'mon, we need your name to log you in!",
      },
      {
        required: true,
        type: "string",
        min: 3,
        message: "Sorry, but your username is a bit too small :D",
      },
      {
        type: "string",
        whitespace: true,
        message: "Hmm, ever had a username with just spaces?!",
      },
    ],
    password: {
      required: true,
      type: "string",
      message: "We wont tell anyone, just need to authenticate it's you!",
    },
  };

  loginModel = {
    username: "",
    password: "",
  };

  formValidity: { [key: string]: boolean } = {
    username: false,
    password: false,
  };

  get canSubmit(): boolean {
    return (
      !!this.loginModel.username &&
      !!this.loginModel.password &&
      this.isFormValid
    );
  }

  submitLogin() {
    this.$emit("login", this.loginModel);
    this.loginModel.username = "";
    this.loginModel.password = "";
  }

  get isFormValid(): boolean {
    return this.formValidity.username && this.formValidity.password;
  }

  onValidate(result: string, isValid: boolean) {
    this.formValidity[result] = isValid;
  }

  @Emit()
  close() {
    return false;
  }
}
</script>

<style lang="scss" scoped>
.form_input {
  width: 100%;
}
</style>
