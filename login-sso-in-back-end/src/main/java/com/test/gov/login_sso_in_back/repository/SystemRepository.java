package com.test.gov.login_sso_in_back.repository;

import com.test.gov.login_sso_in_back.model.System;
import com.test.gov.login_sso_in_back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SystemRepository extends JpaRepository<System, Long> {
}
