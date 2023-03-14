package com.omo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.AbstractEntityManagerFactoryBean;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

@Configuration
@EnableJpaRepositories(basePackages = "com.omo.controller" )
public class SecurityConfig {
	@Bean
    public AbstractEntityManagerFactoryBean nguideEntityManager() {
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean(); 
        
        // 패키지 경로 변경
        factory.setPackagesToScan("com.omo.controller");		

        return factory;
}
}
