# **🚀 Iron Dome Ops - Backend API**

מערכת Backend לניהול אירועים והגנה אווירית בזמן אמת.

הפרויקט בנוי בארכיטקטורת שכבות: Routes ➡️ Controllers ➡️ Services ➡️ Repositories, עם מסד נתונים MySQL.

## **📂 מבנה הפרויקט**

```text
iron-dome-ops/
├── controllers/
│   ├── incidentsController.js
│   ├── logsController.js
│   └── operatorsController.js
├── services/
│   └── ironServices.js
├── repositories/
│   └── baseRepository.js
├── routes/
│   ├── incidentsRoute.js
│   └── operatorsRoute.js
├── middleware/
│   ├── middlewares.js
│   └── middleErrors.js
├── db/
│   └── database.js
├── app.js
├── database.sql
├── docker-compose.yml
├── Dockerfile
├── env.example
└── README.md
```

## **✨ יכולות עיקריות**

* ניהול מפעילים (Operators) במערכת.
* פתיחה, מעקב ועדכון סטטוס של אירועים מבצעיים (Incidents).
* תיעוד אוטומטי בטבלת Logs בכל פעולה על אירוע - יצירה ועדכון סטטוס.
* ולידציית קלט מלאה באמצעות Zod, כולל הודעות שגיאה מותאמות אישית.
* מידלוור מרכזי לטיפול בשגיאות - כולל שגיאות ולידציה (Zod) ושגיאות מסד נתונים נפוצות (מפתח כפול, מפתח זר לא קיים וכו').

## **🔌 נתיבי השרת (Endpoints)**

|      מתודה |              נתיב |                                                                       תיאור |
| --------------: | --------------------: | -------------------------------------------------------------------------------: |
|  **POST** |            /operators |                       יצירת מפעיל חדש במערכת (שם, דרגה) |
|  **POST** |            /incidents | פתיחת אירוע מבצעי חדש (שם קוד, רמת איום, מפעיל משויך) - נכתב אוטומטית ל-Logs |
| **PATCH** | /incidents/:id/status |           עדכון סטטוס אירוע (OPEN, TRACKING, INTERCEPTED, CLOSED) - נכתב אוטומטית ל-Logs |
|   **GET** |       /incidents/open |                 שליפת כל האירועים המבצעיים הפתוחים |

## **🛠️ הוראות הרצה מהירות**

### **1\. הגדרת משתני סביבה**

יש ליצור קובץ `.env` על בסיס `env.example`:

```text
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### **2\. הפעלת מסד הנתונים (Docker)**

בהרצה הראשונה, הטבלאות מתוך database.sql (operators, incidents, logs) ייווצרו אוטומטית:

```bash
docker compose up -d
```

### **3\. הרצת שרת ה-Backend**

התקנת החבילות והפעלת השרת:

```bash
npm install
node app.js
```
