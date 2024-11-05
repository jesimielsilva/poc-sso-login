package com.test.gov.login_sso_in_back.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Setter
@Getter
@Entity
public class System {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private long id;
  private String name;
  private String number;
  private String emailUser;
  private String emailToAlert;
  private Timestamp validToken;
  private Boolean tokenShared;

}
