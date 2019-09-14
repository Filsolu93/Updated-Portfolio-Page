$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Filmon M Habtu</span>. <br>I'm a <span class='red-text'>full stack web developer in ucdavis</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'> I am a Full Stack Web Developer with a background in database management. I have an undergraduate degree in Microbiology and a Master's degree from the University of DeVry, Keller in Information Systems Management with a specialization in Database Administration. After graduating, I taught myself how to program in HTML , JavaScript, and CSS, but it wasn't enough, After a few months I decided to join the UC Davis Full Stack Web Development Bootcamp where I have developed a full understanding of front end and back end web developmentI am a Full Stack Web Developer with a background in database management. I have an undergraduate degree in Microbiology and a Master's degree from the University of DeVry, Keller in Information Systems Management with a specialization in Database Administration. After graduating, I taught myself how to program in HTML , JavaScript, and CSS, but it wasn't enough, After a few months I decided to join the UC Davis Full Stack Web Development Bootcamp where I have developed a full understanding of front end and back end web development. </p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='Filmon:filsolu93@gmail.com'>filsolu93@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/Filsolu93' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/filmon-m-habtu-90a59a110/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/proj peerspic.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>psychic-game</span></div><div class='card-content'><p class='card-textcontent'>using the Google Maps API and yelp.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://https://filsolu93.github.io/Prohect-1/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://filsolu93.github.io/Prohect-1/' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/crystal collector.JPG'><span style='font-size:1.40em;' class='card-title white-text red'></span></div><div class='card-content'><p class='card-textcontent'> samthing to put. </p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/rock-paper-scissors.jpg'><span style='font-size:1.40em;' class='card-title white-text red'></span></div><div class='card-content'><p class='card-textcontent'>some thing</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href=''>View Project</a></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/rondomefeelingmagic.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Giftastic</span></div><div class='card-content'><p class='card-textcontent'>the GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://nfilsolu93.github.io/Giftastic-webpage/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/traintime.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Trian Time  </span></div><div class='card-content'><p class='card-textcontent'> samthingadvencar</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})
