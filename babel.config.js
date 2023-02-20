module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
        'babel-preset-expo',
        [
            "@babel/preset-env",
             {
                "targets": {
                    "node": "10.0.0"
                },
                "loose":true
            }
       ],
        "module:metro-react-native-babel-preset",
       "@babel/preset-react"
    ],
    plugins: [
        [
            "module-resolver",
            {
              extensions: [".tsx", ".ts", ".js", ".json"],
            },
        ],
//        ["@babel/plugin-proposal-decorators", { "legacy": true }],
//        ["@babel/plugin-transform-runtime",{"regenerator": true}],
//        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        "react-native-reanimated/plugin",
    ],
  };
};
