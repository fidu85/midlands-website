<script lang="ts">
</script>

<nav id="nav_mobile" class="fixed w-full z-10 bottom-0 mx-auto px-4 sm:px-6 py-2 backdrop-blur-sm bg-darkgray/60 text-white text-xs font-cooper-medium tracking-widest uppercase">
  <div class="flex justify-evenly self-center">
    <a href="/#band" class="flex flex-col items-center self-center">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fill-white stroke-white"
          d="M15.133 8.267c0 1.537-1.19 2.766-2.7 2.766a2.772 2.772 0 0 1-2.766-2.766 2.7 2.7 0 0 1 2.7-2.7c1.537 0 2.766 1.19 2.766 2.7Zm-.333.066A2.435 2.435 0 0 0 12.417 5.9H12.366C11.079 5.9 10 7.002 10 8.333a2.363 2.363 0 0 0 2.367 2.367c1.32 0 2.433-1.001 2.433-2.367ZM17.633 9.967h.02c1.6-.062 3.136.49 4.303 1.53l.044.043v4.627h-.333v-4.554l-.205-.15a6.045 6.045 0 0 0-3.841-1.163h-.265c.044-.108.084-.22.12-.333h.157ZM18.426 3.872l-.013-.005a2.176 2.176 0 0 0-2.362.507 3.341 3.341 0 0 0-.19-.166 2.353 2.353 0 0 1 1.839-.841c1.317 0 2.433 1.102 2.433 2.5 0 1.285-1.05 2.38-2.4 2.431 0-.098 0-.211-.004-.334.777-.04 1.5-.558 1.828-1.294l.005-.012.005-.012c.426-1.108-.08-2.332-1.141-2.774Z"
        />
        <path
          class="fill-white"
          d="M8.5 10.933a4.444 4.444 0 0 1-.6-1.4h-.533a6.86 6.86 0 0 0-4.667 1.6l-.2.2v5.334h1.333v-4.8C4.9 11.133 6.1 10.733 7.367 10.8c.4 0 .8.067 1.133.133ZM7.367 8.733c.133 0 .266 0 .4-.066v-.4c0-.334 0-.667.066-.934C7.7 7.4 7.5 7.4 7.367 7.4c-.867 0-1.6-.733-1.6-1.6 0-.867.733-1.6 1.6-1.6.666 0 1.266.4 1.533 1 .267-.333.667-.667 1-.933-.867-1.4-2.667-1.867-4.067-1-1.4.866-1.866 2.666-1 4.066a2.937 2.937 0 0 0 2.534 1.4ZM17.9 15.133l-.133-.2c-1.334-1.466-3.2-2.333-5.2-2.266-2-.067-3.934.8-5.267 2.266l-.133.2V20.2c0 .6.466 1.133 1.133 1.133h8.533c.6 0 1.134-.533 1.134-1.133v-5.067H17.9ZM16.567 20H8.5v-4.4c1.067-1.067 2.533-1.6 4.067-1.6 1.466-.067 2.933.533 4 1.6V20Z"
        />
      </svg>
      <span class="pt-2">BAND</span>
    </a>
    <a href="/#concert" class="flex flex-col items-center self-center">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path class="fill-white stroke-white" d="M16.5 3v.5H20a1 1 0 0 1 1 1v4h-.5V4h-4v1.5H16V4H9v1.5h-.5V4h-4v16h3v.5H5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h3.5V2H9v1.5h7V2h.5v1Z" />
        <path class="fill-white stroke-white" d="m16.264 12.366 1.454 2.817.117.228.255.037 3.076.447-2.262 2.174-.195.187.05.264.565 3.072-2.846-1.458-.228-.117-.228.117-2.846 1.458.566-3.072.048-.264-.193-.187-2.26-2.17 3.183-.45.263-.038.117-.239 1.364-2.806Z" fill="#fff" stroke="#fff" />
      </svg>
      <span class="pt-2">KONZERTE</span>
    </a>
    <!-- <a href="/#music" class="flex flex-col items-center self-center">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path class="stroke-white fill-white/0" d="M20 14V3L9 5v11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path class="stroke-white fill-white/0" d="M17 19h1a2 2 0 0 0 2-2v-3h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2ZM6 21h1a2 2 0 0 0 2-2v-3H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span class="pt-2">MUSIK</span>
    </a>
    <a href="/#promoter" class="flex flex-col items-center self-center">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          class="stroke-white fill-white"
          d="M21.608 8.664c-.502-.684-1.21-1.496-1.993-2.279-.783-.783-1.595-1.491-2.28-1.993l4.273 4.272Zm0 0c.854 1.164.892 1.648.892 1.836v11.625c0 .757-.618 1.375-1.375 1.375H6.875A1.378 1.378 0 0 1 5.5 22.125V4.875c0-.757.618-1.375 1.375-1.375H15.5c.188 0 .672.038 1.836.892l4.272 4.272ZM19.26 6.74l-.146-.147h-.003a20.44 20.44 0 0 0-1.806-1.596l-.806-.624V9.5h5.129l-.625-.806A20.99 20.99 0 0 0 19.26 6.74ZM6.87 23h14.255a.88.88 0 0 0 .875-.875V10h-5.75a.25.25 0 0 1-.25-.25V4H6.875A.88.88 0 0 0 6 4.875v17.256a.88.88 0 0 0 .87.869Z"
        />
        <path class="stroke-white fill-white" d="M3 20.185a1.374 1.374 0 0 1-.5-1.06V1.875C2.5 1.118 3.118.5 3.875.5H12.5c.154 0 .505.026 1.262.5H3.875A.881.881 0 0 0 3 1.875v18.31Z" />
      </svg>
      <span class="pt-2">VERANSTALTER</span>
    </a> -->
    <a href="/#contact" class="flex flex-col items-center self-center">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fill-white stroke-white"
          d="m20.505 5.952-.192.15-7.818 6.073a.812.812 0 0 1-.997 0L3.492 5.95l-.25-.195.307-.394.609.473.135.106h.001l7.4 5.752.306.238.307-.238 7.399-5.752h.003l.136-.106.607-.472.306.394-.252.196Zm-.274-1.687-.868.675H4.637l-.87-.678-.017-.012h16.5l-.019.015ZM2.25 4.25h.893l-.078.1-.921 1.184L2 5.718V4.5a.25.25 0 0 1 .25-.25ZM2 19.5V6.056l.233.181.454.354v12.471h18.625V6.592l.456-.354.232-.18V19.5a.25.25 0 0 1-.25.25H2.25A.25.25 0 0 1 2 19.5Zm20-15v1.22l-.144-.184-.92-1.184-.08-.102h.894a.25.25 0 0 1 .25.25Z"
        />
      </svg>
      <span class="pt-2">KONTAKT</span>
    </a>
  </div>
</nav>

<style>
  #nav_mobile {
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    font-size: 10px;
  }
</style>
