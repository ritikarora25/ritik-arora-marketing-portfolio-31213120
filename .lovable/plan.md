Plan: SEO metadata improvements in index.html

1. Update the `<title>`
   - Change from: `Ritik Arora | Marketing Portfolio`
   - Change to: `Ritik Arora | CRM & Product Marketing Specialist | Portfolio`
   - Keeps keyword-rich title under 60 characters.

2. Update the meta description
   - Change from the current generic marketing portfolio description.
   - Use: `CRM, lifecycle marketing and product marketing specialist with 5+ years in fintech, ecommerce and B2B growth. View portfolio, campaigns and case studies.`
   - This version keeps the full keyword set from the user’s proposed copy but trims "of experience" to stay under 160 characters (≈153 chars).

3. Add identifier to JSON-LD Person object
   - Insert:
     ```json
     "identifier": "ritik-arora-marketing-portfolio"
     ```

4. Add nationality to JSON-LD Person object
   - Insert:
     ```json
     "nationality": {
       "@type": "Country",
       "name": "India"
     }
     ```

File touched:
- `index.html` — title, description, and JSON-LD updates only.

No other UI, styling, or backend changes. After implementation, verify the build passes and the JSON-LD remains valid.