<script>
  import SectionLayout from "../../layouts/SectionLayout.svelte";
</script>

<SectionLayout>
  <p>Together, you and other Future Super members have</p>

  <div>$1.18 Billion</div>

  <p>
    invested with Future Super, and <span class="bold">
      not in fossil fuels
    </span>
  </p>

  <p class="disclaimer">As at October 2021</p>
</SectionLayout>

<style lang="scss">
  @use "../../styles/" as *;

  div {
    --size: 40vh;
    background-color: $green;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 6vh;
  }
</style>
