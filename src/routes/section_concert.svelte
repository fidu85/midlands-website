<script lang="ts">
  import { onMount } from 'svelte';
  import { slide, fly, fade } from 'svelte/transition';
  import { bounceOut } from 'svelte/easing';
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
    label: number;
    concerts: Array<Concert>;
  }

  let upcomingConcerts: Array<Year> = [];
  let pastConcerts: Array<Year> = [];
  let showPastConcerts = false;

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  onMount(() => {
    for (var i = 0; i < concertData.length; i++) {
      upcomingConcerts[i] = { label: concertData[i].label, concerts: concertData[i].concerts.slice() } as unknown as Year;
    }

    for (var i = 0; i < concertData.length; i++) {
      pastConcerts[i] = { label: concertData[i].label, concerts: concertData[i].concerts.slice() } as unknown as Year;
    }

    // filter upcoming concerts
    for (let i = upcomingConcerts.length - 1; i >= 0; i--) {
      if (upcomingConcerts[i].label >= now.getFullYear()) {
        for (let y = upcomingConcerts[i].concerts.length - 1; y >= 0; y--) {
          if (new Date(upcomingConcerts[i].concerts[y].date).getTime() < now.getTime()) {
            upcomingConcerts[i].concerts.splice(y, 1);
          }
        }
      } else {
        upcomingConcerts.splice(i, 1);
      }

      // if the year is actual year or in future, but we do not have concerts, then delete year
      if (upcomingConcerts[i] && upcomingConcerts[i].concerts.length == 0) {
        upcomingConcerts.splice(i, 1);
      }
    }

    // filter past concerts
    for (let i = pastConcerts.length - 1; i >= 0; i--) {
      for (let y = pastConcerts[i].concerts.length - 1; y >= 0; y--) {
        if (new Date(pastConcerts[i].concerts[y].date).getTime() >= now.getTime()) {
          pastConcerts[i].concerts.splice(y, 1);

          // check if we have removed every concert in a year, then we can also remove the whole year from the list
          if (pastConcerts[i].concerts.length == 0) {
            pastConcerts.splice(i, 1);
          }
        }
      }
    }
  });

  function sortConcerts(year: Year, ascending: boolean): Array<Concert> {
    let sortedConcerts;
    if (ascending) {
      sortedConcerts = year.concerts.sort((objA, objB) => new Date(objA.date).getTime() - new Date(objB.date).getTime());
    } else {
      sortedConcerts = year.concerts.sort((objA, objB) => new Date(objB.date).getTime() - new Date(objA.date).getTime());
    }
    return sortedConcerts;
  }

  function sortYears(years: Year[], ascending: boolean): Array<Year> {
    let sortedYears;
    if (ascending) {
      sortedYears = years.sort((objA, objB) => objA.label - objB.label);
    } else {
      sortedYears = years.sort((objA, objB) => objB.label - objA.label);
    }
    return sortedYears;
  }
</script>

<section id="concert" class="relative z-0 bg-orange">
  <SectionSlantedTop isTopRight={false} colorName="orange" />

  <SectionContent>
    <SectionTitle colorName="darkblue">Konzerte</SectionTitle>

    <!-- upcoming Concerts-->
    <div>
      {#each sortYears(upcomingConcerts, true) as year}
        <div class="relative">
          <div class="absolute h-full top-0 right-0">
            <div class="sticky top-1/4 -mb-4 sm:-mb-4 md:-mb-16 lg:-mb-20 -z-10">
              <span class="year text-white/20 font-cooper-heavy border-darkgray leading-none">{year.label.toString().substring(2)}</span>
            </div>
          </div>

          {#each sortConcerts(year, true) as concert, concertIndex}
            {#if concertIndex != 0}
              <div class="divider w-1/2 bg-gradient-to-r from-white/40 my-3 sm:my-6 2xl:my-12" />
            {/if}
            <Concert date={new Date(concert.date)} titel={concert.titel} start={concert.start} link={concert.link} />
          {/each}
        </div>

        <div class="divider w-full bg-gradient-to-l from-white/40 my-12 sm:my-24 2xl:my-48" />
      {/each}
      {#if upcomingConcerts.length == 0}
        <div class="text-darkblue text-center text-base sm:text-xl mb-6 sm:mb-12 2xl:mb-24">
          <p class="tracking-widest uppercase">Zur Zeit sind keine Konzerte geplant.</p>
        </div>
      {/if}
    </div>

    <!-- past Concerts-->
    <div>
      <div class="flex justify-center mb-12 mt-24">
        <div class="flex flex-col gap-2 items-center cursor-pointer stroke-darkblue text-darkblue hover:stroke-white/60 hover:text-white/60 duration-300" on:click={() => (showPastConcerts = !showPastConcerts)}>
          <button class="font-cooper-semibold text-base sm:text-2xl uppercase">Vergangene Konzerte</button>
          {#if !showPastConcerts}
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-bounce" transition:slide={{ duration: 1000 }}>
              <path d="M8 17V1M1 10L8 17L15 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          {/if}
          {#if showPastConcerts}
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-bounce" transition:slide={{ duration: 1000 }}>
              <path d="M8 17V1M1 8L8 1L15 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          {/if}
        </div>
      </div>

      {#if showPastConcerts}
        <div out:slide={{ duration: 1000 }} in:fly={{ y: 200, easing: bounceOut, duration: 1000 }}>
          {#each sortYears(pastConcerts, false) as year, yearIndex}
            <div class="relative">
              <div class="absolute h-full top-0 right-0">
                <div class="sticky top-1/4 -mb-4 sm:-mb-4 md:-mb-16 lg:-mb-20 -z-10">
                  <span class="year text-white/20 font-cooper-heavy border-darkgray leading-none">{year.label.toString().substring(2)}</span>
                </div>
              </div>

              {#each sortConcerts(year, false) as concert, concertIndex}
                {#if concertIndex != 0}
                  <div class="divider w-1/2 bg-gradient-to-r from-white/40 my-3 sm:my-6 2xl:my-12" />
                {/if}
                <Concert date={new Date(concert.date)} titel={concert.titel} start={concert.start} link={concert.link} />
              {/each}
            </div>

            {#if yearIndex < pastConcerts.length - 1}
              <div class="divider w-full bg-gradient-to-l from-white/40 my-12 sm:my-24 2xl:my-48" />
            {/if}
          {/each}
        </div>
      {/if}
    </div>
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
