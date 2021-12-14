<script>
  import WhiteBoxWithNote from "../ui/WhiteBoxWithNote.svelte";

  export let user;
  export let options;
  let invName = "Artesian Sustainability and Green Bond Fund"; // RPG

  if (user.option === options.RPG) {
    invName = "Infradebt Ethical Infrastructure Debt Fund";
  }
</script>

<WhiteBoxWithNote>
  <p class="xs">ANSWER</p>

  <div>
    <p class="text-on-pic">{invName}</p>
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
    height: 60vh;
    width: 40vh;
    max-width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url("https://res.cloudinary.com/future-super/image/upload/c_scale,w_1200,f_auto,q_auto/v1623370119/infradebt.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 20px;
    padding: 10px;
  }

  .text-on-pic {
    font-family: $bold;
    text-transform: uppercase;
    font-size: 3vh;
  }

  @media (max-width: 700px) {
    div {
      height: 44vh;
      width: 30vh;
    }
  }
</style>
