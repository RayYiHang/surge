let res = JSON.parse($response.body);

if (res && res["meta"] && res["meta"]["plan_restricted"]) {
  res["meta"]["plan_restricted"] = false;
  $done({ body: JSON.stringify(res) });
} else {
  $done({});
}
