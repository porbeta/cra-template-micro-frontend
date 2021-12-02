module.exports = {
  "presets": [
    "@babel/preset-env", 
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-class-properties",
    "@babel/plugin-proposal-class-properties"
  ],
  "test": [
    "jest"
  ]
}