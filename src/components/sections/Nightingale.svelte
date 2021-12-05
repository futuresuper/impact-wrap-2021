<script>
  import SectionLayout from "../../layouts/SectionLayout.svelte";
  import Note from "../ui/Note.svelte";
</script>

<SectionLayout>
  <p class="l">Nightingale</p>

  <img
    src="https://res.cloudinary.com/future-super/image/upload/c_scale,w_1200,f_auto,q_auto/v1623370119/nightingale.png"
    alt="People tending to vegetable garden"
  />

  <p>
    Disrupting the housing market with affordable, fossil fuel free
    developments.
  </p>

  <Note />
</SectionLayout>

<style lang="scss">
  @use "../../styles/" as *;

  img {
    border-radius: 40px;
    margin-bottom: 20px;
    max-height: 40vh;
  }
</style>
