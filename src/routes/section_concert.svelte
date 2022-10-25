<script lang="ts">
  import SectionSlantedTop from '../components/layout/section_slanted_top.svelte';
  import SectionTitle from '../components/layout/section_title.svelte';
  import SectionContent from '../components/layout/section_content.svelte';
  import Concert from '../components/concert.svelte';

  import concerts from '../data/concerts.json';
  let sortedConcerts = concerts.sort((objA, objB) => new Date(objB.date).getTime() - new Date(objA.date).getTime());
</script>

<section id="concert" class="relative z-0 bg-orange">
  <SectionSlantedTop isTopRight={false} colorName="orange" />

  <SectionContent>
    <SectionTitle colorName="darkblue">Konzerte</SectionTitle>

    <div class="divide-y divide-white/40">
      {#each sortedConcerts as concert}
        <Concert date={new Date(concert.date)} titel={concert.titel} start={concert.start} link={concert.link} />
      {/each}
    </div>
  </SectionContent>
</section>

<style>
</style>
