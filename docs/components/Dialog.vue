<template>
  <div class="dialog" v-if="show">
    <div class="dialog__overlay" @click="close"></div>
    <div class="dialog__content">
      <div class="container__content">
        <div v-html="message"></div>
      </div>
      <div class="container__button">
        <button v-if="isSignedIn == false" class="button" @click="signIn">
          Go to login page
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(false);
const message = ref("Authenicating...");
const isSignedIn = ref(true);

onMounted(() => verifyToken());

function verifyToken() {
  console.log("verifying token");
  let token = document.cookie
    .split(/;\s*/)
    .find((row) => row.startsWith("token="));
  if (!token) {
    message.value = "Please login to read documentation.";
    isSignedIn.value = false;
    // show.value = true;
    return;
  }

  token = token.split("=")[1];

  // TODO: send token to server and verify
  const [header, payload] = token.split(".");
  console.log(JSON.parse(atob(payload)));
  show.value = false;
  return;
}

function signIn() {
  window.location.replace("https://intranet.airborne-support.com/login");
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.dialog__content {
  position: relative;
  width: 350px;
  max-width: 90%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.container__content {
  display: flex;
  flex-direction: column;
  color: #000;
}

.container__button {
  display: flex;
  justify-content: flex-end;
}

.button {
  margin-top: 20px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #2196f3;
  color: #fff;
  padding: 10px 20px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
}
</style>