package com.example.flightcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.flightcrud.entity.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer>{

}
