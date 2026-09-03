import puppeteer from "puppeteer-core";

const EDGE = "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge";
const [, , out = "shot.png", theme = "dark", width = "1728"] = process.argv;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "shell",
  args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: Number(width), height: 1000 });
  await page.goto("http://localhost:3000", { waitUntil: "load", timeout: 45000 });
  await page.evaluate((t) => localStorage.setItem("theme", t), theme);
  await page.reload({ waitUntil: "load", timeout: 45000 });
  await wait(1500);
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await sleep(90);
    }
    window.scrollTo(0, 0);
    await sleep(700);
  });
  await wait(400);
  await page.screenshot({ path: out, fullPage: true });
  console.log(out, theme, "height:", await page.evaluate(() => document.documentElement.scrollHeight));
} finally {
  await browser.close();
}
