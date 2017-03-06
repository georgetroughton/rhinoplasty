package net.ultimatebigfish.rhinoplasty;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.github.yamill.orientation.OrientationPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.oblador.vectoricons.VectorIconsPackage;
import net.ultimatebigfish.rhinoplasty.BuildConfig;

import java.util.Arrays;
import java.util.List;

import io.fullstack.firestack.FirestackPackage;

public class MainActivity extends ReactActivity {

      @Override
     protected void onCreate(Bundle savedInstanceState) {
         MainApplication app = (MainApplication) getApplication();
         app.setReactActivity(this);
         super.onCreate(savedInstanceState);
     }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rhinoplasty";
    }


}
