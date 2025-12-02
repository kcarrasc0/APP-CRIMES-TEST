const { Builder, By } = require("selenium-webdriver");

describe("Fluxo de Relatório", () => {

  let driver;

  beforeAll(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("deve gerar relatório", async () => {
    await driver.findElement(By.id("btnRelatorio")).click();

    const modal = await driver.findElement(By.id("modalRelatorio"));
    expect(await modal.isDisplayed()).toBe(true);
  });

});
