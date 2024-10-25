<template>
  <div
    class="bg-neutral rounded-xl mx-12 mt-12 h-[28em] p-12 flex flex-col justify-between relative shadow-xl gap-8 border border-accent transition-all duration-300 ease-in-out hover:shadow-2xl"
    id="about">
    <div>
      <p class="font-bold text-primary text-lg underline decoration-accent decoration-4 underline-offset-8">About Me</p>
    </div>
    <div class="flex flex-row gap-8 justify-between">
      <img src="~/assets/images/profile.jpg" alt="profile" class="w-[18em] h-[18em] rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
      <div class="flex flex-col justify-between gap-4">
        <p class="text-primary text-lg text-justify">
          I'm a Fullstack Developer with a bachelor degree in Computer Engineering from Sepuluh Nopember Institute of
          Technology, Surabaya.
          When I was in college, I was a laboratory assistant in the field of web development. I am expertised in PHP and
          JavaScript frameworks such as CodeIgniter and React.js.
        </p>
        <div class="flex font-bold text-primary justify-around">
          <div class="text-center">
            <p class="text-3xl">{{ year }}+</p>
            <p class="text-lg">Years Experience</p>
          </div>
          <div class="text-center">
            <p class="text-3xl">{{ projects }}</p>
            <p class="text-lg">Completed Projects</p>
          </div>
          <div class="text-center">
            <p class="text-3xl">{{ companies }}</p>
            <p class="text-lg">Companies worked</p>

          </div>
        </div>
        <a href="#contact"
          class="hover:bg-accent text-neutral hover:text-primary font-bold rounded-lg px-6 py-3 h-fit w-fit self-end bg-primary transition-all duration-300 ease-in-out hover:-translate-y-1">
          <i class="fa-solid fa-download"></i>
          Download CV
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear() - 2020
const projects = 12
const companies = 2
</script>
