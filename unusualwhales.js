if ($response.body) {
  var objc = JSON.parse($response.body);
  if (!objc["is_pro"]) {
    objc["is_pro"] = true;
  }

  $done({ body: JSON.stringify(objc) });
} else {
  $done({ body: JSON.stringify({}) });
}
