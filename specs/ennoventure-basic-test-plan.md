# Ennoventure Basic Application Test Plan

## Scope
Cover the core Ennoventure marketing website flows:
- Main navigation
- Page content and headings
- Request Demo / Contact form
- FAQ interactions
- Footer navigation and social links
- Cookie consent controls

---

## 1. Navigation & Page Access

### Scenario 1.1: Main navigation works
Steps:
1. Open `https://ennoventure.com/`
2. Click “Home”
3. Click “Technology”
4. Click “Solutions”
5. Click “Resources”
6. Click “About”
7. Click “Request Demo” or navigate to `/contact`

Expected:
- “Home” loads `https://ennoventure.com/`
- “Technology” loads `https://ennoventure.com/brand-protection-technology`
- “Solutions” loads `https://ennoventure.com/solutions`
- “Resources” loads `https://ennoventure.com/resources`
- “About” loads `https://ennoventure.com/about`
- “Request Demo” goes to `/contact` or opens the contact interface
- Page titles and key headings match each page

### Scenario 1.2: Footer navigation works
Steps:
1. Scroll to the footer
2. Click footer links:
   - Home
   - Technology
   - Solutions
   - Brand Protection Solutions
   - Invisible Authentication
   - Online Brand Protection
   - Chirper
   - Anti Counterfeit Solutions
   - Product Authentication
   - Resources / Articles / Case Studies / Guides / ROI Calculator / Glossary / Compare
   - About Us / Partner / Careers / Privacy Policy / Terms & Conditions / Contact Us

Expected:
- Each footer link navigates to the correct target URL
- No broken links
- Footer social icons open external social profiles

---

## 2. Request Demo / Contact Form

### Scenario 2.1: Contact page and form fields display
Steps:
1. Navigate to `https://ennoventure.com/contact`
2. Confirm page title and hero content
3. Verify contact form appears inside the iframe
4. Confirm form fields:
   - First Name
   - Last Name
   - Company Name
   - Work Email
   - Phone
   - Your Business Requirements
   - Submit button

Expected:
- All required fields are visible
- Required field labels include “*”
- Placeholders are present for Name, Company Name, Work Email, Phone

### Scenario 2.2: Form validation - missing required fields
Steps:
1. Open contact form
2. Click Submit without entering any data

Expected:
- Validation errors appear for required fields
- Form does not submit successfully

### Scenario 2.3: Form validation - invalid email
Steps:
1. Fill in all required fields
2. Enter invalid email like `test@invalid`
3. Click Submit

Expected:
- Email validation rejects invalid value
- User is prompted to use a valid work email

### Scenario 2.4: Successful form submission
Steps:
1. Fill required fields with valid values
2. Click Submit

Expected:
- Submission is accepted or a success/confirmation message appears
- No client-side errors shown

---

## 3. Content & UX Checks

### Scenario 3.1: Home page hero and feature content
Steps:
1. Open home page
2. Verify hero text “Protect. Authenticate. Engage.”
3. Verify supporting statement about invisible brand protection
4. Confirm presence of “Request Demo” CTA
5. Verify feature cards such as:
   - Zero Process Change. Live in 48 hours.
   - Impossible to replicate unlike visible markers like QR and bar codes.
   - Scan with smartphone camera. Real time intelligence across markets.
   - End to end brand protection solution- across online and offline supply chain

Expected:
- Hero content is visible
- CTA appears and is actionable
- Feature cards display correct text

### Scenario 3.2: Technology page content sections
Steps:
1. Open `/brand-protection-technology`
2. Confirm headings:
   - “Brand Protection Technology”
   - “The Ennoventure Signature”
   - “How It Works”
3. Verify content such as:
   - Invisible cryptographic authentication
   - 100% Invisible
   - 2.3 sec verification speed
   - 200+ materials supported

Expected:
- Key technology messaging is present
- Content sections load without layout overlap

---

## 4. FAQ / Interactive Content

### Scenario 4.1: FAQ question expansion
Steps:
1. On `/brand-protection-technology` or `/contact`
2. Click each FAQ question:
   - Do we need new printing hardware or special inks?
   - How does invisible authentication differ?
   - How fast is product verification?
   - How does authentication integrate with existing brand protection programs?
   - How does this compare to QR codes, RFID, or blockchain-based authentication?

Expected:
- Each question expands or reveals the answer
- Answer text is visible and matches the page content

---

## 5. Cookie Banner & Compliance Controls

### Scenario 5.1: Cookie consent controls
Steps:
1. Open any page
2. Observe the cookie consent bar
3. Click:
   - Reject all
   - Customize
   - Accept all

Expected:
- Each button is visible and clickable
- The cookie banner responds appropriately
- Links to Privacy Policy work

---

## 6. Additional Basic Checks

### Scenario 6.1: Company logo navigation
Steps:
1. Click the company logo in the header

Expected:
- Navigation returns to Home page

### Scenario 6.2: External social links
Steps:
1. In footer, click:
   - LinkedIn
   - YouTube
   - Twitter
   - Facebook
   - Instagram

Expected:
- Each opens the correct external profile
- External links use the correct social href

---

## Notes
- The site uses an iframe-based contact form on `/contact`
- There is no visible sign of an authentication login flow; focus is on marketing and contact/demo interactions
- `Request Demo` is expected to route users to the contact interface or contact page
