package com.example.flightcrud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.flightcrud.repository.UserRepository;
import com.example.flightcrud.request.UserRequest;
import com.example.flightcrud.response.UserResponse;
import com.example.flightcrud.entity.User;

@Service
public class UserService {
	@Autowired
	UserRepository userRepo;
	
	public UserResponse login(UserRequest request) {
		User user = userRepo.findByUserName(request.getUserName());
		UserResponse response = new UserResponse();
		if(user == null || !request.getPassword().equals(user.getPassword())) {
			response.setAllow(0);
			return response;
		}
		response.setAllow(1);
		return response;
	}
	
	public void signup(UserRequest request) {
		User user = new User();
		user.setUserName(request.getUserName());
		user.setPassword(request.getPassword());
		userRepo.save(user);
	}
}
