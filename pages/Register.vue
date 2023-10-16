<template>
    <section class="RegisterPage">
        <div class="RegisterWindow Window">
           <div class="RegisterWindow__TitleSection">
            <img src="/discord_textlogo.svg" alt="Discord Logo" class="Mobile">
            <h1>Create an account</h1>
           </div>
            <form action="#" method="POST">
                <div>
                    <label for="email">Email <Form_Required /></label>
                    <input type="text" placeholder="Email" name="email" required />
                </div>
                <div>
                    <label for="displayname">Display Name </label>
                    <input type="text" placeholder="Display Name" name="displayname" v-on:focusin="isDisplayNameHintVisibleSwitcher" v-on:focusout="isDisplayNameHintVisibleSwitcher"/>
                    <span v-if="isDisplayNameHintVisible" class="InputHint">This is how others see you. You can use special characters and emoji.</span>
                </div>
                <div>
                    <label for="username">Username <Form_Required /></label>
                    <input type="text" placeholder="Username" name="username" required />
                </div>
                <div>
                    <label for="password">Password <Form_Required /></label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                    />
                </div>
                <div>
                    <label for="birthday">Date of Birth <Form_Required /></label>
                    <div class="Birthday__Selector">
                        <input type="number" name="birth_day" placeholder="Day" required>
                        <input type="number" name="birth_month" placeholder="Month" required>
                        <input type="number" name="birth_year" placeholder="Year" required>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Register" />
                    <span class="SmallText">
                        Already have an account? <a href="/login">Log In</a>
                    </span>
                </div>
            </form>
        </div>
    </section>
</template>
 
<script setup lang='ts'>
    const isDisplayNameHintVisible = ref(false);
    const isDisplayNameHintVisibleSwitcher = () => {
        isDisplayNameHintVisible.value = !isDisplayNameHintVisible.value;
    }
</script>




 
<style scoped>
h1 {
    font-size: 1.35rem;
}
.RegisterPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url("/login_background.svg");
    background-size: cover;
  }

  .RegisterWindow {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 25%;
    min-height: 70%;
    min-width: 475px;
    min-height: 675px;
    background: var(--primary-color);
    border-radius: var(--border-radius);
    padding: 2rem;
    align-items: center;
    animation: FadeIn 0.25s ease-in-out;
  }
  
  .Birthday__Selector {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0.33fr));
    gap: 1rem;
  }

  .RegisterWindow__TitleSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {

    .RegisterPage {
      background: none;
      background-color: var(--primary-color);
    }
    .RegisterWindow {
      width: 100%;
      min-width: 0;
    }

    .Birthday__Selector {
        grid-template-columns: repeat(auto-fit, minmax(50px, 0.33fr));
      }
  }
</style>;