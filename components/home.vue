<template>
  <div class="bg-primary rounded-xl mx-12 -mt-12 h-[360px] p-16 flex flex-col justify-between relative shadow-xl"
    id="home">
    <div>
      <h1 class="text-neutral text-5xl font-bold">Hello! My name is <span class="text-accent">Firdaus</span>.</h1>
      <h2 class="text-neutral text-3xl font-bold mt-2">I am a <span
          class="underline decoration-accent decoration-4 underline-offset-8">Fullstack Developer</span>.</h2>
      <p class="text-neutral text-xl font-medium mt-10 text-justify"> I'm a Fullstack Developer based in Jakarta who has
        {{ year }}
        years
        experience in building innovative and scalable web applications. I love diving into the backend side of the
        application and I'm always looking to learn new things. I'm currently working at
        <span class="font-bold">PT. Serasi Autoraya</span> as
        a Backend Engineer.
      </p>
    </div>
    <div class="flex justify-end gap-4">
      <a href="/about/contact"
        class="hover:bg-accent text-primary font-bold rounded-lg px-6 py-3 bg-neutral transition-all duration-300 ease-in-out hover:-translate-y-1">
        <i class="fa-solid fa-envelope fa-shake"></i>
        Contact Me
      </a>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear() - 2020
</script>