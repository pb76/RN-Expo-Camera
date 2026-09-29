# RN Expo Camera

Det här projektet är en enkel React Native-applikation som använder Expo Camera. Appen visar kamerabilden, låter användaren växla mellan fram- och bakkamera och ta ett foto.

## Förutsättningar

- Node.js LTS
- npm
- En fysisk iOS- eller Android-telefon
- Expo Go installerat på telefonen
- Datorn och telefonen anslutna till samma Wi-Fi-nätverk

Kamerafunktioner bör testas på en fysisk telefon. En emulator har inte alltid tillgång till en riktig kamera och kan därför inte ge ett tillförlitligt test av kamerabild, kamerabyte eller fototagning.

## Installera projektet

Klona projektet och installera beroendena:

```bash
npm install
```

Starta Expo-utvecklingsservern:

```bash
npm start
```

En QR-kod visas i terminalen eller i Expo Dev Tools.

## Testa på fysisk Android-telefon

1. Installera **Expo Go** från Google Play.
2. Starta projektet med `npm start`.
3. Öppna Expo Go och välj att skanna QR-koden.
4. Godkänn kamerabehörigheten när appen frågar.
5. Testa funktionerna enligt checklistan nedan.

## Testa på fysisk iPhone

1. Installera **Expo Go** från App Store.
2. Starta projektet med `npm start`.
3. Skanna QR-koden med telefonens kamera eller från Expo Go.
4. Öppna länken i Expo Go.
5. Godkänn kamerabehörigheten när appen frågar.
6. Testa funktionerna enligt checklistan nedan.

## Testchecklista

Kontrollera att följande fungerar:

- Appen startar och visar en behörighetsfråga första gången.
- Kameran visas efter att kamerabehörighet har godkänts.
- **Vänd kamera** växlar mellan bakre och främre kamera.
- **Ta foto** tar en bild och visar den på skärmen.
- En bekräftelse visas efter att fotot har tagits.
- **Ta nytt foto** återgår till kameravyn.
- Appen visar ett rimligt resultat även när telefonen hålls både stående och liggande, om det stöds av testtelefonen.

## Om kamerabehörigheten nekas

Om du råkade neka behörigheten:

- **iPhone:** öppna `Inställningar > Integritet och säkerhet > Kamera` och aktivera Expo Go.
- **Android:** öppna `Inställningar > Appar > Expo Go > Behörigheter > Kamera` och tillåt åtkomst.

Starta sedan om appen i Expo Go.

## Om QR-koden inte fungerar

Kontrollera först att datorn och telefonen använder samma Wi-Fi. Om det fortfarande inte fungerar kan du starta Expo med tunnelanslutning:

```bash
npx expo start --tunnel
```

Tunnelanslutning kan vara långsammare än en vanlig lokal anslutning.

## Emulatorer och webbläsare

En Android Emulator eller iOS Simulator kan vara användbar för att kontrollera layout och navigation, men ska inte vara det enda testet för den här appen. Kameran kan saknas, vara avstängd eller använda en simulerad bild.

Webbläsaren kan också användas för enklare kontroll av projektets webbstöd, men den ersätter inte ett test av kameran på en fysisk telefon.

## Vanliga kommandon

```bash
npm start                 # Starta Expo
npm run android           # Starta Android-projekt lokalt
npm run ios               # Starta iOS-projekt lokalt
npm run web               # Starta webbversionen
npx expo-doctor           # Kontrollera Expo-konfigurationen
```
