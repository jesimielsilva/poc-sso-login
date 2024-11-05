package com.test.gov.login_sso_in_back.controller;

import com.test.gov.login_sso_in_back.model.System;
import com.test.gov.login_sso_in_back.model.User;
import com.test.gov.login_sso_in_back.repository.SystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system")
@CrossOrigin("http://localhost:4200")
public class SystemController {

  @Autowired
  private SystemRepository systemRepository;

  @PostMapping()
  public ResponseEntity<System> create(@RequestBody System sys) {
    System newSys = systemRepository.save(sys);
    return new ResponseEntity<>(newSys, HttpStatus.CREATED);
  }

  @GetMapping()
  public ResponseEntity<List<System>> getAll() {
    List<System> sys = systemRepository.findAll();
    return new ResponseEntity<>(sys, HttpStatus.CREATED);
  }

  @PutMapping()
  public ResponseEntity<Integer> update(@RequestBody System sys) {
    systemRepository.findById(sys.getId()).orElseThrow();
    systemRepository.save(sys);
    return new ResponseEntity<>(1, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Integer> delete(@PathVariable("id") long id) {
    systemRepository.deleteById(id);
    return new ResponseEntity<>(1, HttpStatus.CREATED);
  }
}
