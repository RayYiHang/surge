if ($response.body) {
  var body = $response.body.replace(/false/g, true);

  $done({ body });
} else {
  $done({ body: JSON.stringify({}) });
}
