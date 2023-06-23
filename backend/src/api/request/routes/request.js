'use strict';

/**
 * request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::request.request');

//module.exports = createCoreRouter('api::request.afterCreate');