const { Builder, By } = require("selenium-webdriver");

describe("Fluxo com Filtro Vazio", () => {

  let driver;

  beforeAll(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("deve exibir aviso quando filtros estiverem vazios", async () => {
    await driver.findElement(By.id("btnFiltrar")).click();

    const alert = await driver.findElement(By.id("alertaFiltro"));
    expect(await alert.isDisplayed()).toBe(true);
  });

});
