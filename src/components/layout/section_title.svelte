<script lang="ts">
  export let colorName: String;
</script>

<div class="font-fontain 
            sm:text-8xl text-7xl 
            text-center 
            tracking-widest 
            pt-32 pb-24 
            {colorName=='orange' ? 'text-orange': ''} 
            {colorName=='white' ? 'text-white': ''} 
            {colorName=='darkgray' ? 'text-darkgray': ''} 
            {colorName=='midgray' ? 'text-midgray': ''} 
            {colorName=='darkblue' ? 'text-darkblue': ''}"
            >
  <slot />
</div>

<style>
</style>
