DOM, Virtual DOM, Function and class component

mkdir React-Learning
cd React-Learning
sudo apt install npm
npm i fs
create app.js
then to run app.js run:
node app.js
fs is now not using. but to understand the functioning we just use it for testing purpose
App
npx create-react-app my-app // without installation create. instead of 2 steps using npm like npm install and then create, we use npx.
node_modules - all modules installed
public - logo, images, public files, static files, index.html
src

index.html
we inject into the div with id root from src files
start with index.js, then App.js
project starts in chrome when:
npm start
if any error like 'ENOSPC: System limit for number of file watchers reached' occurs, run th below as a temporary fix 
echo 524288 | sudo tee /proc/sys/fs/inotify/max_user_watches
and run npm start
this will change after reboot. It is a temporary fix.

Babel is a JavaScript compiler that converts modern JavaScript (ES6/ES7/ES8, etc.) into older JavaScript versions (ES5) so that older browsers can understand it.

Webpack is a module bundler that takes JavaScript files and dependencies (CSS, images, fonts, etc.), bundles them together, and optimizes them for production.

Search for alternatives for create-react-app and build using terminal.

In App.js,
jsx - javascript+xml
we can use loops or conditions in html in jsx
All tags should have closing tags, <br></br>
Everything in CamelCase

After running press Ctrl+C, otherwise the port will not be killed

