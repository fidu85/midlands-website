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

  function sortedConcerts(year: Year): Array<Concert> {
    let sortedConcerts = year.concerts.sort((objA, objB) => new Date(objA.date).getTime() - new Date(objB.date).getTime());
    return sortedConcerts;
  }
</script>

<section id="concert" class="relative z-0 bg-orange">
  <SectionSlantedTop isTopRight={false} colorName="orange" />

  <SectionContent>
    <SectionTitle colorName="darkblue">Konzerte</SectionTitle>

    {#each years as year, yearIndex}
      <div class="relative">
        <div class="year absolute right-0 top-1/2 transform -translate-y-1/2 -z-10">
          <span class="inline-block align-text-top text-white font-cooper-heavy opacity-10">{year.label}</span>
        </div>

        {#each sortedConcerts(year) as concert, concertIndex}
          {#if concertIndex != 0}
            <div class="divider w-1/2 bg-gradient-to-r from-white/40 my-3 sm:my-6 2xl:my-12" />
          {/if}
          <Concert date={new Date(concert.date)} titel={concert.titel} start={concert.start} link={concert.link} />
        {/each}
      </div>

      {#if yearIndex < years.length - 1}
        <div class="divider w-full bg-gradient-to-l from-white/40 my-12 sm:my-24 2xl:my-48" />
      {/if}
    {/each}
  </SectionContent>
</section>

<style>
  @media (orientation: landscape) {
    .year {
      font-size: 50vh;
    }
  }
  @media (orientation: portrait) {
    .year {
      font-size: 40vw;
    }
  }

  .divider {
    height: 2px;
  }
</style>
