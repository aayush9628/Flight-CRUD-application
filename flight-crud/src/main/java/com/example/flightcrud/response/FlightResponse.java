package com.example.flightcrud.response;

import lombok.Data;

@Data
public class FlightResponse {
	private int id;
	private String flightName;
	private String source;
	private String destination;
	private int fare;
}
