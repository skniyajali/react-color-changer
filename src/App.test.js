import { render, screen } from "@testing-library/react";
import App from "./App";

const resemble = require("resemblejs");
const puppeteer = require("puppeteer");

const checkIfIsVisible = async (block) => {
  let valIsVisible = block.boundingBox();

  await valIsVisible.then((res) => {
    if (!res) {
      return false;
    }
    return true;
  });
};

test("test1", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let flag = true;

  try {
    //await page.goto('https://8081-ecedfdbaccfcbfadabafabfacdbddaceedaaabdcdcb.examlyiopb.examly.io');
    await page.goto("http://localhost:3000");
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    await page.waitForSelector("#dropdownContainer", { timeout: 500 });
    await page.click("#dropdownContainer");
    let block = await page.waitForSelector("#block", { timeout: 500 });
    if (await checkIfIsVisible(block)) {
      flag = false;
    }

    //await page.click('#dropdownContainer');
    if ((await checkIfIsVisible(block)) != null) {
      flag = false;
    }

    flag
      ? console.log("TESTCASE:test_case1:success")
      : console.log("TESTCASE:test_case1:failure");
  } catch (e) {
    console.log("TESTCASE:test_case1:failure");
  } finally {
    await page.close();
    await browser.close();
  }
});

test("test2", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let flag = true;

  try {
    //await page.goto('https://8081-ecedfdbaccfcbfadabafabfacdbddaceedaaabdcdcb.examlyiopb.examly.io');
    await page.goto("http://localhost:3000");
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    let block = await page.waitForSelector("#block", { timeout: 500 });
    if (await checkIfIsVisible(block)) {
      flag = false;
    }

    await page.click("#dropdownContainer");
    if ((await checkIfIsVisible(block)) != null) {
      flag = false;
    }

    await page.click("#dropdownWrapper");
    if (await checkIfIsVisible(block)) {
      flag = false;
    }

    flag
      ? console.log("TESTCASE:test_case2:success")
      : console.log("TESTCASE:test_case2:failure");
  } catch (e) {
    console.log("TESTCASE:test_case2:failure");
  } finally {
    await page.close();
    await browser.close();
  }
});

test("test3", async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let flag = true;

  try {
    //await page.goto('https://8081-ecedfdbaccfcbfadabafabfacdbddaceedaaabdcdcb.examlyiopb.examly.io');
    await page.goto("http://localhost:3000");
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    let block = await page.waitForSelector("#block", { timeout: 500 });
    if (await checkIfIsVisible(block)) {
      flag = false;
    }

    await page.click("#dropdownContainer");
    if ((await checkIfIsVisible(block)) != null) {
      flag = false;
    }
    await page.screenshot({ path: "screen.png" });

    const [element] = await page.$x("//button[contains(., 'Darkblue')]");
    await element.click();
    await page.screenshot({ path: "screen.png" });

    await page.evaluate(function () {
      flag =
        document.getElementById("Darkblue").style.backgroundColor ===
        "darkblue";
    });

    flag
      ? console.log("TESTCASE:test_case3:success")
      : console.log("TESTCASE:test_case3:failure");
  } catch (e) {
    // console.log(document.getElementById('option'));
    console.log(e);
    console.log("TESTCASE:test_case3:failure");
  } finally {
    await page.close();
    await browser.close();
  }
});
