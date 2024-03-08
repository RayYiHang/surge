var temp = JSON.parse($response.body);

if (temp) {
  temp["pro_plan"] = "pro_premium";
  temp["plan"] = {
    billing_cycle: "m",
    subscription_id: "730001394409785",
    is_payments_banned: false,
    platform_product_id: "com.tradingview.pro.premium.monthly",
    is_hold_period: false,
    promo_available_timestamp: null,
    merchant: "apple",
    next_billing_cycle: "m",
    pro_plan_expire_on: 3712552491,
    is_lite_plan: false,
    is_trial_available: false,
    next_pro_plan: null,
    pro_plan: "pro_premium",
    is_grace_period: false,
    is_renewal_active: false,
    is_renewal_paused: false,
  };
  temp["badges"][0] = {
    name: "pro:pro_premium",
    verbose_name: "Premium",
  };
  $done({ body: JSON.stringify(temp) });
} else {
  $done({});
}
