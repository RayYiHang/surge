if ($response.body) {
    let body = JSON.parse($response.body);
    body.isPro = true;
    body = JSON.stringify(body);
    $done({body});
} else {
    $done({});
}
