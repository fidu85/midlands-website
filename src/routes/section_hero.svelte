<script lang="ts">
  import SectionSlantedTop from "../components/layout/section_slanted_top.svelte";
  import SectionTitle from "../components/layout/section_title.svelte";
  import SectionContent from "../components/layout/section_content.svelte";
</script>

<section id="hero" class="relative bg-hero-background bg-cover bg-center min-h-screen">
  Hero

  <SectionContent>
    <p class="font-cooper-thin">Thin</p>
    <p class="font-cooper-light">Light</p>
    <p class="font-cooper-book">Book</p>
    <p class="font-cooper-medium">Medium</p>
    <p class="font-cooper-semibold">Semibold</p>
    <p class="font-cooper-bold">Bold</p>
    <p class="font-cooper-heavy">Heavy</p>
    <div class="h-96 border-2 text-white text-center"><p>Placeholder</p></div>
  </SectionContent>
</section>

<style>
</style>
