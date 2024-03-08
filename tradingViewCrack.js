let temp = JSON.parse($response.body);

if (temp) {
  temp["pro_plan"] = "pro_premium";
  temp["plan"] = {
    billing_cycle: "m",
    subscription_id: "730001394409783",
    is_payments_banned: false,
    platform_product_id: "com.tradingview.pro.premium.monthly.trial",
    is_hold_period: false,
    promo_available_timestamp: null,
    merchant: "apple",
    next_billing_cycle: "m",
    pro_plan_expire_on: 4712552491,
    is_lite_plan: false,
    is_trial_available: false,
    next_pro_plan: "pro_premium",
    pro_plan: "pro_premium_trial",
    is_grace_period: false,
    is_renewal_active: true,
    is_renewal_paused: false,
  };
  if (temp["badges"]) {
    temp["badges"][0] = {
      name: "pro:pro_premium_trial",
      verbose_name: "Premium试用",
    };
  }
  $done({ body: JSON.stringify(temp) });
} else {
  $done({});
}
