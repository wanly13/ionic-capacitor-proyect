# CREACION PROYECTO CON CAPACITOR  

En este caso creamos el proyecto con capacitor instalado  
`ionic start dev-capacitor --capacitor`  

Generar el proyecto en versión web, me devuelve por defecto el archivo www.  
`ionic build `  

Instalamos Capacitor  
`npm install @capacitor/android @capacitor/ios `

Convertir el codigo a un proyecto de android, convierte todo el proyecto www a un proyecto de android.  
`npx cap add android`   
`npx cap add ios`  

El proyecto ya esta creado asi que nos centramos en buildearlo  
`npx cap open android`

Cuando el andorid ya esta creado solo usar este comando  
`ionic capacitor build android --prod --release`  
