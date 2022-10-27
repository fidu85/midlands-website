<script lang="ts">
  export let date: Date = new Date();
  export let titel: String = 'Titel';
  export let start: String = 'Start';
  export let link: string = 'https://www.midlands.ch';
</script>

<div class="sm:px-12">
  <div class="flex flex-row items-end space-x-6 sm:space-x-12">
    <div class="day text-white font-cooper-heavy opacity-40">{new Intl.DateTimeFormat('de', { day: '2-digit' }).format(date)}</div>
    <div class="text-darkblue font-cooper-bold text-lg leading-6 sm:text-4xl pb-7 sm:pb-12">{titel}</div>
  </div>

  <div class="flex flex-row items-start space-x-6 sm:space-x-12 -mt-8 sm:-mt-14">
    <div class="month text-white font-cooper-heavy opacity-40 uppercase">{new Intl.DateTimeFormat('de', { month: 'short' }).format(date)}</div>
    <div class="flex flex-col justify-between pt-2 sm:pt-4">
      <div class="text-darkblue font-cooper-semibold text-base sm:text-2xl">{start}</div>
      <a class="text-darkblue font-cooper-semibold text-sm sm:text-lg underline sm:pt-2" target="_blank" href={link}>Link</a>
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
