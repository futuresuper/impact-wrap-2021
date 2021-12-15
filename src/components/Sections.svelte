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

  const standardTime = 4500;
  const screens = [
    ["Title", 0], // Name, Time.  0 = Pause at screen
    ["Option", 6000],
    ["Save", standardTime],
    ["Included", standardTime],
    ["Question", 0],
    ["Answer", 6000],
    ["Shake", standardTime],
    ["Nightingale", standardTime],
    ["FiveB", standardTime],
    ["Joined", standardTime],
    ["Members", standardTime],
    ["FUM", 5500],
    ["Rating", 0],
    ["More", 0],
  ];

  export let name;
  export let option;
  export let joined;
  export let rank;
  export let options;
  let showing = 0;
  let paused = false;
  let musicMuted = true;
  let mainMusicPaused = true;
  let thinkingMusicPaused = true;
  let last = false;

  function setScreen(i) {
    showing = i;
  }

  function nextScreen() {
    showing = showing === screens.length - 1 ? screens.length - 1 : showing + 1;
  }

  function goBack() {
    showing = showing === 0 ? 0 : showing - 1;
  }

  function restart() {
    showing = 0;
  }

  function togglePaused() {
    paused = !paused;
  }

  function toggleMute() {
    musicMuted = !musicMuted;
  }

  function getStarted(music) {
    musicMuted = !music;
    mainMusicPaused = !music;
    nextScreen();
  }

  $: if (showing === screens.length - 1) {
    last = true;
  } else {
    last = false;
  }
</script>

<audio bind:muted={musicMuted} bind:paused={mainMusicPaused} autoplay loop>
  <source src="audio/track.mp3" type="audio/mpeg" />
</audio>

<div class="grid">
  <header>
    <Header {screens} {setScreen} {showing} {paused} />
  </header>
  <section>
    {#if "Title" === screens[showing][0]}
      <Title {getStarted} {name} />
    {:else if "Option" === screens[showing][0]}
      <Option {option} {options} />
    {:else if "Save" === screens[showing][0]}
      <Save />
    {:else if "Included" === screens[showing][0]}
      <Included {option} {options} />
    {:else if "Question" === screens[showing][0]}
      <Question {nextScreen} {option} {options} />
    {:else if "Answer" === screens[showing][0]}
      <Answer {option} {options} />
    {:else if "Shake" === screens[showing][0]}
      <Shake />
    {:else if "Nightingale" === screens[showing][0]}
      <Nightingale />
    {:else if "FiveB" === screens[showing][0]}
      <FiveB />
    {:else if "Joined" === screens[showing][0]}
      <Joined {joined} {rank} />
    {:else if "Members" === screens[showing][0]}
      <Members />
    {:else if "FUM" === screens[showing][0]}
      <FUM />
    {:else if "Rating" === screens[showing][0]}
      <Rating {nextScreen} />
    {:else if "More" === screens[showing][0]}
      <More />
    {/if}
  </section>
  <div class="controls">
    <Controls
      {togglePaused}
      {goBack}
      {toggleMute}
      {showing}
      {paused}
      {last}
      {restart}
      {musicMuted}
    />
  </div>
</div>

<style lang="scss">
  @use "../styles/" as *;

  .grid {
    height: 96vh;
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

  @media (max-width: 600px) {
    .grid {
      height: 85vh;
    }
  }
</style>
