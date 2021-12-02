<script>
  import Title from "../components/sections/Title.svelte";
  import Option from "../components/sections/Option.svelte";
  import EveryDollar from "../components/sections/EveryDollar.svelte";

  const clientSide = !import.meta.env.SSR;

  const screens = [
    "title",
    "option",
    "everyDollar",
    "option",
    "everyDollar",
    "option",
    "everyDollar",
    "option",
    "everyDollar",
    "option",
    "everyDollar",
  ];

  let showing = 0;

  // $: console.log(showing);

  function nextScreen() {
    showing++;
  }

  if (clientSide) {
    setInterval(() => {
      // nextScreen();
    }, 3000);
  }
</script>

{#if "title" === screens[showing]}
  <Title />
{/if}

{#if "option" === screens[showing]}
  <Option />
{/if}

{#if "everyDollar" === screens[showing]}
  <EveryDollar />
{/if}

<style lang="scss">
  @use "../styles/" as *;
</style>
