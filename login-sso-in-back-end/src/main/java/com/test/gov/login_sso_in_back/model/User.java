package com.test.gov.login_sso_in_back.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    @Column
    private String username;
    @Column
    private String cpf;
    @Column
    private String password;
    @Column
    private String roles;

}
