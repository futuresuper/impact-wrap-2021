<script>
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import ImpactWrapCircle from "../images/ImpactWrapCircle.svelte";

  export let name;
  export let option;
  export let options;
  export let getStarted;
  export let balancedIndex;
  // let loggedIn;
  export let loading;
  let music = true;

  // $: console.log(name);
  // $: console.log(option);
  // // $: console.log("logged in: " + loggedIn);

  // $: if (name) {
  //   console.log("NAME: " + name);
  // }

  // $: if (option) {
  //   console.log("OPTION: " + option);
  // }
</script>

<CircleAroundText heading={name.toUpperCase()} textColour="#00F724">
  <ImpactWrapCircle />
</CircleAroundText>

<div class="bottom">
  {#if loading}
    <p class="m">Loading...</p>
  {:else}
    {#if name !== "Welcome" && !balancedIndex}
      <p class="s">Let's look at what your money did this year</p>
    {:else if balancedIndex}
      <p class="xs">
        <span class="bold"
          >Looks like you're in the Balanced Indexed option which does not have
          Impact Recap available...
        </span>Click below to view an example version with information for the
        'Renewables Plus Growth' option
      </p>
    {:else}
      <p class="xs">
        <span class="bold"
          >Looks like you're not logged in to your Account.&nbsp;
        </span><a href="https://my.futuresuper.com.au/"
          >Login first to get personalised Impact Recap</a
        > or click below to view an example version with information for the 'Renewables
        Plus Growth' option
      </p>
    {/if}

    <button on:click={() => getStarted(music)}
      >{name !== "Welcome" ? "Let's Go →" : "View Impact Recap Example Version"}
    </button>

    <div class="music" on:click={() => (music = !music)}>
      Sound

      {#if music}
        <div class="toggle-container on">
          <div class="dot on" />
        </div>
      {:else}
        <div class="toggle-container off">
          <div class="dot off" />
        </div>
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../../styles/" as *;

  p {
    margin-bottom: 20px;
  }

  button {
    background-color: $black;
    border-color: $green;

    &:hover {
      background-color: $green;
      color: $black;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .music {
    --height: 20px;
    width: 400px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    .toggle-container {
      width: 40px;
      height: var(--height);
      border: 2px solid $black500;
      border-radius: 10px;
      margin-left: 10px;
      display: flex;
      justify-content: flex-start;
      &.on {
        justify-content: flex-end;
      }
      .dot {
        width: 16px;
        height: 16px;
        background-color: $black500;
        border-radius: 50%;
        &.on {
          background-color: $green;
        }
      }
    }
  }
</style>
