package com.example.flightcrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flightcrud.entity.Booking;
import com.example.flightcrud.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository bookingRepo;
	
	public List<Booking> getBookings(){
		return bookingRepo.findAll();
	}
	
	public Booking createBooking(Booking booking) {
		return bookingRepo.save(booking);
	}
	
	public void deleteBooking(int id) {
		bookingRepo.deleteById(id);
	}
}
