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

  const standardTime = 3000;
  const screens = [
    ["Title", standardTime], // Name, Time
    ["Option", 6000],
    ["Save", standardTime],
    ["Included", standardTime],
    ["Question", standardTime],
    ["Answer", standardTime],
    ["Shake", standardTime],
    ["Nightingale", standardTime],
    ["FiveB", standardTime],
    ["Joined", standardTime],
    ["Members", standardTime],
    ["FUM", standardTime],
    ["Rating", standardTime],
    ["More", standardTime],
  ];

  let showing = 0;

  function setScreen(i) {
    showing = i;
  }
</script>

<div class="grid">
  <header>
    <Header {screens} {setScreen} {showing} />
  </header>
  <section>
    {#if "Title" === screens[showing][0]}
      <Title />
    {:else if "Option" === screens[showing][0]}
      <Option />
    {:else if "Option" === screens[showing][0]}
      <Option />
    {:else if "Save" === screens[showing][0]}
      <Save />
    {:else if "Included" === screens[showing][0]}
      <Included />
    {:else if "Question" === screens[showing][0]}
      <Question />
    {:else if "Answer" === screens[showing][0]}
      <Answer />
    {:else if "Shake" === screens[showing][0]}
      <Shake />
    {:else if "Nightingale" === screens[showing][0]}
      <Nightingale />
    {:else if "FiveB" === screens[showing][0]}
      <FiveB />
    {:else if "Joined" === screens[showing][0]}
      <Joined />
    {:else if "Members" === screens[showing][0]}
      <Members />
    {:else if "FUM" === screens[showing][0]}
      <FUM />
    {:else if "Rating" === screens[showing][0]}
      <Rating />
    {:else if "More" === screens[showing][0]}
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
