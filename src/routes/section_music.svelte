<script lang="ts">
  import SectionSlantedTop from '../components/layout/section_slanted_top.svelte';
  import SectionTitle from '../components/layout/section_title.svelte';
  import SectionContent from '../components/layout/section_content.svelte';
</script>

<section id="music" class="relative z-0 bg-darkblue">
  <SectionSlantedTop isTopRight={true} colorName="darkblue" />

  <SectionContent>
    <SectionTitle colorName="white">Musik</SectionTitle>
    <div class="fb-wrapper">
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmidlandsswitzerland%2Fvideos%2F543051553834573%2F&show_text=false&t=0"
        title="Midlands im Club Soho"
        scrolling="no"
        frameborder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  </SectionContent>
</section>

<style>
  /* workaround for 100% width of embeded fb video https://stackoverflow.com/questions/53870037/how-to-set-a-facebook-embed-video-to-100-width */
  .fb-wrapper {
    overflow: hidden;
    padding-bottom: 45%;
    position: relative;
    height: 0;
  }

  .fb-wrapper iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>
