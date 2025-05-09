package com.finsight.app.config;

import com.finsight.app.models.Expense;
import com.finsight.app.repositories.ExpenseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ExpenseRepository expenseRepository;

    public DataInitializer(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }


    @Override
    public void run(String... args) {
        System.out.println("Seeding data...");

        expenseRepository.save(new Expense(null, "Lunch", 15.0, "Food", LocalDate.now().minusDays(2)));
        expenseRepository.save(new Expense(null, "Bus Ticket", 2.5, "Transport", LocalDate.now().minusDays(1)));

        System.out.println("Done seeding");
    }
}
