<script lang="ts">
  import SectionSlantedTop from "../components/layout/section_slanted_top.svelte";
  import SectionTitle from "../components/layout/section_title.svelte";
  import SectionContent from "../components/layout/section_content.svelte";
</script>

<section id="concert" class="relative z-0 bg-orange">
  <SectionSlantedTop isTopRight={false} color="orange" />

  <SectionContent>
    <SectionTitle color="darkblue">Konzerte</SectionTitle>

    <div class="h-96 border-2 text-white text-center"><p>Placeholder</p></div>
  </SectionContent>
</section>

<style>
</style>
