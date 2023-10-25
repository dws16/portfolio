<template>
  <div>
    <Sidebar />
    <main class="content">
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

.content {
  @apply sm:ml-48 ml-0;
}

.inner-content {
  width: 100%;
  padding: 0 20px;
}
</style>