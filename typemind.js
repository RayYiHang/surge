if ($response.body) {
var body = $response.body.replace(/[\s\S]*
/g,'{
  "payload": {
    "plan": "premium"
  }
}')
}
$done({ body })
