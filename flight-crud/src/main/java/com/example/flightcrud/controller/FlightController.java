package com.example.flightcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.flightcrud.entity.Flight;
import com.example.flightcrud.response.FlightResponse;
import com.example.flightcrud.service.FlightService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/flight")
public class FlightController {
	@Autowired
	FlightService service;
	
	@GetMapping("/display")
	public List<FlightResponse> allFlights(){
		return service.allFlights();
	}
	@PostMapping("/addFlight")
	public FlightResponse addFlight(@RequestBody Flight flight) {
		return service.addFlight(flight);
	}
	@PutMapping("/updateFlight")
	public FlightResponse updateFlight(@RequestBody Flight flight) {
		return service.updateFlight(flight);
	}
	@DeleteMapping("/deleteFlight/{id}")
	public void deleteFlight(@PathVariable int id) {
		service.deleteFlight(id);
	}
}
