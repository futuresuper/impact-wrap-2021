<script>
  import Header from "./Header.svelte";
  import Controls from "./Controls.svelte";
  import FiveB from "./sections/FiveB.svelte";
  import Answer from "./sections/Answer.svelte";
  import FUM from "./sections/FUM.svelte";
  import Included from "./sections/Included.svelte";
  import Joined from "./sections/Joined.svelte";
  import Members from "./sections/Members.svelte";
  import More from "./sections/More.svelte";
  import Nightingale from "./sections/Nightingale.svelte";
  import Option from "./sections/Option.svelte";
  import Question from "./sections/Question.svelte";
  import Rating from "./sections/Rating.svelte";
  import Save from "./sections/Save.svelte";
  import Shake from "./sections/Shake.svelte";
  import Title from "./sections/Title.svelte";

  const clientSide = !import.meta.env.SSR;

  const screens = [
    "Title",
    "Option",
    "Save",
    "Included",
    "Question",
    "Answer",
    "Shake",
    "Nightingale",
    "FiveB",
    "Joined",
    "Members",
    "FUM",
    "Rating",
    "More",
  ];

  let showing = 0;

  function setScreen(i) {
    showing = i;
  }

  // $: console.log(showing);

  function nextScreen() {
    showing = showing + 1;
  }

  // if (clientSide) {
  //   setInterval(() => {
  //     // nextScreen();
  //   }, 3000);
  // }
</script>

<div class="grid">
  <header>
    <Header {screens} {setScreen} {showing} />
  </header>
  <section>
    {#if "Title" === screens[showing]}
      <Title />
    {:else if "Option" === screens[showing]}
      <Option />
    {:else if "Option" === screens[showing]}
      <Option />
    {:else if "Save" === screens[showing]}
      <Save />
    {:else if "Included" === screens[showing]}
      <Included />
    {:else if "Question" === screens[showing]}
      <Question />
    {:else if "Answer" === screens[showing]}
      <Answer />
    {:else if "Shake" === screens[showing]}
      <Shake />
    {:else if "Nightingale" === screens[showing]}
      <Nightingale />
    {:else if "FiveB" === screens[showing]}
      <FiveB />
    {:else if "Joined" === screens[showing]}
      <Joined />
    {:else if "Members" === screens[showing]}
      <Members />
    {:else if "FUM" === screens[showing]}
      <FUM />
    {:else if "Rating" === screens[showing]}
      <Rating />
    {:else if "More" === screens[showing]}
      <More />
    {/if}
  </section>
  <div class="controls">
    <Controls />
  </div>
</div>

<style lang="scss">
  @use "../styles/" as *;

  .grid {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10vh 1fr 54px;
    background-color: $black;
    color: $white;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
</style>
