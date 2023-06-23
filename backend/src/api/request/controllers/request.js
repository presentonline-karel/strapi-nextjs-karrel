"use strict";

/**
 * request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::request.request');

/*module.exports = {

  // Connected to "Save" button in admin panel
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "karel.decoene3@gmail.com",
        from: "test@example.com", // e.g. single sender verification in SendGrid
        cc: "",
        bcc: "",
        replyTo: "anothertest@example.com",
        subject: "The Strapi Email plugin worked successfully",
        text: "${name}, ${email}, ${subject}, ${message}", // Replace with a valid field ID
        html: "Hello world!",
      });
    } catch (err) {
      console.log(err);
    }
  },
};*/
