# Implementar splash-screen  
Documentación: `https://capacitorjs.com/docs/apis/splash-screen`  

# Instalamos la dependencia
`npm install @capacitor/splash-screen`  
`npx cap sync`

# Copiamos esta configuracion  
```
/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    },
  },
};

export default config;
```  


# Generacion de plataformas  
En caso no tegamos las plataformas instaladas, realizar la instalacion (Tutorial para el deploy)  

# Instalamos los iconos y presentaciones  
`npm install @capacitor/assets`  

# Optenemos los iconos en base a lo que solicita  
Los iconos de 1024x1024px y los splash almenos 2732x2732px
``` 
assets/
├── icon-only.png
├── icon-foreground.png // Es el que cuenta mas creo
├── icon-background.png
├── splash.png
└── splash-dark.png  

```  
# Generamos el splash en diferentes resoluciones  
`npx capacitor-assets generate`   

# Para el caso de Android 12 funciona de otra manera  

