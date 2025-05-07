package com.finsight.app.controllers;

import com.finsight.app.models.Expense;
import com.finsight.app.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    // Create expense
    @PostMapping("/expenses")
    public Expense createExpense(@RequestBody Expense expense) {
        return expenseRepository.save(expense);
    }

    // List all expenses
    @GetMapping("/expenses")
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
}
