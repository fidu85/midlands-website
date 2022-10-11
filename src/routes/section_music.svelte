<script lang="ts">
</script>

<section id="music" class="relative z-0 bg-darkblue">
  <!-- Spikel-->
  <!-- <div
    class="before:content-[''] before:block before:w-full before:h-36 before:-skew-y-3 before:origin-left before:absolute before:top-0 before:left-0 before:-z-10 before:bg-darkblue"
  /> -->

  <div class="font-fontain text-9xl text-center">Musik</div>

  <div class="w-full pb-24 text-white text-center">
    <div class="h-96 border-2">Placeholder</div>
  </div>
</section>

<style>
  #music::before {
    content: "";
    display: block;
    width: 100%;
    height: theme("height.36");
    transform: skewY(-3deg);
    transform-origin: left;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    background-color: theme("colors.darkblue");
  }
</style>
