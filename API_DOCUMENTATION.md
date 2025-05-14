# Finsight API Documentation

## Expense API

### Get All Expenses
**GET** `/expenses`  
Retrieve a list of all expenses.
Response:
Returns an array of Expense objects.

### Create Expense  
**POST** `/expenses`  
Create a new expense entry.  

**Request Body:**  
```json
{
  "title": "string",
  "amount": number,
  "category": "string",
  "date": "YYYY-MM-DD"
}
```
Response:
Returns the created Expense object with assigned id.

### Update Expense
**PUT** `/expenses/{id}`  
Update an existing expense by its id. 

**Path Parameter:**  
id - Long (ID of the expense to update) 

**Request Body:**  
```json
{
  "title": "string",
  "amount": number,
  "category": "string",
  "date": "YYYY-MM-DD"
}
```
Response:
Returns the updated Expense object.

### Delete Expense
**DELETE** `/expenses/{id}`
Delete an expense by its id.

**Path Parameter:**  
id - Long (ID of the expense to delete) 

Response:
Returns no content (void).