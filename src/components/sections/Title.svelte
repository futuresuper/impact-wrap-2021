<script>
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import ImpactWrapCircle from "../images/ImpactWrapCircle.svelte";
</script>

<section>
  <CircleAroundText heading="ANDREW" textColour="#00F724">
    <ImpactWrapCircle />
  </CircleAroundText>
  <h3>Let's look at what your money did this year</h3>
</section>

<style lang="scss">
  @use "../../styles/" as *;

  section {
    margin: 0;
    background-color: $black;
    min-height: 100vh;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-family: $regular;
  }
</style>
