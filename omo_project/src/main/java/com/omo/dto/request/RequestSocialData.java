package com.omo.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestSocialData {

    private String id;
    private String name;
    private String email;
    private String type;

}
