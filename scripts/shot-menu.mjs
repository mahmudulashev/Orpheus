import puppeteer from "puppeteer-core";
const EDGE = "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge";
const [, , out = "menu.png", theme = "dark"] = process.argv;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "shell",
  args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "load", timeout: 45000 });
  await page.evaluate((t) => localStorage.setItem("theme", t), theme);
  await page.reload({ waitUntil: "load", timeout: 45000 });
  await wait(1500);
  await page.click('button[aria-label="Open menu"]');
  await wait(1200);
  await page.screenshot({ path: out });
  console.log("ok", out);
} finally {
  await browser.close();
}
