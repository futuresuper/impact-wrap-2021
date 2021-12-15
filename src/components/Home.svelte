<script>
  import Sections from "./Sections.svelte";

  const clientSide = !import.meta.env.SSR;

  // const cid = "90aaedd7-7329-4ac5-bfa9-6dd586300c2f";
  const cid = "9519a419-4af8-418c-8d6b-d3acfcb20743";

  const url1 = "https://api.futuresuper.com.au/api/auth-user";
  const url2 = "https://api.futuresuper.com.au/api/members/";

  let loading = true;
  let loggedIn = false;
  let userId = false;
  let userDetails = false;

  if (clientSide) {
    getUserDetails();
  }

  async function getUserDetails() {
    let response = await getData(url1);
    userId = response.user_id;
    if (userId) {
      userDetails = await getData(url2 + userId);
    }
    console.log(userDetails);
  }

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://api.futuresuper.com.au",
        cid: cid,
      },
      credentials: "include",
    });
    console.log(response);
  }

  const options = {
    RPG: "Renewables Plus Growth",
    BI: "Balanced Impact",
    PENSION: "Balanced Growth Pension",
  };

  let memberNumber = "045972";

  let user = {
    name: "Andrew",
    option: options.RPG,
    rank: 7126,
    joined: "March 2017",
  };
</script>

<div class="container">
  <Sections {user} {options} />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
