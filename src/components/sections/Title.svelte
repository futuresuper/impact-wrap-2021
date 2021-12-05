<script>
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import ImpactWrapCircle from "../images/ImpactWrapCircle.svelte";

  export let name = "Name";
</script>

<CircleAroundText heading={name.toUpperCase()} textColour="#00F724">
  <ImpactWrapCircle />
</CircleAroundText>
<p class="l">Let's look at what your money did this year</p>

<style lang="scss">
  @use "../../styles/" as *;
</style>
