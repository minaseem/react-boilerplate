/**
 * Created by imamudinnaseem on 5/17/17.
 */

'use strict'
const config = require('config')
const webpack = require('webpack')

config.webpack.watch = process.env.NODE_ENV !== 'production'

module.exports = config.webpack
