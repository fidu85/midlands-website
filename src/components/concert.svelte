<script lang="ts">
  export let date: Date = new Date();
  export let titel: String = 'Titel';
  export let start: String = 'Start';
  export let link: string = '';
</script>

<div class="sm:px-12">
  <div class="flex flex-row items-end space-x-6 sm:space-x-12">
    <div class="day text-white font-cooper-heavy opacity-50">{new Intl.DateTimeFormat('de', { day: '2-digit' }).format(date)}</div>
    <div class="text-darkblue font-cooper-bold text-lg leading-6 sm:text-4xl pb-7 sm:pb-12 ">{titel}</div>
  </div>

  <div class="flex flex-row items-start space-x-6 sm:space-x-12 -mt-8 sm:-mt-14">
    <div class="month text-white font-cooper-heavy uppercase opacity-50">{new Intl.DateTimeFormat('de', { month: 'short' }).format(date)}</div>
    <div class="flex flex-col justify-between pt-2 sm:pt-4">
      <div class="text-darkblue font-cooper-semibold text-base sm:text-2xl ">{start}</div>
      {#if link != ''}
        <span class="text-darkblue stroke-darkblue hover:text-white/60 hover:stroke-white/60 flex flex-row items-baseline gap-1 hover:gap-2 duration-300">
          <a class="font-cooper-semibold text-sm sm:text-lg sm:pt-2" target="_blank" href={link}>Mehr Infos</a>
          <svg width="14" height="12" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H17M10 1L17 8L10 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      {/if}
    </div>
  </div>
</div>

<style>
  .day {
    width: 86px;
    font-size: 72px;
  }

  .month {
    width: 86px;
    font-size: 46px;
  }

  @media (min-width: 640px) {
    .day {
      width: 140px;
      font-size: 121px;
    }

    .month {
      width: 140px;
      font-size: 77px;
    }
  }
</style>
