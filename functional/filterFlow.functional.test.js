const { Builder, By } = require("selenium-webdriver");

describe("Fluxo de Filtros", () => {

  let driver;

  beforeAll(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("deve filtrar crimes corretamente", async () => {
    await driver.findElement(By.id("dataInicial")).sendKeys("2025-11-01");
    await driver.findElement(By.id("dataFinal")).sendKeys("2025-11-20");
    await driver.findElement(By.id("tipoCrime")).sendKeys("Furto");

    await driver.findElement(By.id("btnFiltrar")).click();

    const dashboard = await driver.findElement(By.id("dashboard"));
    expect(await dashboard.isDisplayed()).toBe(true);
  });

});
