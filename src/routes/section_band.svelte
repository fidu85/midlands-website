<script lang="ts">
  import SectionSlantedTop from '../components/layout/section_slanted_top.svelte';
  import SectionTitle from '../components/layout/section_title.svelte';
  import SectionContent from '../components/layout/section_content.svelte';
  import Avatar from '../components/avatar.svelte';
</script>

<section id="band" class="relative z-0 bg-darkgray">
  <SectionContent>
    <SectionTitle colorName="white">Band</SectionTitle>

    <!-- Desktop -->
    <div class="hidden md:block">
      <div class="flex flex-row justify-around">
        <Avatar name="Roman Bürki" instrument="Piano & Keyboards" image_src="assets/roemu.webp" />
        <Avatar name="Marc Fischer" instrument="Vocals & Guitar" image_src="assets/maercu_f.webp" />
        <Avatar name="Daniel Fink" instrument="Guitar & Backing Vocals" image_src="assets/dani.webp" />
      </div>

      <div class="flex justify-evenly px-32">
        <Avatar name="Markus Günter" instrument="Bass & Backing Vocals" image_src="assets/kusi.webp" />
        <Avatar name="Marc Schmid" instrument="Drums" image_src="assets/marc_s.webp" />
      </div>
    </div>

    <!-- Tablet, Mobile -->
    <div class="md:hidden flex flex-col items-center">
      <Avatar name="Roman Bürki" instrument="Piano & Keyboards" image_src="assets/roemu.webp" />
      <Avatar name="Marc Fischer" instrument="Vocals & Guitar" image_src="assets/maercu_f.webp" />
      <Avatar name="Daniel Fink" instrument="Guitar & Backing Vocals" image_src="assets/dani.webp" />
      <Avatar name="Markus Günter" instrument="Bass & Backing Vocals" image_src="assets/kusi.webp" />
      <Avatar name="Marc Schmid" instrument="Drums" image_src="assets/marc_s.webp" />
    </div>
  </SectionContent>
</section>

<style>
</style>
