<script lang="ts">
  import SectionSlantedTop from "../components/layout/section_slanted_top.svelte";
  import SectionTitle from "../components/layout/section_title.svelte";
  import SectionContent from "../components/layout/section_content.svelte";
  import Concert from "../components/concert.svelte";

  let concerts_2022 = [
		{ date: new Date(), titel: 'Kellertheater Wangenstrasse 45, 4537 Wiedlisbach', start: 'Beginn, ca. 20:00 Uhr', link: 'www.beleven.ch' },
		{ date: new Date(), titel: 'Solothurner Musiktage', start: 'Beginn, ca. 21:00 Uhr', link: 'www.beleven.ch' },
	];
</script>

<section id="concert" class="relative z-0 bg-orange">
  <SectionSlantedTop isTopRight={false} colorName="orange" />

  <SectionContent>
    <SectionTitle colorName='darkblue'>Konzerte</SectionTitle>

    <div class="divide-y divide-white/40">
      {#each concerts_2022 as concert}
        <Concert date={concert.date} titel={concert.titel} start={concert.start} link={concert.link}/>
      {/each}
    </div>
  </SectionContent>
</section>

<style>
</style>
