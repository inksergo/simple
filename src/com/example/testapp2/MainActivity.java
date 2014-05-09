package com.example.testapp2;
import android.os.Bundle;
import org.apache.cordova.*;
public class MainActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl(Config.getStartUrl());
    } 
}