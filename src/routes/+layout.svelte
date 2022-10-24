<script>
  import '../app.css';
  import NavigationDesktop from '../components/layout/navigation_desktop.svelte';
  import NavigationMobile from '../components/layout/navigation_mobile.svelte';
</script>

<div class="hidden lg:block">
  <NavigationDesktop />
</div>
<div class="lg:hidden">
  <NavigationMobile />
</div>

<slot />
