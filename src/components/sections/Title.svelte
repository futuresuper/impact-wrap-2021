<script>
  import SectionLayout from "../../layouts/SectionLayout.svelte";
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import ImpactWrapCircle from "../images/ImpactWrapCircle.svelte";
</script>

<SectionLayout>
  <CircleAroundText heading="NAME" textColour="#00F724">
    <ImpactWrapCircle />
  </CircleAroundText>
  <p class="l">Let's look at what your money did this year</p>
</SectionLayout>

<style lang="scss">
  @use "../../styles/" as *;
</style>
