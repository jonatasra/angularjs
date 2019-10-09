package com.angular.angular.controller;

import java.io.File;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	public static void main(String[] args) {
		File file = new File("", "relatorios");
		System.out.println(file.getAbsolutePath());
		System.out.println(file.mkdir());
	}
}
