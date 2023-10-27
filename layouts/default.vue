<template>
  <div>
    <Sidebar />
    <main>
      <img src="~/assets/images/background-cover.jpg" alt="cover" class="h-[40vh] w-full object-cover">
      <div class="inner-content">
        <slot />
      </div>
    </main>
  </div>
</template>


<style scoped>
.container {
  display: flex;
}


.inner-content {
  @apply w-[86vw] px-4 ml-[14vw];
}
</style>