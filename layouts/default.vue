<template>
  <div>
    <Sidebar />
    <main>
      <div class="relative">
        <img src="~/assets/images/background-cover.png" alt="cover" class="h-[40vh] w-full object-cover">
        <p class="absolute right-20 top-20 text-neutral text-6xl font-bold">Hi There, <i
            class="fa-solid fa-hand-peace fa-bounce text-accent"></i></p>
      </div>
      <div class="inner-content">
        <slot />
      </div>
    </main>
  </div>
</template>


<style scoped>
.inner-content {
  @apply w-[82vw] ml-[16vw];
}
</style>