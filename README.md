# **🚀 Iron Dome Ops \- Backend API**

מערכת Backend לניהול אירועים והגנה אווירית בזמן אמת.

הפרויקט בנוי בארכיטקטורת שכבות: Routes ➡️ Controllers ➡️ Services ➡️ Repositories.

## **📂 מבנה הפרויקט**

```text
iron-dome-ops/  
├── controllers/  
├── services/  
├── repositories/  
├── routes/  
├── db/  
│   └── database.js  
├── middleware/  
├── utils/  
├── app.js  
├── database.sql  
├── docker-compose.yml  
├── Dockerfile  
├── .env.example  
└── readme.md
```

## **🔌 נתיבי השרת (Endpoints)**

|      מתודה |              נתיב |                                                                       תיאור |
| --------------: | --------------------: | -------------------------------------------------------------------------------: |
|  **POST** |            /operators |                       יצירת מפעיל חדש במערכת (שם, דרגה) |
|  **POST** |            /incidents | פתיחת אירוע מבצעי חדש (רמת איום, מפעיל משויך) |
| **PATCH** | /incidents/:id/status |           עדכון סטטוס אירוע (OPEN, TRACKING, INTERCEPTED, CLOSED) |
|   **GET** |       /incidents/open |                 שליפת כל האירועים המבצעיים הפתוחים |

## **🛠️ הוראות הרצה מהירות**

### **1\. הגדרת משתני סביבה**

קןבץ .example.env

```text
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### **2\. הפעלת מסד הנתונים (Docker)**

בהרצה הראשונה, הטבלאות מתוך database.sql ייווצרו אוטומטית:

```bash
docker compose up -d
```

### **3\. הרצת שרת ה-Backend**

התקנת החבילות והפעלת השרת במצב פיתוח:

```bash
npm install  
npm run dev
```
