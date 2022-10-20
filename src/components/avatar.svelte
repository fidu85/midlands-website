<script lang="ts">
  export let image_src: string = "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg";
  export let name: string = "Name";
  export let instrument: string = "Instrument";
</script>


<div class="w-60 md:w-52 lg:w-60 flex flex-wrap justify-center space-y-4 pb-12 hover:scale-105 transition duration-700 ease-in-out">
  <img src={image_src} alt="bandmitglied" class="h-60 md:h-52 lg:h-60 drop-shadow-md rounded-3xl -rotate-3 border-none bg-gradient-to-b from-midgray to-darkgray grayscale hover:grayscale-0 hover:-rotate-6 transition duration-700" />
  <span class="absolute -z-10 h-60 md:h-52 lg:h-60 w-60 md:w-52 lg:w-60 rounded-3xl rotate-3 bg-white/30 -translate-y-4"/>
  <span class="text-white flex flex-col space-y-1 items-center text-center">
    <p class="font-cooper-medium text-base lg:text-xl tracking-wider uppercase">{name}</p>
    <p class="font-cooper-light text-base lg:text-lg tracking-wider uppercase">{instrument}</p>
  </span>
</div>

<style>
</style>
