var objc = JSON.parse($response.body);

if (objc && objc["subscription"]) {
  objc["subscription"] = {
    status: "intro-trial",
    expiration_ts: "9999-03-30T07:06:24+00:00",
    trial_available: false,
    on_hold: false,
    trial_duration: "P1Y",
  };
}

$done({ body: JSON.stringify(objc) });
