function addProjects() {
    $('.information').html(`
        <div class="projects">
            <div id="project-1" class="project">
                <div class="img-container">
                    <a href="https://sihaocao.github.io/quiz-challenge/" target="_blank">
                        <img class="food-quiz-project" src="images/national-food-quiz.jpeg" alt="national food quiz screenshot">
                    </a>
                </div>
                <div class="project-details">
                    <h4 class="project-title">National Dish Knowledge</h4>
                    <div class="project-icons">
                        <ul class="tech-icons-list">
                            <li><i class="devicon-html5-plain colored"></i></li>
                            <li><i class="devicon-css3-plain colored"></i></li>
                            <li><i class="devicon-javascript-plain colored"></i></li>
                            <li><i class="devicon-jquery-plain colored"></i></li>
                        </ul>
                    </div>
                    <p class="project-description">National Dish Knowledge is an app that gauges your awareness for each country's national dish. You will get immediate feedback after each question with the final scores displayed at the end.</p>
                    <div class="project-links">
                        <a href="https://sihaocao.github.io/quiz-challenge/" target="_blank">
                            <button type="button" class="button-dark">View Project</button>
                        </a>
                        <a href="https://github.com/sihaocao/quiz-challenge" target="_blank">
                            <button type="button" class="button-light">View Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="project-2" class="project">
                <div class="img-container">
                    <a href="https://sihaocao.github.io/football-rules-quiz-app-with-feedback/" target="_blank">
                        <img class="football-rules-project" src="images/football-rules-quiz.jpeg" alt="football rules quiz screenshot">
                    </a>
                </div>
                <div class="project-details">
                    <h4 class="project-title">Rules of the Game</h4>
                    <div class="project-icons">
                        <ul class="tech-icons-list">
                            <li><i class="devicon-html5-plain colored"></i></li>
                            <li><i class="devicon-css3-plain colored"></i></li>
                            <li><i class="devicon-javascript-plain colored"></i></li>
                            <li><i class="devicon-jquery-plain colored"></i></li>
                        </ul>
                    </div>
                    <p class="project-description">Rules of the Game is an app designed for football officials who wants to see how well they know the NFHS rules. Being knowledgeable of the rules of the game is fundamental to being a good football official and this app is a resource they can use to fine-tune their rules knowledge.</p>
                    <div class="project-links">
                        <a href="https://sihaocao.github.io/football-rules-quiz-app-with-feedback/" target="_blank">
                            <button type="button" class="button-dark">View Project</button>
                        </a>
                        <a href="https://github.com/sihaocao/football-rules-quiz-app-with-feedback" target="_blank">
                            <button type="button" class="button-light">View Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <ul class="project-social">
                <li><a class="social-icons" href="https://github.com/sihaocao/" target="_blank"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
                <li><a class="social-icons" href="https://www.linkedin.com/in/sihao-cao-648aa93b/" target="_blank"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
                <li><a class="social-icons" href="https://twitter.com/SihaoCao" target="_blank"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a></li>
                <li><a class="social-icons" href="mailto:sihao.cao@gmail.com"><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a></li>
            </ul>
        </div>`);
}

function addBio() {
    $('#me').on('click', function(event) {
        $('#me').addClass('selected');
        $('.information').html(`
            <p class="bio-content-text">As a <span class="highlight">Web Developer</span> currently based in the <span class="highlight">Boston</span> area, I have a passion for using code to <span class="highlight">solve problems</span> and bring <span class="highlight">imaginations</span> to life. With tech scene's rapidly changing lanscape, I enjoy <span class="highlight">searching</span> for and <span class="highlight">learning</span> about various libraries and frameworks. I consider myself a <span class="highlight">dedicated</span> and <span class="highlight">diligent</span> individual who is always looking for ways to achieve greater <span class="highlight">efficiency</span>. Feel free to <span class="highlight">contact me</span> or <span class="highlight">browse</span> my projects using the links below.</p>
                <div class="button-group">
                    <a href="mailto:sihao.cao@gmail.com"><button type="button" class="button-dark">Email Me</button></a>
                    <button id="portfolio-button" type="button" class="button-light">View Portfolio</button>
                </div>`);
    });
}

function addPortfolio() {
    $('#projects').on('click', function(event) {
        $('#projects').addClass('selected');
        addProjects();
    });
}

function addAbout() {
    $('#about').on('click', function(event) {
        $('#about').addClass('selected');
        $('.information').html(`<p class="about-my-background">Hello there, my name is <span class="highlight">Sihao</span>! I'm a <span class="highlight">fullstack developer</span> currently attending Bloc's Web Developer <span class="highlight">Bootcamp</span>. In the past, I was a corporate <span class="highlight">Financial Analyst</span> and a high school <span class="highlight">Math</span> and <span class="highlight">Mandarin Teacher</span>. Besides <span class="highlight">coding</span> and <span class="highlight">problem solving</span>, I enjoy <span class="highlight">officiating</span> Football and Lacrosse, <span class="highlight">playing</span> Dodgeball and Volleyball, <span class="highlight">trying</span> to win in Monopoly and Scrabble, <span class="highlight">cooking (or experimenting)</span> a recipe I thought of last night, or <span class="highlight">reading</span> self-help or personal finance books.</p>
        <br><p class="career-objective"><span class="highlight">Currently</span>, I'm looking for exciting <span class="highlight">career</span> opportunities in <span class="highlight">tech</span> and can be <span class="highlight">reached</span> using any of the <span class="highlight">following links</span>.</p>
            <ul class="social">
                <li><a class="social-icons" href="https://github.com/sihaocao/" target="_blank"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
                <li><a class="social-icons" href="https://www.linkedin.com/in/sihao-cao-648aa93b/" target="_blank"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
                <li><a class="social-icons" href="https://twitter.com/SihaoCao" target="_blank"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a></li>
                <li><a class="social-icons" href="mailto:sihao.cao@gmail.com"><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a></li>
            </ul>`);
    });
}

function viewPortfolio() {
    $('main').on('click', '#portfolio-button', function() {
        $('#projects').addClass('selected');
        addProjects();
    });
}

function runAllFunctions() {
    addBio();
    addPortfolio();
    addAbout();
    viewPortfolio();
}

$(runAllFunctions);