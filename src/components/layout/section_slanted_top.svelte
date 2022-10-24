<script lang="ts">
  export let isTopRight: Boolean;
  export let colorName: String;
</script>

<div
  class="before:content-[''] 
          before:block 
          before:w-full 
          before:h-1/4
          {isTopRight ? 'before:-skew-y-3' : 'before:skew-y-3'}
          {isTopRight ? 'before:origin-left' : 'before:origin-right'}
          before:absolute 
          before:top-0 
          {isTopRight ? 'before:left-0' : 'before:right-0'}
          before:-z-10 
          {colorName == 'orange' ? 'before:bg-orange' : ''} 
          {colorName == 'white' ? 'before:bg-white' : ''} 
          {colorName == 'darkgray' ? 'before:bg-darkgray' : ''} 
          {colorName == 'midgray' ? 'before:bg-midgray' : ''} 
          {colorName == 'darkblue' ? 'before:bg-darkblue' : ''}"
/>

<style>
</style>
