import { OpenAPIV2 } from "openapi-types";
import { OpenApiSpecHelper } from "./helper";
import swapiSpec from "./specs/v2/swapi.json";

const helper = new OpenApiSpecHelper();
const spec = swapiSpec as OpenAPIV2.Document;

helper.load(spec, "2");
console.log(helper.getSpec());
console.log(helper.getVersion());
