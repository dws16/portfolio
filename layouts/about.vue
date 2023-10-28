<template>
  <div>
    <Sidebar />
    <main>
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