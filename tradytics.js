if ($response.body) {
  var res = JSON.parse($response.body);
  
  res["subscription"] = 1;
  $done({ body: JSON.stringify(res) });
} else {
  $done({ body: JSON.stringify({}) });
}
