# Finsight Backend


A Spring Boot backend API for managing and summarizing personal expenses.


---


## Features


- CRUD operations for expenses
- Expense summary endpoints (total, by category, monthly)
- Simple data model with title, amount, category, and date
- Uses Spring Data JPA with a relational database


---


## Technologies Used


- Java 17+
- Spring Boot
- Spring Data JPA
- Lombok
- H2
- Maven


---


## Getting Started


### Prerequisites


- Java 17 or higher installed
- Maven installed


### Running the Application


```bash
mvn clean spring-boot:run
```

The backend will start on http://localhost:8080

API Endpoints
-------------

*   POST /api/expenses — Create a new expense
    
*   GET /api/expenses — Retrieve all expenses
    
*   PUT /api/expenses/{id} — Update an expense by ID
    
*   DELETE /api/expenses/{id} — Delete an expense by ID
    
*   GET /api/expenses/summary/total — Get total expenses
    
*   GET /api/expenses/summary/by-category — Get expenses grouped by category
    
*   GET /api/expenses/summary/monthly — Get monthly expense summary
    

Data Model
----------

```
@Entity
public class Expense {
  private Long id;
  private String title;
  private Double amount;
  private String category;
  private LocalDate date;
}
```