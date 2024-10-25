<template>
  <div>
    <Sidebar />
    <main>
      <div class="inner-content transition-all duration-300 ease-in-out hover:shadow-2xl">
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
