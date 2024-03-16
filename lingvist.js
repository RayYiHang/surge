if ($response.body) {
  var objc = JSON.parse($response.body);

  objc = {
    "has_historical_services" : false,
    "latest_historical_service_paid" : false,
    "services" : [
      {
        "service" : "unlimited",
        "is_infinite" : false,
        "active_since_ts" : "2023-09-26T05:56:06.980051Z",
        "subscription" : {
          "uuid" : "LYH",
          "period" : "P1Y",
          "next_billing_ts" : null,
          "is_recurring" : true,
          "group_name" : "unlimited",
          "free_trial_duration" : "P14D",
          "is_on_one_time_discount" : false,
          "one_time_discount_duration" : null,
          "expiration_ts" : "9999-10-10T05:56:01Z",
          "price" : {
            "amount" : "348.000000",
            "currency" : "CNY",
            "schedule" : [
              {
                "amount" : 0,
                "discount_percentage" : 100,
                "periods" : 1,
                "name" : "free-trial",
                "starting_from_ts" : null,
                "duration" : "P14D"
              }
            ]
          },
          "is_on_permanent_discount" : false,
          "is_on_free_trial" : true,
          "permanent_discount_percentage" : null,
          "status" : "cancelled",
          "one_time_discount_percentage" : null
        },
        "title" : "Lingvist Unlimited. 1-year subscription",
        "unlimited_bundle" : {
  
        },
        "duration" : "P1Y",
        "payment_provider" : "apple-in-app",
        "active_until_ts" : "9999-10-10T05:56:06.980051Z",
        "is_active" : true,
        "product_name" : "unlimited-12-months"
      }
    ]
  }

  $done({ body: JSON.stringify(objc) });
} else {
  $done({ body: JSON.stringify({}) });
}
