package com.finsight.app.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.finsight.app.models.Expense;
import com.finsight.app.repositories.ExpenseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ExpenseRepository expenseRepository;
    private final ObjectMapper objectMapper;

    public DataInitializer(ExpenseRepository expenseRepository, ObjectMapper objectMapper) {
        this.expenseRepository = expenseRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) {
        try {
            System.out.println("Seeding data from JSON...");

            InputStream inputStream = new ClassPathResource("data/expenses.json").getInputStream();
            List<Expense> expenses = objectMapper.readValue(inputStream, new TypeReference<>() {});

            expenseRepository.saveAll(expenses);

            System.out.println("Done seeding.");
        } catch (Exception e) {
            System.err.println("Failed to seed data: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

