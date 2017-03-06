package net.ultimatebigfish.rhinoplasty;

import android.app.Activity;
import android.app.Application;

import com.brentvatne.react.ReactVideoPackage;
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

/**
 * Created by george on 03/03/2017.
 */

public class MainApplication extends Application implements ReactApplication {
    private Activity reactActivity;
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReactVideoPackage(),
                    new OrientationPackage(reactActivity),
                    new ReactNativeYouTube(),
                    new VectorIconsPackage(),
                    new FirestackPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }

    public void setReactActivity(Activity activity){
        reactActivity = activity;
    }
}
