const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDef = require("../docs/swaggerDef");

// Load file YAML Swagger
const swaggerAuth = YAML.load(path.join(__dirname, "../public/auth.yaml"));
const swaggerItems = YAML.load(path.join(__dirname, "../public/items.yaml"));
const swaggerEmail = YAML.load(path.join(__dirname, "../public/email.yaml"));


// Validasi jika file tidak ditemukan
if (!swaggerAuth || !swaggerItems) {
  console.error("Error loading Swagger YAML files");
  process.exit(1);
}

// Gabungkan definisi Swagger
const swaggerSpec = {
  ...swaggerDef,
  paths: {
    ...swaggerAuth.paths,
    ...swaggerItems.paths,
    ...swaggerEmail.paths,

  },
};

// Fungsi untuk menambahkan Swagger UI ke aplikasi
const swaggerDocs = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customCssUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css",
      customCss:
        ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }",
    })
  );
  console.log("Swagger docs available at /api-docs");
};

module.exports = swaggerDocs;
