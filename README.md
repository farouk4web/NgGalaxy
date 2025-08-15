# 🌐 Angular NgGalaxy

A **multi-tool Angular project** containing several standalone mini-apps:
- ✅ **To-Do App** — Manage tasks easily
- 🎯 **Quiz Game** — Test your knowledge
- 💱 **Currency Converter** — Convert between currencies in real-time
- 🌦 **Weather App** — Get current weather by city

All apps are built with **Angular’s standalone components**, `provideHttpClient` API, and feature **separate HTML, CSS, and TypeScript files** for maintainability.

---

## 🚀 Features
- **Modular Design**: Each mini-app is a standalone Angular component
- **Routing**: Navigate between apps via Angular Router
- **Responsive UI**: Clean CSS for all components
- **API Integration**:
  - Weather data via [Open-Meteo](https://open-meteo.com/) (no API key)
  - Currency data via free exchange rate API
- **Angular 18+**: Uses the latest `provideHttpClient` instead of deprecated `HttpClientModule`

---

## 📂 Project Structure
```
src/
├── app/
│ ├── todo/
│ ├── quiz/
│ │ ├── result/
│ ├── currency-converter/
│ ├── weather/
│ ├── app.routes.ts
│ ├── app.config.ts
```


---

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/farouk4web/NgGalaxy.git

# Navigate into the project
cd NgGalaxy

# Install dependencies
npm install

# Run the development server
ng serve


🗺 Routes
/todo → To-Do App
/quiz → Quiz Game
/quiz/result → Quiz Results
/CurrencyConverter → Currency Converter
/Weather → Weather App


📌 Technologies Used
Angular 18+
TypeScript
RxJS
Open-Meteo API
OpenStreetMap Nominatim API


Scerrnshots
<img width="1497" height="451" alt="image" src="https://github.com/user-attachments/assets/3d6a6f36-439e-42eb-a9c7-299e847092b1" />
<img width="1475" height="727" alt="image" src="https://github.com/user-attachments/assets/408e8919-9e7b-47f2-a25a-ae23b862febb" />
<img width="1476" height="732" alt="image" src="https://github.com/user-attachments/assets/fff7918e-7cd8-4efa-915e-a6cca85983be" />
<img width="1454" height="539" alt="image" src="https://github.com/user-attachments/assets/974b6eb4-1e4f-4a0c-b7b1-ded5ce095a00" />
