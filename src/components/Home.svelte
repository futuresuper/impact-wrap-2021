<script>
  const clientSide = !import.meta.env.SSR;

  if (clientSide) {
    postData(
      "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/letter?rcode="
    );
  }

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  }
</script>

<div>Hello world</div>
