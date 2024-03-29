<script lang="ts">
  import { slide } from 'svelte/transition';
  import { bounceIn, bounceOut, circOut, elasticOut } from 'svelte/easing';
  let currentScroll: number;
  let beforeScroll: number;

  const deriveDirection = (y: number) => {
    const isScrollDown = beforeScroll == undefined || beforeScroll > y ? true : false;
    beforeScroll = y;

    return isScrollDown;
  };

  $: showNav = deriveDirection(currentScroll);
</script>

<svelte:window bind:scrollY={currentScroll} />

{#if showNav}
  <nav class="fixed w-full z-10 {currentScroll < 96 ? '' : 'backdrop-blur-sm shadow-lg bg-darkgray/20'}" out:slide={{ easing: circOut, duration: 500 }} in:slide={{ easing: bounceOut, duration: 1000 }}>
    <div class="h-24 max-w-screen-2xl mx-auto px-4 sm:px-6 flex items-center justify-end gap-16 text-white font-cooper-light tracking-widest text-2xl drop-shadow-lg">
      <a href="/#band" class="hover:translate-y-2 hover:text-orange duration-300" in:slide={{ easing: elasticOut, duration: 1000, delay: 300 }}>BAND</a>
      <a href="/#concert" class="hover:translate-y-2 hover:text-orange duration-300" in:slide={{ easing: elasticOut, duration: 1000, delay: 500 }}>KONZERTE</a>
      <a href="/#music" class="hover:translate-y-2 hover:text-orange duration-300" in:slide={{ easing: elasticOut, duration: 1000, delay: 700 }}>MUSIK</a>
      <a href="/#promoter" class="hover:translate-y-2 hover:text-orange duration-300">VERANSTALTER</a>
      <a href="/#contact" class="hover:translate-y-2 hover:text-orange duration-300" in:slide={{ easing: elasticOut, duration: 1000, delay: 900 }}>KONTAKT</a>
    </div>
  </nav>
{/if}

<style>
  nav {
    transition: transform 300ms linear;
  }
</style>
