<script>
</script>

<p class="m">Together, you and other Future Super members&nbsp;have</p>

<div class="circle">$1.18 Billion</div>

<div>
  <p class="m">
    invested with Future Super, and <span class="bold">
      not&nbsp;in&nbsp;fossil&nbsp;fuels
    </span>
  </p>

  <p class="disclaimer">As at October 2021</p>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .circle {
    --size: 36vh;
    background-color: $green;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 5.4vh;
  }

  @media (max-width: 600px) {
    .circle {
      --size: 26vh;
      font-size: 4vh;
    }
  }
</style>
