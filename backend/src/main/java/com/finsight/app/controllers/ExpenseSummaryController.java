package com.finsight.app.controllers;

import com.finsight.app.services.ExpenseSummaryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/expenses/summary")
public class ExpenseSummaryController {

    private final ExpenseSummaryService expenseSummaryService;

    public ExpenseSummaryController(ExpenseSummaryService expenseSummaryService) {
        this.expenseSummaryService = expenseSummaryService;
    }

    @GetMapping("/total")
    public Map<String, Double> getTotalExpenses() {
        return expenseSummaryService.getTotalExpenses();
    }

    @GetMapping("/by-category")
    public Map<String, Double> getExpensesByCategory() {
        return expenseSummaryService.getExpensesByCategory();
    }

    @GetMapping("/monthly")
    public Map<String, Double> getMonthlySummary() {
        return expenseSummaryService.getMonthlySummary();
    }
}
