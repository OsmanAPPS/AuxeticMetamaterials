import os
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    base_path = os.path.abspath('.')
    calculator_page_url = f'file://{os.path.join(base_path, "calculator.html")}'
    page.goto(calculator_page_url)

    # Check if the simple "Test" div was successfully added by script.js
    test_div = page.locator('#calculator-grid > div')
    expect(test_div).to_have_text('Test')

    print("Verification successful: HTML and JS connection is working.")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
