<script lang="ts">
  import SectionSlantedTop from '../components/layout/section_slanted_top.svelte';
  import SectionTitle from '../components/layout/section_title.svelte';
  import SectionContent from '../components/layout/section_content.svelte';
</script>

<section id="contact" class="relative z-0 bg-darkgray">
  <SectionSlantedTop isTopRight={true} colorName="darkgray" />

  <SectionContent>
    <SectionTitle colorName="white">Kontakt</SectionTitle>

    <!-- E-MAIL -->
    <div class="text-white text-center text-base sm:text-xl">
      <p class="tracking-widest uppercase">Hast Du eine Frage oder möchtest Du uns für einen Anlass buchen?</p>
      <p class="tracking-widest uppercase">Zögere nicht und kontaktiere uns.</p>

      <a href="mailto:info@midlands.ch" class="mt-6 block tracking-wider underline hover:text-orange">info@midlands.ch</a>
    </div>

    <!-- FOLGE UNS AUF -->
    <div class="text-white text-center mt-24">
      <p class="font-cooper-book text-base sm:text-xl tracking-widest uppercase">Folge uns auf</p>
      <div class="flex flex-row justify-center items-start gap-12 sm:gap-16 mt-6">
        <!-- Facebook -->
        <a href="https://www.facebook.com/midlandsswitzerland" target="_blanket">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" class="fill-white hover:fill-orange h-9 sm:h-12">
            <path
              d="M47.25 24.5C47.25 11.656 36.844 1.25 24 1.25S.75 11.656.75 24.5c0 11.604 8.502 21.223 19.617 22.969V31.22h-5.906V24.5h5.906v-5.122c0-5.827 3.469-9.046 8.782-9.046 2.544 0 5.205.454 5.205.454v5.719H31.42c-2.887 0-3.788 1.793-3.788 3.63V24.5h6.448l-1.031 6.72h-5.417V47.47C38.748 45.723 47.25 36.104 47.25 24.5Z"
            />
          </svg>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/midlands_band" target="_blanket">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 48" width="42px" height="48px" class="fill-white hover:fill-orange h-9 sm:h-12">
            <g clip-path="url(#a)">
              <path
                d="M21.01 13.719A10.755 10.755 0 0 0 10.238 24.49c0 5.963 4.81 10.772 10.772 10.772 5.962 0 10.771-4.81 10.771-10.772 0-5.962-4.809-10.771-10.771-10.771Zm0 17.775c-3.854 0-7.004-3.141-7.004-7.004a7.01 7.01 0 0 1 7.004-7.003 7.01 7.01 0 0 1 7.003 7.003c0 3.863-3.15 7.004-7.003 7.004Zm13.725-18.216a2.507 2.507 0 0 1-2.513 2.512 2.513 2.513 0 1 1 2.513-2.512Zm7.134 2.55c-.16-3.366-.928-6.347-3.394-8.803C36.02 4.569 33.038 3.8 29.672 3.63c-3.469-.197-13.866-.197-17.334 0C8.98 3.791 6 4.56 3.535 7.015 1.069 9.472.31 12.453.14 15.82c-.197 3.468-.197 13.865 0 17.334.16 3.366.928 6.347 3.394 8.803C6 44.412 8.972 45.181 12.338 45.35c3.468.197 13.865.197 17.334 0 3.366-.16 6.347-.928 8.803-3.394 2.456-2.456 3.225-5.437 3.394-8.803.197-3.469.197-13.856 0-17.325Zm-4.481 21.047a7.09 7.09 0 0 1-3.994 3.994c-2.766 1.096-9.328.843-12.384.843-3.057 0-9.629.244-12.385-.843a7.09 7.09 0 0 1-3.994-3.994c-1.096-2.766-.843-9.328-.843-12.385 0-3.056-.244-9.628.843-12.384a7.09 7.09 0 0 1 3.994-3.994c2.766-1.097 9.328-.843 12.385-.843 3.056 0 9.628-.244 12.384.843a7.09 7.09 0 0 1 3.994 3.994c1.097 2.766.843 9.328.843 12.384 0 3.057.254 9.629-.843 12.385Z"
              />
            </g>
            <defs><clipPath id="a"><path fill="#fff" transform="translate(0 .5)" d="M0 0h42v48H0z" /></clipPath></defs></svg
          >
        </a>

        <!-- Youtube -->
        <!-- <a href="https://www.youtube.com" target="_blanket">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 48" width="54px" height="48px" class="fill-white hover:fill-orange h-9 sm:h-12">
            <path
              d="M51.53 12.133a6.433 6.433 0 0 0-4.526-4.556C43.01 6.5 27 6.5 27 6.5s-16.01 0-20.004 1.077a6.433 6.433 0 0 0-4.526 4.556C1.4 16.152 1.4 24.536 1.4 24.536s0 8.385 1.07 12.404c.589 2.217 2.324 3.89 4.526 4.483C10.99 42.5 27 42.5 27 42.5s16.01 0 20.004-1.077c2.202-.592 3.937-2.266 4.526-4.483 1.07-4.019 1.07-12.404 1.07-12.404s0-8.384-1.07-12.403ZM21.763 32.149V16.924l13.382 7.613-13.382 7.612Z"
            />
          </svg>
        </a> -->
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="text-white/50 w-full text-center absolute bottom-16 sm:bottom-28 left-1/2 transform -translate-x-1/2">
      <p class=" text-xs font-cooper-book tracking-widest">Copyright &copy; {new Date().getFullYear()} MIDLANDS</p>
    </div>
  </SectionContent>
</section>

<style>
</style>
