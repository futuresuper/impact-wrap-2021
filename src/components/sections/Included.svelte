<script>
  export let option;
  export let options;
  let number = 552; // RPG

  if (option === options.BI) {
    number = 450;
  } else if (option === options.PENSION) {
    number = 427;
  }
</script>

<p>Your super included</p>

<div class="circle">
  <div class="number">{number}</div>
</div>

<div>
  <p>different investments.</p>

  <p class="disclaimer">
    As at 30 June 2021. Counts investments by same issuer in same asset class as
    one. For ETFs, counts individual stocks within each ETF.
  </p>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .circle {
    --size: 280px;
    --max: 50vw;
    border: 1px solid $green;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    max-width: var(--max);
    max-height: var(--max);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .number {
    font-family: $bold;
    font-size: min(22vw, 110px);
    color: $green;
  }

  img {
    max-height: 50vh;
  }
</style>
