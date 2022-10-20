<script lang="ts">
  import SectionSlantedTop from '../components/layout/section_slanted_top.svelte';
  import SectionTitle from '../components/layout/section_title.svelte';
  import SectionContent from '../components/layout/section_content.svelte';
  import Avatar from '../components/avatar.svelte';
</script>

<section id="band" class="relative z-0 bg-darkgray">
  <SectionSlantedTop isTopRight={true} colorName="darkgray" />

  <SectionContent>
    <SectionTitle colorName="white">Band</SectionTitle>

    <!-- Desktop -->
    <div class="hidden md:block">
      <div class="flex flex-row justify-around">
        <Avatar name="Roman Bürki" instrument="Piano & Keyboards" image_src="/assets/roemu.png" />
        <Avatar name="Marc Fischer" instrument="Vocals & Guitar" image_src="/assets/maercu_f.png" />
        <Avatar name="Daniel Fink" instrument="Guitar & Backing Vocals" image_src="/assets/dani.png" />
      </div>

      <div class="flex justify-evenly px-32">
        <Avatar name="Markus Günter" instrument="Bass & Backing Vocals" image_src="/assets/kusi.png" />
        <Avatar name="Marc Leuenberger" instrument="Drums" image_src="/assets/maercu_l.png" />
      </div>
    </div>

    <!-- Tablet, Mobile -->
    <div class="md:hidden flex flex-col items-center">
      <Avatar name="Roman Bürki" instrument="Piano & Keyboards" image_src="/assets/roemu.png" />
      <Avatar name="Marc Fischer" instrument="Vocals & Guitar" image_src="/assets/maercu_f.png" />
      <Avatar name="Daniel Fink" instrument="Guitar & Backing Vocals" image_src="/assets/dani.png" />
      <Avatar name="Markus Günter" instrument="Bass & Backing Vocals" image_src="/assets/kusi.png" />
      <Avatar name="Marc Leuenberger" instrument="Drums" image_src="/assets/maercu_l.png" />
    </div>
  </SectionContent>
</section>

<style>
</style>
