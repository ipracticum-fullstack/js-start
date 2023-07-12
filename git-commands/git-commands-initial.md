cd /d
cd JS_Practice/JSFirst/

git config --global user.email "vineetk2040@gmail.com"
git config --global user.name "Vineet"

echo "# js-start" >> README.md
  
git init
git add README.md
ls -ltr
git status
git commit -m "first commit"

git branch -M main
 
git remote add origin https://github.com/ipracticum-fullstack/js-start.git

git push -u origin main

