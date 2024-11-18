import { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from "openapi-types";

type OpenApiVersion = "2" | "3" | "3.1";

type OpenApiSpec =
  | OpenAPIV2.Document
  | OpenAPIV3.Document
  | OpenAPIV3_1.Document;

export class OpenApiSpecHelper {
  private spec: OpenApiSpec;
  private version: OpenApiVersion;

  constructor() {}

  getSpec(): OpenApiSpec {
    return this.spec;
  }

  getVersion(): OpenApiVersion {
    return this.version;
  }

  // Loads the open api specification based on the version.
  load(spec: OpenApiSpec, version: OpenApiVersion) {
    this.spec = spec;
    this.version = version;
  }

  // Dereferences the data
}
