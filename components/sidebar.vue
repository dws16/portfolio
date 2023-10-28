<template>
  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
      </path>
    </svg>
  </button>

  <aside id="logo-sidebar"
    class="fixed top-40 left-10 z-40 w-[14vw] h-[28em] transition-transform -translate-x-full sm:translate-x-0 shadow-xl rounded-xl"
    aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-primary rounded-xl flex flex-col justify-between shadow-xl">
      <a href="/" class="flex items-center pl-2.5 justify-center group">
        <div
          class="md:h-32 md:w-32 mr-3 -mt-10 h-7 w-7 absolute rounded-full p-2 bg-[url('~/assets/images/profile-sidebar.jpg')] group-hover:bg-[url(~/assets/images/logo.png)] transition ease-in-out delay-100 group-hover:transition-all bg-cover shadow-xl">
        </div>
      </a>
      <!-- <div>
        <p class="text-neutral font-bold text-center text-lg"><span class="text-accent">●</span> Firdaus Nanda P</p>
        <p class="text-neutral text-center">Fullstack Developer</p>
      </div> -->
      <div class="h-fit mt-10 flex-row flex justify-center">
        <ul class="font-medium">
          <li>
            <NuxtLink class="sidebar-li group text-neutral" to="/">
              <i class="fa-solid fa-house group-hover:animate-bounce"></i>
              <span class="ml-2">Home</span>
            </NuxtLink>
            <NuxtLink class="sidebar-li group text-neutral" to="/about">
              <i class="fa-solid fa-user group-hover:animate-bounce"></i>
              <span class="ml-2">About</span>
            </NuxtLink>
            <NuxtLink class="sidebar-li group text-neutral" to="/about/skills">
              <i class="fa-solid fa-tools group-hover:animate-bounce"></i>
              <span class="ml-2">Skills</span>
            </NuxtLink>
            <NuxtLink class="sidebar-li group text-neutral" to="/about/experience">
              <i class="fa-solid fa-briefcase group-hover:animate-bounce"></i>
              <span class="ml-2">Experience</span>
            </NuxtLink>
            <NuxtLink class="sidebar-li group text-neutral" to="/about/projects">
              <i class="fa-solid fa-diagram-project group-hover:animate-bounce"></i>
              <span class="ml-2">Projects</span>
            </NuxtLink>
            <NuxtLink class="sidebar-li group text-neutral" to="/about/contact">
              <i class="fa-solid fa-phone group-hover:animate-bounce"></i>
              <span class="ml-2">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="h-fit">
        <ul class="font-medium flex justify-center">
          <li>
            <a href="https://www.linkedin.com/in/firdaus-nanda/" target="_blank"
              class="flex items-center p-2 text-neutral rounded-lg hover:bg-neutral hover:text-primary group">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/dausnp" target="_blank"
              class="flex items-center p-2 text-neutral rounded-lg hover:bg-neutral hover:text-primary group">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/dws16" target="_blank"
              class="flex items-center p-2 text-neutral rounded-lg hover:bg-neutral hover:text-primary group">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
        <p class="text-neutral text-xs text-center">© {{ year }} Firdaus Nanda P</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
const year = new Date().getFullYear()

</script>

<style scoped>
.router-link-exact-active {
  @apply bg-neutral text-primary;
}

.sidebar-li {
  @apply px-12 flex items-center p-2 rounded-lg hover:bg-neutral hover:text-primary my-2;
}

.sidebar-li:hover {
  @apply bg-neutral;
}
</style>