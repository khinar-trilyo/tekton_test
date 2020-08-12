functions.getData(bot_flow.properties, session.child_botId || session.botId, function(props) {
        let returnData = [];
        if (callback) callback(returnData);
        return "Hello from the other side"
    });