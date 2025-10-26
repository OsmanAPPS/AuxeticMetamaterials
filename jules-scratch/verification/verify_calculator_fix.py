import os
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Get absolute path for the calculator HTML file
    base_path = os.path.abspath('.')
    calculator_page_url = f'file://{os.path.join(base_path, "calculator.html")}'

    # Go to the calculator page
    page.goto(calculator_page_url)

    # **CRITICAL VERIFICATION STEP**
    # Assert that exactly 10 calculator cards are rendered on the page.
    # This proves that the JavaScript parsing error has been fixed.
    expect(page.locator(".card")).to_have_count(10)

    # Take a screenshot for visual confirmation
    page.screenshot(path="jules-scratch/verification/calculator_fixed_screenshot.png", full_page=True)

    print("Verification successful: 10 calculator cards were found.")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
