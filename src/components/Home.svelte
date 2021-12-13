<script>
  import Sections from "./Sections.svelte";

  const clientSide = !import.meta.env.SSR;

  const cid = "94f7111e-264d-4089-9db2-2c49b7f89eea";

  const url1 = "https://api.fsstaging.com.au/api/auth-user";
  const url2 = "https://api.fsstaging.com.au/api/members/045972";

  if (clientSide) {
    getData(url1);
    getData(url2);
  }

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://api.fsstaging.com.au",
        cid: cid,
      },
      credentials: "include",
    });
    console.log(response);
  }
</script>

<div class="container">
  <Sections />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
