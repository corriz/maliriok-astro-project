# Malíři Ondroušek & Klas – Astro skeleton

Produkční skeleton pro jednoduchý prezentační web malířské firmy.

## Co obsahuje

- Astro + Tailwind základ
- všechny stránky
- detailní stránky služeb
- SEO metadata
- JSON-LD schema
- robots.txt + sitemap
- kontakt formulář
- ochranu kontaktu přes reveal po kliknutí

## Spuštění

```bash
npm install
npm run dev
```

## Co doplnit před produkcí

1. skutečné telefonní číslo a e-mail v `src/data/site.ts`
2. skutečné IČO / právní údaje do privacy a schema
3. favicon / logo ve finální podobě
4. skutečné GA4 ID
5. napojení formuláře v `src/pages/api/contact.ts`
6. cookie lištu a consent mode UI

## Poznámka

`/api/contact` je připravený skeleton endpoint. V čistě statickém hostingu je potřeba jej nasadit přes serverless funkci nebo nahradit externí službou.
