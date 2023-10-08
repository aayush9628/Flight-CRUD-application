package com.example.flightcrud.request;

import lombok.Data;

@Data
public class FlightRequest {
	private String flightName;
	private String source;
	private String destination;
	private int fare;
}
