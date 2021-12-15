<script>
  import Sections from "./Sections.svelte";

  const clientSide = !import.meta.env.SSR;

  // const cid = "90aaedd7-7329-4ac5-bfa9-6dd586300c2f";
  const cid = "9519a419-4af8-418c-8d6b-d3acfcb20743";

  const url1 = "https://api.futuresuper.com.au/api/auth-user";
  const url2 = "https://api.futuresuper.com.au/api/members/";
  const url3 = "https://api.futuresuper.com.au/api/members/";

  let loading = true;
  let loggedIn = false;
  let userDetails;
  let member;
  let name;
  let option;
  let rank;
  let joined;

  if (clientSide) {
    getUserDetails();
  }

  async function getUserDetails() {
    let response = await getData(url1);
    member = response.user_id;

    if (member) {
      userDetails = await getData(url2 + member);
      name = userDetails.contact.first_name;
      option = invIdToOption[userDetails.accounts[0].investment_option_id];
      dateInfo = await getData(url3 + member);
      rank = 123; // dateInfo.rank;
      joined = "March 2016"; // dateInfo.joined;
    }

    if (!userDetails) {
      loggedIn = false;
      loading = false;
    }
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
    return response.json();
  }

  const options = {
    RPG: "Renewables Plus Growth",
    BI: "Balanced Impact",
    PENSION: "Balanced Growth Pension",
  };
  const invIdToOption = {
    "11": options.RPG,
  };

  $: if (userDetails) {
    investmentOption =
      invIdToOption[userDetails.accounts[0].investment_option_id];
  }

  let user = {
    name,
    option,
    rank,
    joined,
  };

  $: console.log(user);
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
