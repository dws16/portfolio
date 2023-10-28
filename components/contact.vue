<template>
  <div class="bg-primary rounded-xl mt-12 mx-12 h-[18em] p-12 flex flex-col justify-between relative shadow-xl gap-8"
    id="contact">
    <div>
      <p class="font-bold text-neutral text-lg underline decoration-accent decoration-4 underline-offset-8">
        Get in Touch <span class="text-accent font-extrabold">.</span>
      </p>
    </div>
    <p class="text-neutral text-lg font-medium text-justify">
      If you have any questions or want to work together, please feel free to contact me. I'll try my best to get back to
      you!
    </p>
    <div class="flex flex-row gap-4 justify-around">
      <div class="flex items-center">
        <i class="fa-solid fa-location-dot text-accent text-3xl fa-fade"></i>
        <div class="flex flex-col">
          <p class="text-neutral text-md ml-4 font-bold flex gap-2 items-center">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <i class="fa-solid fa-envelope text-accent text-3xl fa-shake"></i>
        <div class="flex flex-col">
          <p class="text-neutral text-md ml-4 font-bold flex gap-2 items-center">
            firdausnp16@gmail.com
          </p>
        </div>
      </div>
      <a href="mailto:firdausnp16@gmail.com" target="_blank"
        class="flex items-center bg-neutral rounded-xl px-4 py-2 group hover:bg-accent">
        <i class="fa-solid fa-paper-plane text-accent text-3xl group-hover:text-neutral"></i>
        <div class="flex flex-col">
          <p class="text-primary text-md ml-4 font-bold flex gap-2 items-center">
            Send Message
          </p>
        </div>
      </a>
    </div>
    <div></div>
  </div>
</template>

<script setup>
</script>