package com.example.flightcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.flightcrud.entity.Booking;
import com.example.flightcrud.service.BookingService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	BookingService service;
	
	@GetMapping("/all")
	public List<Booking> getBookings(){
		return service.getBookings();
	}
	
	@PostMapping("/create")
	public Booking createBooking(@RequestBody Booking booking) {
		return service.createBooking(booking);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteBooking(@PathVariable int id) {
		service.deleteBooking(id);
	}
}
