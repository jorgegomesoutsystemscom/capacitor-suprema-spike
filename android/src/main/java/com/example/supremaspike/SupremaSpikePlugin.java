package com.example.supremaspike;

import com.getcapacitor.Logger;

public class SupremaSpikePlugin {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
