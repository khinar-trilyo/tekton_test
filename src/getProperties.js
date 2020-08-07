functions.getPropertiesss(bot_flow.properties, session.child_botId || session.botId, function(props) {
        let returnData = [];
        let countriesArray = [];
        props.map(property => {
            let config = JSON.parse(property.config);
            if (countriesArray.indexOf(config.country_code) == -1) {
                countriesArray.push(config.country_code);
                returnData.push({
                    "content_type": "text",
                    "title": `:flag-${config.country_code}: ${config.country}`,
                    "payload": ["SHOW_HOSTELS", {
                        "lead_ts_traveling_to": config.country
                    }]
                })
            }

        })
        if (callback) callback(returnData);
    });