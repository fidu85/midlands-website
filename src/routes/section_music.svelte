<script lang="ts">
  import SectionSlantedTop from "../components/layout/section_slanted_top.svelte";
  import SectionTitle from "../components/layout/section_title.svelte";
  import SectionContent from "../components/layout/section_content.svelte";
</script>

<section id="music" class="relative z-0 bg-darkblue">
  <SectionSlantedTop isTopRight={true} colorName="darkblue" />

  <SectionContent>
    <SectionTitle colorName="white">Musik</SectionTitle>
    <div class="h-96 border-2 text-white text-center"><p>Placeholder</p></div>
  </SectionContent>
</section>

<style>
</style>
