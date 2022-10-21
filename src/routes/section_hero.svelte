<script lang="ts">
  import SectionContent from '../components/layout/section_content.svelte';
</script>

<section id="hero" class="relative bg-hero-background bg-center bg-no-repeat min-h-screen portrait:min-h-[calc(80vh)]">
  <SectionContent>
    <img src="/assets/midlands_logo.svg" alt="midlands logo" class="logo absolute max-w-screen-2xl mx-auto px-4 sm:px-6 w-full top-[calc(20%)] portrait:top-1/3" />
    <img src="/assets/midlands_band.png" alt="midlands band" class="band absolute max-w-screen-2xl mx-auto px-4 sm:px-6 w-full landscape:w-2/3 portrait:md:w-full landscape:md:w-2/3" />
  </SectionContent>
</section>

<style>
  @keyframes band_slide {
    0% {
      transform: translateY(60vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes logo_slide {
    0% {
      transform: translateY(80vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  .band {
    right: 0;
    left: 0;
    bottom: 0;
    animation-name: band_slide;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }

  .logo {
    right: 0;
    left: 0;
    bottom: 0;
    animation-name: logo_slide;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }

  #hero {
    background-size: 100vw;
    animation-name: background_animation;
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
