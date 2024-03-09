var res = JSON.parse($response.body);

if (res["subscription"]) {
  res["subscription"] = 1;
  $done({ body: JSON.stringify(res) });
} else {
  $done({});
}
