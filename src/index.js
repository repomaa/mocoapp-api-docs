import SwaggerUI from "swagger-ui";
import spec from "../openapi.json";

SwaggerUI({
  dom_id: "#docs",
  spec,
});
