<script>
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

  const screens = ["title", "option", "everyDollar"];

  let showing = 0;

  // $: console.log(showing);

  // function nextScreen() {
  //   showing++;
  // }

  // if (clientSide) {
  //   setInterval(() => {
  //     // nextScreen();
  //   }, 3000);
  // }
</script>

<Title />
<Option />
<Save />
<Included />
<Question />
<Answer />
<FiveB />
<Shake />
<Nightingale />
<FiveB />
<Joined />
<Members />
<FUM />
<Rating />
<More />

<style lang="scss">
  @use "../styles/" as *;
</style>
