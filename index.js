require("dotenv").config();
const app = require("./config/server");
const mainApp = require("./app");
const swaggerDocs = require("./config/swagger");


app.use(mainApp);

swaggerDocs(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger available at http://localhost:${PORT}/api-docs`);
  });