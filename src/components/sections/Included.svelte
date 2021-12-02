<script>
  import SectionLayout from "../../layouts/SectionLayout.svelte";
</script>

<SectionLayout>
  <p>Your super included</p>

  <div class="circle">
    <div class="number">552</div>
  </div>

  <p>different investments.</p>

  <p class="disclaimer">
    As at 30 June 2021. Counts investments by same issuer in same asset class as
    one. For ETFs, counts individual stocks within each ETF.
  </p>
</SectionLayout>

<style lang="scss">
  @use "../../styles/" as *;
</style>
