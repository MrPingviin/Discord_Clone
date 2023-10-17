<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Login from './pages/Login.vue'
</script>

<style>
:root {
  --primary-color: #313338;
  --input-color: #1e1f22;
  --secondary-color: #5865f2;
  --error-color: #f23f42;
  --title-color: #f2f3f5;
  --subtitle-color: #b5bac1;
  --link-color: #00a8fc;
  --text-color: #949ba4;
  --shadow-color: rgba(0, 0, 0, 0.2);

  --border-radius: 5px;
  --padding: 1rem;
}

:root {
  background-color: var(--primary-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: var(--text-color);
}

input,
select {
  background: var(--input-color);
  border: none;
  border-radius: var(--border-radius);
  padding: var(--padding);
  margin: 0.4rem 0;
  color: var(--title-color);
  font-size: 1rem;
  outline: none;
}

button,
input[type='submit'] {
  background: var(--secondary-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--title-color);
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  font-weight: 600;
}

a {
  color: var(--link-color);
  text-decoration: none;
}

button:hover,
a:hover,
input[type='submit']:hover {
  filter: brightness(0.9);
}

a:hover {
  text-decoration: underline;
}

label {
  color: var(--subtitle-color);
  font-size: 0.85rem;
  font-weight: 600;
  text-align: left;
  width: 100%;
  padding: 0rem 0.25rem;
}

h1 {
  font-weight: 600;
}

h2 {
  font-weight: 500;
}

h1 {
  font-size: 1.25rem;
  color: var(--title-color);
}

h2 {
  font-size: 1rem;
  color: var(--subtitle-color);
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

form > div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}


.QRCode {
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: var(--border-radius);
}

.QRCode_Placeholder {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
}

.QRCode_Logo {
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%);
  max-width: 50px;
  max-height: 50px;
}

.Form_Required {
  color: var(--error-color);
  font-size: 0.75rem;
  font-weight: 600;
}

.SmallText {
  font-size: 0.80rem;
}

.Window {
  box-shadow: var(--shadow-color) 0px 2px 10px 0px;
}

.Mobile,
.Hidden {
  display: none;
}

.InputHint {
  color: var(--subtitle-color);
  font-size: 0.825rem;
  animation: InputBottomTextFadeIn 0.35s ease-in-out forwards;
}

.FadeIn {
  animation: FadeIn 0.25s ease-in-out;
}

@keyframes FadeIn {
  0% {
    opacity: 0.1;
    transform: translateY(-5rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

@keyframes InputBottomTextFadeIn {
  0% {
    opacity: 0;
    display: block !important;
    height: 0%;
    transform: translateY(1rem);
  }


  100% {
    opacity: 1;
    height: 100%;
    transform: translateY(0rem);
  }
}

@media screen and (max-width: 768px) {
  .Mobile {
    display: block;
  }

  .InputHint {
    font-size: 0.65rem;
  }
}
</style>