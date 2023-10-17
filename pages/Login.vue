<template>
  <section class="LoginPage">
    <div class="LoginWindow Window">
      <div class="LoginWindow__Content__Left">
        <div class="LoginWindow__Content__Left__TitleSection">
          <img src="/discord_textlogo.svg" alt="Discord Logo" class="Mobile">
         <div>
            <h1>Welcome back!</h1>
            <h2>We're so excited to see you again!</h2>
         </div>
        </div>
        <form action="/api/client/login" method="POST">
          <div>
              <label for="email">Email <Form_Required /></label>
              <input type="text" placeholder="Email" name="email" required />
          </div>
          <div>
              <label for="password">Password <Form_Required /></label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            <a href="#" class="SmallText">Forgot your password?</a>
          </div>
          <div>
            <input type="submit" value="Log In" />
            <span class="SmallText">
              Need an account? <a href="/register">Register</a>
            </span>
          </div>
        </form>
      </div>

      <div class="LoginWindow__Content__Right">
        <div class="QRCode_Placeholder">
          <img src="/login_qrcode.svg" alt="Login QR Code" class="QRCode" />
          <img
            src="/login_qrcode_logo.webp"
            alt="Login QR Code Logo"
            class="QRCode_Logo"
          />
        </div>
        <div class="LoginWindow__Content__Right__TitleSection">
          <h1>Log In with QR Code</h1>
          <h2>
            Scan this with the <strong>Discord mobile app</strong> to log in
            instantly.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
h1,
h2 {
  text-align: center;
}

input {
  width: 100%;
}

.LoginPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  background: url("/login_background.svg");
  background-size: cover;
}

.LoginWindow {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 4rem;
  width: 40%;
  min-width: 750px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  align-items: center;
  animation: FadeIn 0.25s ease-in-out;
}

.LoginWindow__Content__Left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.LoginWindow__Content__Left__TitleSection,
.LoginWindow__Content__Left__TitleSection > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.LoginWindow__Content__Left__TitleSection {
  gap: 1rem;
}


.LoginWindow__Content__Right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85%;
}

.LoginWindow__Content__Right__TitleSection {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.LoginWindow__Content__Right__TitleSection > h2 {
  font-size: 0.8rem;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .LoginWindow {
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    min-height: 100%;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .LoginWindow__Content__Right {
   display: none;
  }
}

@media screen and (max-width: 768px) {
  .LoginPage {
    background: none;
    background-color: var(--primary-color);
  }
}
</style>
;
