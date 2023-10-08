package com.example.flightcrud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.flightcrud.request.UserRequest;
import com.example.flightcrud.response.UserResponse;
import com.example.flightcrud.service.UserService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService service;
	
	@GetMapping("/login/{userName}/{password}")
	public UserResponse login(@PathVariable String userName, @PathVariable String password) {
		UserRequest request = new UserRequest();
		request.setUserName(userName);
		request.setPassword(password);
		return service.login(request);
	}
	
	@PostMapping("/signup")
	public void signup(@RequestBody UserRequest request) {
		service.signup(request);
	}
}
