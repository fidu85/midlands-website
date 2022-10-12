<script lang="ts">
  export let isTopRight: Boolean;
  export let color: String;

  function getDirection(): String {
    return isTopRight ? "left" : "right";
  }
</script>

<div
  class="before:content-[''] 
          before:block 
          before:w-full 
          before:h-36 
          before:{isTopRight ? '-' : ''}skew-y-3
          before:origin-{getDirection()} 
          before:absolute 
          before:top-0 
          before:{getDirection()}-0 
          before:-z-10 
          before:bg-{color}"
/>

<style>
</style>
