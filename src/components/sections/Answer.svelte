<script>
  import WhiteBoxWithNote from "../ui/WhiteBoxWithNote.svelte";
</script>

<WhiteBoxWithNote>
  <p class="xs">ANSWER</p>

  <div>
    <p class="text-on-pic">Infradebt Ethical Infrastructure Debt Fund</p>
  </div>

  <p class="putting">
    Putting your super into large-scale solar and renewables projects.
  </p>
</WhiteBoxWithNote>

<style lang="scss">
  @use "../../styles/" as *;

  .putting {
    margin-bottom: 0;
  }

  div {
    border-radius: 40px;
    height: 40vh;
    width: 35vh;
    max-width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url("https://res.cloudinary.com/future-super/image/upload/c_scale,w_1200,f_auto,q_auto/v1623370119/infradebt.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 20px;
  }

  .text-on-pic {
    font-family: $bold;
    text-transform: uppercase;
    font-size: 3.4vh;
  }
</style>
