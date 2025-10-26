import os
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    base_path = os.path.abspath('.')
    calculator_page_url = f'file://{os.path.join(base_path, "calculator.html")}'
    page.goto(calculator_page_url)

    # **CRITICAL DIAGNOSTIC STEP**
    # Assert that at least ONE card is rendered.
    expect(page.locator(".card")).to_have_count(1)

    print("Verification successful: The basic DOM manipulation is working.")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
