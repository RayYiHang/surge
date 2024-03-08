let temp = JSON.parse($response.body);

if (temp) {
  if (temp["data"] && temp["data"]["level_info"]) {
    temp["data"]["level_info"] = {
      base: 2,
      verify_info: [
        {
          verify_id: "6757",
          level: 2,
          icon_display: false,
          display_name: "VIP2",
          kind: 6,
          icon: "",
          verify_name: "service_level_2",
        },
      ],
    };
  }
  $done({ body: JSON.stringify(temp) });
} else {
  $done({});
}
