from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Verify Home Page
    page.goto("http://localhost:5173/")

    # Explicitly wait for the main heading of the home page to appear with a longer timeout
    home_heading = page.get_by_role("heading", name="Auxetic Metamaterials: The Counter-Intuitive Materials")
    expect(home_heading).to_be_visible(timeout=10000)

    page.screenshot(path="jules-scratch/verification/home_page.png")

    # Navigate to Calculator Page and verify
    calculator_link = page.get_by_role("link", name="Hesaplama")
    calculator_link.click()

    # Explicitly wait for the main heading of the calculator page
    calculator_heading = page.get_by_role("heading", name="Formula Calculator")
    expect(calculator_heading).to_be_visible(timeout=10000)

    # Fill in a simple calculation to ensure interactivity
    card = page.locator(".card", has_text="Stress (σ)").first
    card.get_by_label("Force (F):").fill("100")
    card.get_by_label("Area (A):").fill("10")
    card.get_by_role("button", name="Calculate").click()

    result_locator = card.locator(".result")
    expect(result_locator).to_have_text("Result: 10.0000")

    page.screenshot(path="jules-scratch/verification/calculator_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
