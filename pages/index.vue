<template>
 <section class="HomePage">
    <div>
        <h1>Home Page</h1>
        <span>WIP! - Select sub site: </span>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
 </section>
</template>
 
<script setup lang='ts'>
 
</script>
 
<style scoped>
  
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}
.HomePage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--primary-color);
  }
</style>;