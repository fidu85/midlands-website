<script lang="ts">
  import SectionSlantedTop from "../components/layout/section_slanted_top.svelte";
  import SectionTitle from "../components/layout/section_title.svelte";
  import SectionContent from "../components/layout/section_content.svelte";
</script>

<section id="band" class="relative z-0 bg-darkgray">
  <SectionSlantedTop isTopRight={true} color="darkgray" />

  <SectionContent>
    <SectionTitle color="white">Band</SectionTitle>

    <div class="h-96 border-2 text-white text-center"><p>Placeholder</p></div>
  </SectionContent>
</section>

<style>
</style>
