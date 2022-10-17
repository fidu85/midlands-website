<script lang="ts">
  export let image_src: string = "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg";
  export let name: string = "Name";
  export let instrument: string = "Instrument";
</script>

<div class="w-60 sm:w-60 flex flex-wrap justify-center space-y-4">
  <img src={image_src} alt="bandmitglied" class="shadow rounded-full max-w-full h-auto align-middle border-none" />
  <span class="text-white flex flex-col space-y-1 items-center">
    <p class="font-cooper-medium text-xl tracking-wider uppercase">{name}</p>
    <p class="font-cooper-light text-lg tracking-wider uppercase">{instrument}</p>
  </span>
</div>

<style>
</style>
