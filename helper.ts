import { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from "openapi-types";

type OpenApiSpec =
  | OpenAPIV2.Document
  | OpenAPIV3.Document
  | OpenAPIV3_1.Document;

export class OpenApiSpecHelper {
  constructor() {}
}
