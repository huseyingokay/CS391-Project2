<h2>CS391 Project2</h2>

<h3>Project Members</h3>
<ul>
  <li>Ege Öztaş</li>
  <li>Arda Sümbül</li>
  <li>Ayberk Akbalık</li>
  <li>Hüseyin Gökay</li>
<ul>

<br />
  
<h3>Project Description</h3>
<p>This Project's main purpose is to provide and direct to a selection of memes and other digital "joke" entertainment.</p>

<p>This project will also have the capability to make someone log-in and sing-up and access to entertainment. Webstorage is used to keep users' data</p>

<br />

<h3>Possible scenarios</h3>
<p>First time user scenario: User must first Sign-up, after that they will be redirected to the login page as a signed user.</p>

<p>To sign up they must fill out the signup form with their information. These information have to be in the constraints given below:</p>
  <ul>
  <li>Password must be at least 8 figures and max 15 figures, at least one of each must be in the password: one uppercase and one lowercase char, one number and one special character.</li>
  <li>Mail and mail control must be the same.</li>
  <li>Password and password control must be the same.</li>
  <li>Mail and username should be unique. </li>
  </ul>
  <br />
<p><strong>Signed user scenario:</strong> If User has an account they will fill out their account information (E-mail & password). If these are correct and valid then the page will direct to memes page. Once there you can log back out from headers button.</p>
<p><strong>New user scenario:</strong> If User does not have an account they must go to sign in to the website. They must fill out the given form. If these are correct and valid then the page will direct back to log in page. Then Signed user scenario will start.</p>

The main page. If they can't pass throught validation then an error will pop up.
Once on the main page the user can view the digital entertainment (as also known as memes.)

<br />

<h3>Mission Contribution</h3>
<ul>
  <li>Mehmet Arda Sümbül: Created responsive Navbar with react-bootstrap and Footer for pages.</li>
  <li>Ege Öztaş: Created the signup page using react-bootstrap. Created the validation and user storage systems.</li>
  <li>Hamza Ayberk Akbalık: Created memes page, responsive cards of meme images by using react-bootstrap.</li> 
  <li>Hüseyin Gökay: Created login page with its method isUserExists by using react-bootstrap, created app.js by using react-router and created folder structure. </li>
</ul>

<br />

<h3>Instructions for running the application<h3>
<ul>
  <li> Install Node.js https://nodejs.org/en/ </li>
  <li> Clone the repo by using the link provided by github. Run "git clone https://github.com/huseyingokay/cs391-project2" command in on cmd to clone the repo </li>
  <li> Run "npm install" command on cmd for the first setup </li>
  <li> Run "npm install react-router-dom" on cmd for react-router library installation </li>
  <li> Run "npm install react-bootstrap bootstrap" on cmd for react-bootstrap library installation </li>
  <li> Run "npm start" command on cmd to run the application </li>
</ul> 
