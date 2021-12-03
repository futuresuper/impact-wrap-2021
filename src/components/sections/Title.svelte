<script>
  import SectionLayout from "../../layouts/SectionLayout.svelte";
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import ImpactWrapCircle from "../images/ImpactWrapCircle.svelte";

  export let name = "Name";
</script>

<SectionLayout>
  <CircleAroundText heading={name.toUpperCase()} textColour="#00F724">
    <ImpactWrapCircle />
  </CircleAroundText>
  <p class="l">Let's look at what your money did this year</p>
</SectionLayout>

<style lang="scss">
  @use "../../styles/" as *;
</style>
