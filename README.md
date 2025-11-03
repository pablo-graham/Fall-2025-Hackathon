# Food MED — Personal Food Safety Analyzer

Quick check before you eat. Upload a meal photo or list ingredients and get instant flags for risky combinations, allergens, medication/medical conflicts, faith-based restrictions, and basic meal balance. Wellness tool only — not medical advice.

## Quick Start
- Open the site and complete the short survey (medical conditions, diet/religion, working environment).
- Add a meal: upload a photo or type ingredients.
- Review results: detected foods, warnings, and clear “remove/add” recommendations.

## How it works (seconds)
![](/food_harmony_main/public/image.png)
1. Quick survey — capture allergies, medications, diet/religion, and work/health context (10–20s).
   ![](/food_harmony_main/public/image-1.png)

2. Add a meal — upload a photo or paste/type ingredients (5–10s).
   ![](/food_harmony_main/public/image-2.png)

3. Automatic detection — vision + OCR parse the photo/text into a structured ingredient list (1–3s).
   

4. Rule checks — run allergen, drug–food, disease heuristics, and faith-based restriction rules; surface flags and edit suggestions (1–2s).

5. Balance & tips — simple protein/fiber/fat/sodium score, hydration guidance, and clear “remove/add” recommendations (≈1s).
   ![](/food_harmony_main/public/image-3.png)
   ![](/food_harmony_main/public/image-4.png) 

Results include confidence scores, quick edit to ingredients, and compact actionable guidance.

## Features
- Hidden allergen and gluten detection (celiac-aware).
- Diabetes-related risk flags (sugar, saturated fat, sodium).
- CKD heuristics (potassium/phosphorus guidance).
- Common food–drug interaction alerts (e.g., grapefruit × statins; vitamin K × warfarin).
- Religious/dietary notes (e.g., Halal).
- High-level meal balance and hydration advice.

## Limitations
- Image detection can miss ingredients or misidentify complex regional dishes.
- Portion estimates are approximate.
- Not exhaustive — always use professional medical judgement.

## Privacy (MVP)
- No logins required.
- Inputs are used only for the current session.
- Uploaded photos are processed solely to identify ingredients and are not stored long-term.

## Disclaimer
Educational/wellness only. Not a medical device and not a substitute for professional advice.

## Contributing
Open an issue or submit a PR. Keep changes focused and add tests for new rules or detections.

## Feedback / Contact
Found an issue or want a feature? Open an issue or email: 
thunhantruong0810@gmail.com
pablohruiz.327@gmail.com

## License
MIT
