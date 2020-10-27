module.exports = async (context, callback) => {
    return [
        {
            "content_type": "text",
            "title": "Hello",
            "payload": [
                "START",
                {
                    "lead_ts_traveling_to": "VarSettingTest"
                }
            ]
        },
        {
            "content_type": "text",
            "title": "World",
            "payload": [
                "START",
                {
                    "lead_ts_traveling_to": "AnotherVarSettingTest"
                }
            ]
        }
    ]
};