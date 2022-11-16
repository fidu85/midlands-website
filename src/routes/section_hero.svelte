<script lang="ts">
  let currentScroll: number;
  let viewportHeight: number;
</script>

<svelte:window bind:scrollY={currentScroll} bind:innerHeight={viewportHeight} />

<section class="relative portrait:min-h-[calc(80vh)]">
  <!-- BACKGROUND IMAGE -->
  <div id="hero" class="sticky top-0 min-h-screen h-screen bg-scroll bg-top bg-no-repeat -z-20" style="background-image:url(/assets/hero_background.jpg)" />

  <!-- LOGO -->
  <div class="absolute inset-0 w-full h-full -z-20">
    <img
      src="/assets/midlands_logo.svg"
      alt="midlands logo"
      class="logo sticky top-1/4 portrait:lg:top-1/3 lg:top-[calc(20%)] landscape:sm:top-4 landscape:lg:top-[calc(20%)] max-w-screen-2xl w-full landscape:sm:w-3/4 landscape:lg:w-full mx-auto px-4 sm:px-6"
      style:transform={`translateY(${currentScroll <= viewportHeight ? `-${currentScroll * 2}px` : ``}`}
    />
  </div>

  <!-- BAND -->
  <div class="absolute inset-0 w-full h-full -z-10">
    <img src="/assets/midlands_band.png" alt="midlands band" class="band fixed portrait:absolute left-0 right-0 bottom-0 portrait:bottom-72 portrait:sm:bottom-1/3 portrait:lg:bottom-1/4 max-w-screen-2xl w-full mx-auto px-4 sm:px-6 landscape:w-[calc(70%)] portrait:md:w-full " />
  </div>

  <!-- SUBTEXT -->
  <div class="relative -mt-64 landscape:sm:-mt-32 landscape:md:-mt-48 landscape:lg:-mt-64 pb-24 md:pb-36">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col gap-6 h-1/2 ">
        <span class="font-fontain text-5xl md:text-9xl landscape:sm:text-6xl landscape:lg:text-9xl text-center text-orange tracking-widest {currentScroll >= viewportHeight / 8 ? 'transition duration-500 translate-y-0 opacity-100' : 'transition duration-500 -translate-y-28 opacity-0'}">
          <p>Rockmusik</p>
          <p>Mit Emotion und Leidenschaft</p>
        </span>

        <span class="font-cooper-thin text-lg md:text-4xl landscape:sm:text-2xl landscape:lg:text-4xl text-center text-white {currentScroll >= viewportHeight / 8 ? 'transition duration-500 translate-y-0 opacity-100' : 'transition duration-500 translate-y-28 opacity-0'}">
          <p>Erlesene Songs neu interpretiert und auf eigene Art verpackt, das ist die Musik von Midlands. Lassen Sie sich mitreisen und geniessen Sie ein einmaliges Hörerlebnis</p>
        </span>
      </div>
    </div>

    <div class="absolute left-0 right-0 bottom-0 landscape:md:-bottom-10 landscape:xl:bottom-0 landscape:2xl:bottom-0 portrait:md:bottom-16 h-full w-full -z-10">
      <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="h-full w-full -z-10">
        <polygon points="0,45 0,100 100,100 100,30" class="fill-darkgray hidden lg:block" />
        <polygon points="0,20 0,100 100,100 100,10" class="fill-darkgray lg:hidden" />
      </svg>
    </div>
  </div>
</section>

<style>
  @keyframes band_animation {
    0% {
      transform: translateY(75vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  .band {
    animation-name: band_animation;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }

  @keyframes logo_animation {
    0% {
      transform: translateY(100vh);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0vh);
      opacity: 1;
    }
  }

  .logo {
    animation-name: logo_animation;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }

  @keyframes background_animation {
    0% {
      background-size: auto 175vh;
    }
    100% {
      background-size: auto 125vh;
    }
  }

  #hero {
    background-size: auto 125vh;
    animation-name: background_animation;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }

  @media (min-width: 1536px) {
    @keyframes background_animation {
      0% {
        background-size: 175%;
      }
      100% {
        background-size: 100%;
      }
    }

    #hero {
      background-size: cover;
      animation-name: background_animation;
      animation-timing-function: ease-in-out;
      animation-duration: 2s;
    }
  }
</style>
