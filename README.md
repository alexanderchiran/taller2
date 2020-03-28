# angular9

Comandos varios

npm install -g @angular/cli

ng new my-dream-app

cd my-dream-app

npm install --save bootstrap

ng serve

ng g c nombrecomponente

poner en el angular.json
 "styles": [
              
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],

Important: FormsModule is Required for Two-Way-Binding!
Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 

------------------------------------------------------------------------------------------------------------------------------

echo "# taller2" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/alexanderchiran/taller2.git
git push -u origin master

git remote add origin https://github.com/alexanderchiran/taller2.git
git push -u origin master
                
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

