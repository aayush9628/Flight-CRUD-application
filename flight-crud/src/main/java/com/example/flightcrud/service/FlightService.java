package com.example.flightcrud.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flightcrud.entity.Booking;
import com.example.flightcrud.entity.Flight;
import com.example.flightcrud.repository.BookingRepository;
import com.example.flightcrud.repository.FlightRepository;
import com.example.flightcrud.response.FlightResponse;

@Service
public class FlightService {
	
	@Autowired
	FlightRepository flightRepo;
	
	@Autowired
	BookingRepository bookingRepo;
	
	public List<FlightResponse> allFlights(){
		List<Flight> flights = flightRepo.findAll();
		List<FlightResponse> flightsResponse = new ArrayList<>();
		for(Flight flight: flights) {
			FlightResponse flightResponse = new FlightResponse();
			flightResponse.setId(flight.getId());
			flightResponse.setFlightName(flight.getFlightName());
			flightResponse.setSource(flight.getSource());
			flightResponse.setDestination(flight.getDestination());
			flightResponse.setFare(flight.getFare());
			flightsResponse.add(flightResponse);
		}
		return flightsResponse;
	}
	
	public FlightResponse addFlight(Flight flight) {
		Flight fli = flightRepo.save(flight);
		FlightResponse flightResponse = new FlightResponse();
		flightResponse.setId(fli.getId());
		flightResponse.setFlightName(fli.getFlightName());
		flightResponse.setSource(fli.getSource());
		flightResponse.setDestination(fli.getDestination());
		flightResponse.setFare(fli.getFare());
		return flightResponse;
	}
	
	public FlightResponse updateFlight(Flight flight) {
		Flight fli = flightRepo.save(flight);
		Booking booking = bookingRepo.findById(flight.getId()).orElse(null);
		if(booking != null) {
			Booking book = new Booking(flight.getId(), flight.getFlightName(), flight.getSource(), flight.getDestination(), flight.getFare());
			bookingRepo.save(book);
		}
		FlightResponse flightResponse = new FlightResponse();
		flightResponse.setId(fli.getId());
		flightResponse.setFlightName(fli.getFlightName());
		flightResponse.setSource(fli.getSource());
		flightResponse.setDestination(fli.getDestination());
		flightResponse.setFare(fli.getFare());
		return flightResponse;
	}
	
	public void deleteFlight(int id) {
		flightRepo.deleteById(id);
		Booking booking = bookingRepo.findById(id).orElse(null);
		if(booking != null) {
			bookingRepo.deleteById(id);
		}
	}
}
