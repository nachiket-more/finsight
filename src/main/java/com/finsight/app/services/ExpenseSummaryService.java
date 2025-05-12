package com.finsight.app.services;

import com.finsight.app.models.Expense;
import com.finsight.app.repositories.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ExpenseSummaryService {

    private final ExpenseRepository expenseRepository;

    public ExpenseSummaryService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public Map<String, Double> getTotalExpenses() {
        double total = expenseRepository.findAll().stream()
                .mapToDouble(Expense::getAmount)
                .sum();
        return Map.of("total", total);
    }

    public Map<String, Double> getExpensesByCategory() {
        return expenseRepository.findAll().stream()
                .collect(Collectors.groupingBy(
                        Expense::getCategory,
                        Collectors.summingDouble(Expense::getAmount)
                ));
    }

    public Map<String, Double> getMonthlySummary() {
        return expenseRepository.findAll().stream()
                .collect(Collectors.groupingBy(
                        e -> e.getDate().getYear() + "-" + String.format("%02d", e.getDate().getMonthValue()),
                        Collectors.summingDouble(Expense::getAmount)
                ));
    }
}
