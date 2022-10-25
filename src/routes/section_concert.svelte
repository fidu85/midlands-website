<script lang="ts">
  import SectionSlantedTop from '../components/layout/section_slanted_top.svelte';
  import SectionTitle from '../components/layout/section_title.svelte';
  import SectionContent from '../components/layout/section_content.svelte';
  import Concert from '../components/concert.svelte';

  import concertData from '../data/concerts.json';

  interface Concert {
    date: string;
    titel: string;
    start: string;
    link: string;
  }

  interface Year {
    label: string;
    concerts: Array<Concert>;
  }

  const years: Year[] = concertData as unknown as Year[];
</script>

<section id="concert" class="relative z-0 bg-orange">
  <SectionSlantedTop isTopRight={false} colorName="orange" />

  <SectionContent>
    <SectionTitle colorName="darkblue">Konzerte</SectionTitle>

    {#each years as year}
      <div class="year absolute right-0 text-white font-cooper-heavy opacity-20">{year.label}</div>
      <div class="relative divide-y divide-white/40 mb-24 last:mb-0">
        {#each year.concerts as concert}
          <Concert date={new Date(concert.date)} titel={concert.titel} start={concert.start} link={concert.link} />
        {/each}
      </div>
    {/each}
  </SectionContent>
</section>

<style>
  .year {
    z-index: -1;
    font-size: calc(100vw / 3);
  }
</style>
