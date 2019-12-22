import $ from 'jquery';

const generateHome = function () {
  return `
    <header role="banner">
      <h1>Hi! My name is <span class='name'> Jaye Anne Laguardia </span></h1>
    </header>
    <section>
      <h2>I am an aspiring Full Stack Developer with a passion for video games, music, and yarn.</h2>
    </section>
    <section class = "buttons">
      <button type="button" class="learnMore">Learn More</button>
    </section>
  `;
};

const generateLearnMore = function () {
  return `
    <header role="banner">
      <h1>Hi! My name is <span class='name'> Jaye Anne Laguardia </span></h1>
    </header>
    <section>
      <h2>I am an aspiring Full Stack Developer with a passion for video games, music, and yarn.</h2>
    </section>
    <section>
      <p> I am a student at Thinkful's Full Engineering Immersion Program and I would love a career as a full stack developer working with video games or music. I love the mental stimulation and learning that comes with coding, especially the feeling of joy each time I overcome an obstacle. I also really enjoy being a part of the creation process of a project from start to finish. It's like, "I made that! With my own hands!" and I fill up with pride and confidence in my work. </p>
      
     <p> When I'm not coding, I like to relax with yarn or video games. The repetitive motions of crocheting is very soothing and like earlier, creating stuff is my jam. It is similar to the same joy I have when I finish a coding project. Monster Hunter is the current game I've been addicted to and what I like most about it is I get to jam with my friends and bond with them. 2 years later and we're still going strong with this game. That's the kind of games I'd like to help create in the future; games to create fun memories to treasure with your friends. </p>
    </section>
    <section class = "buttons">
      <button type="button" class="resume">Resume</button>
      <button type="button" class="seeMyWork">See my Work</button>
      <button type="button" class="contactMe">Contact Me</button>
    </section>
  `;
};

const generateResume = function () {
  return `
    <section>
      <p>Resume</p>
    </section>
    <section class = "buttons">
      <button type="button" class="seeMyWork">See My Work</button>
      <button type="button" class="home">Home</button>
      <button type="button" class="contactMe">Contact Me</button>
    </section>
  `;
};

const generateContactMe = function () {
  return `
    <header role="banner">
      <h1>Contact Me</h1>
    </header>

    <section>
      <a href="https://github.com/jayelaguardia" class = "contact">My GitHub</a>
      <p class = "contact"> jayelaguardia@gmail.com </p>
    </section>

    <section class = "buttons">
      <button type="button" class="resume">Resume</button>
      <button type="button" class="home">Home</button>
      <button type="button" class="seeMyWork">See My work</button>
    </section>
  `;
};

const generateSeeMyWork = function () {
  return `
    <section>
      <a href='https://github.com/jayelaguardia'>GitHub</a>
    </section>

    <section class = 'scrollmenu'>
      <div class = 'project'> 
        <h1 class = "title"> Quiz App Project </h1>
        <img src="src/QuizAppScreen.png" alt="Screenshot of the quiz app project">
        <div class = "text">
          <p class="text-item para"> <span class ="bold">Description: </span>A user is able to take a short quiz about the Kardashian celebrities and receive feedback.  </p>
          <p class="text-item para"> <span class ="bold">Technology:</span> HTML, CSS, Javascript</p>
          <a href='https://thinkful-ei-jaguar.github.io/quizAppJayeBrittany/' class="text-item">Quiz App Live</a>
          <a href='https://github.com/thinkful-ei-jaguar/quizAppJayeBrittany' class="text-item">Quiz App Repository</a>
        </div>
      </div>
    </section>

    <section class = "buttons">
      <button type="button" class="resume">Resume</button>
      <button type="button" class="home">Home</button>
      <button type="button" class="contactMe">Contact Me</button>
    </section>
  `;
};

const render = function (html = generateHome) {
  $('#main').html(html);
};

const handleLearnMore = function () {
  $('#main').on('click', '.learnMore', event => {
    render(generateLearnMore);
  });
};

const handleResume = function() {
  $('#main').on('click', '.resume', event => {
    alert('Hello! That area is still under construction! Please come back later.');
    //render(generateResume);
  });
};

const handleContactMe = function() {
  $('#main').on('click', '.contactMe', event => {
    render(generateContactMe);
  });
};

const handleSeeMyWork = function() {
  $('#main').on('click', '.seeMyWork', event => {
    render(generateSeeMyWork);
  });
};

const handleHome = function() {
  $('#main').on('click', '.home', event => {
    render(generateHome);
  });
};

const bindEventListeners = function () {
  handleLearnMore();
  handleResume();
  handleContactMe();
  handleSeeMyWork();
  handleHome();
};

export default {
  render,
  bindEventListeners
};