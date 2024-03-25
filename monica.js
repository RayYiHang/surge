if ($response.body) {
  var objc = JSON.parse($response.body);
  if (objc["user_id"]) {
    temp_user = objc["user_id"];
    objc = {
      msg: "ok",
      vip_status: {
        invite_event_start: -1,
        invite_event_end: -1,
        interval: "month",
        reward_badge: 0,
        interval_count: 1,
        invite_event_id: "unlimited_queries",
        used_web_search_point: 0,
        point_period_start: 9709251200,
        unlimited_base_queries: false,
        has_customer: false,
        ext_reward_records: [],
        can_use_trial: false,
        try_vip_feature_left_days: 0,
        on_trial: true,
        version_at_period_end: "boost",
        point_period_end: 9711929599,
        from_exchange_code: false,
        unlimited_queries_invite_event_open: true,
        enable_new_user_yearly_reward: false,
        used_point: 0,
        unlimited_queries_invite_success_count: 0,
        current_period_start: 9711363495,
        cancel_at_period_end: false,
        user_id: temp_user,
        total_point: 6000,
        giveaway_vip_status: null,
        current_period_end: 9711622695,
        enable_giveaway_vip_days: 0,
        total_web_search_point: -1,
        used_reading_point: 0,
        vip_version: "boost",
        payment_platform: "apple",
        total_reading_point: -1,
        interval_at_period_end: "month",
        using_giveaway_vip: false,
      },
      code: 0,
    };
  }

  $done({ body: JSON.stringify(objc) });
} else {
  $done({ body: JSON.stringify({}) });
}
