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
                        <select name="birth_month" placeholder="Month" required>
                            <option value="" disabled selected hidden>Month</option>
                            <option v-for="(item, index) of Months" :value="index+1">{{item}}</option>
                        </select>
                        <select name="birth_day" placeholder="Day" required>
                            <option value="" disabled selected hidden>Day</option>
                            <option v-for="i in 31" :value="i">{{i}}</option>
                        </select>
                        <select name="birth_year" placeholder="Year" required>
                            <option value="" disabled selected hidden>Year</option>
                            <option v-for="i of getYears()" :value="i">{{i}}</option>
                        </select>
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
    const Months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const isDisplayNameHintVisible = ref(false);
    const isDisplayNameHintVisibleSwitcher = () => {
        isDisplayNameHintVisible.value = !isDisplayNameHintVisible.value;
    }

    const getYears = (): number[] => {
        const years = [];
        const CurrentDate = new Date();
        for (let i = CurrentDate.getFullYear(); i >= 1930; i--) {
            years.push(i);
        }
        return years;
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