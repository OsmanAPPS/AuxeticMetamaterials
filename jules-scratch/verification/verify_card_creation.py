import os
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    base_path = os.path.abspath('.')
    calculator_page_url = f'file://{os.path.join(base_path, "calculator.html")}'
    page.goto(calculator_page_url)

    # **CRITICAL VERIFICATION STEP**
    # Assert that exactly 10 basic calculator cards are rendered.
    expect(page.locator(".card")).to_have_count(10)

    print("Verification successful: 10 skeleton cards were created.")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
