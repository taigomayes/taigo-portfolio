const cursor = document.getElementById("cursor");
const project = document.querySelector(".project");
const details = document.querySelector(".details");
const box = document.querySelector(".box-1");
const circle = document.getElementById("circle");
const darkmodeswitch = document.querySelector('.darkmodeswitch')
/* on load */

const x = window.matchMedia("(max-width: 1040px)");

if (!x.matches) {
  // If media query matches
  

  anime({
    targets: "path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1000,
    delay: 500,
    direction: "alternate",
  });

  setTimeout(function () {
    anime({
      targets: " .box-container .box-1, .darkmodeswitch ",
      translateY: "-100vh",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });
  }, 3000);

  var roundLogEl = document.querySelector(".loader");

  anime({
    translateY: 450,

    targets: roundLogEl,
    innerHTML: ["0", "100%"],
    duration: 2500,
    easing: "linear",
    round: 1, // Will round the animated value to 1 decimal
  });
} else {

  
  anime({
    targets: "path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1000,
    delay: 500,
    direction: "alternate",
  });

  setTimeout(function () {
    anime({
      targets: ".intro",
      translateX: "-100vw",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });
  }, 3000);

  setTimeout(function () {
    anime({
      targets: ".nav .nav-link, .nav, .about-div, .darkmodeswitch ",
      translateY: "-100vh",
      delay: anime.stagger(100), // increase delay by 100ms for each elements.
    });
  }, 3000);

  /*       document.querySelector('.nav').style.right = '0'
        document.querySelector('.nav').style.height = '200px'
        document.querySelector('.nav').style.width = '100vw'
        document.querySelector('.nav').style.display = 'block'
      
        document.querySelector('.nav').style.top = '216vw' */

  document.getElementById("home").style.display = "none";

  const state = { active: "about", project: "lela" };
}

box.addEventListener("mouseover", () => {
  /* cursor.circle.fill = 'white' */
  circle.style.fill = "white";
});

box.addEventListener("mouseover", () => {
  /* cursor.circle.fill = 'white' */
  circle.style.fill = "white";
});

box.addEventListener("mouseleave", () => {
  /* cursor.circle.fill = 'white' */
  circle.style.fill = "transparent";
});

document.addEventListener("mousemove", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 0 + "px";
  cursor.style.top = y + 0 + "px";
});

var dark = true;

const darkmode = () => {
if (dark === true){
  document.documentElement.style.setProperty('--main-color', '#081621');
  document.documentElement.style.setProperty('--dark-color', '#E63946');
  document.querySelector('.darkmode').style.bottom = '25px'
  dark = false
} else {
  document.documentElement.style.setProperty('--main-color', '#E63946');
  document.documentElement.style.setProperty('--dark-color', '#081621');
  document.querySelector('.darkmode').style.bottom = '-25px'
  dark = true
}
}

document.querySelector('.darkmodeswitch').addEventListener('mouseenter', () => {

  cursor.style.display = "none";
})
document.querySelector('.darkmodeswitch').addEventListener('mouseleave', () => {

  cursor.style.display = "block";
})


/* circle.addEventListener('mouseenter', () => {

  cursor.style.display = "none";
})
circle.addEventListener('mouseleave', () => {
  circle.style.strokeDasharray = '0';
  cursor.style.display = "block";
}) */

const state = { active: "about", project: "" };

const hide = (stuff) => {
  if (stuff.id === "work") {
    setTimeout(function () {
      anime({
        targets: ".project-switch",
        translateY: "-100vh",

        delay: anime.stagger(300), // increase delay by 100ms for each elements.
      });
    }, 500);
  }

  /* if (state.project === 'none'){

  setTimeout(function () {
    anime({
      targets: `.work-div`,
      translateY: '-100vh',
  
      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });
    }, 400);

  setTimeout(function () {
    anime({
      targets: `#lela`,
      translateX: '120vw',
    
      delay: anime.stagger(00), // increase delay by 100ms for each elements.
    });
    }, 00);

 

}  */

  cursor.style.display = "none";

  anime({
    targets: ".home, .home-div .box-1",
    translateY: "100vh",

    delay: anime.stagger(200), // increase delay by 100ms for each elements.
  });

  const show = `.${stuff.id}`;
  state.active = stuff.id;
  console.log(state.active);
  
  console.log(state);


  if (state.active !== 'work' && state.project == ''){
    state.project = 'lela';
  } 
  
  else {
    state.project = stuff.className;
  }

  setTimeout(function () {
    anime({
      targets: `${show}-div`,
      translateY: "-100vh",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });
  }, 400);

  setTimeout(function () {
    anime({
      targets: ".nav, .nav .nav-link",
      translateY: "-100vh",

      delay: anime.stagger(100), // increase delay by 100ms for each elements.
    });
  }, 400);

  setTimeout(function () {
    anime({
      targets: `#${state.project}`,
      translateX: "120vw",

      delay: anime.stagger(00), // increase delay by 100ms for each elements.
    });
  }, 00);

  

  /*         setTimeout(function () {
  anime({
    targets: `${show}-box`,
    translateY: '-100vh',

    delay: anime.stagger(200), // increase delay by 100ms for each elements.
  });
  }, 400); */
};

const home = () => {
  console.log("home");

  const show = `.${state.active}`;
  console.log(state.active);

  cursor.style.display = "block";

  anime({
    targets: ".project-switch",
    translateY: "100vh",

    delay: anime.stagger(1000), // increase delay by 100ms for each elements.
  });

  anime({
    targets: `${show}-div`,
    translateY: "100vh",
    delay: anime.stagger(200), // increase delay by 100ms for each elements.
  });

  anime({
    targets: ".nav .nav-link, .nav",
    translateY: "100vh",
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
  });

  anime({
    targets: `#${state.project}`,
    translateX: "-120vw",

    delay: anime.stagger(00), // increase delay by 100ms for each elements.
  });

  state.project = "";

  console.log(state);

  /*     anime({
targets: `${show}-box`,
translateX: '-100vw',
delay: anime.stagger(200), // increase delay by 100ms for each elements.
}); */

  setTimeout(function () {
    anime({
      targets: ".home, .home-div .box-1",
      translateY: "-100vh",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });
  }, 100);
};

const nav = (e) => {
  console.log(state.active + ' is active');
  console.log(e.id + ' is e.id');



  /* if work is active and work is clicked nothing happens */
  if (e.id === "work" && state.active === "work") {
    console.log("yes");
  } 
  /* if work is clicked and work is not active bring in switch 
  hide active div bring in work div
  
  */
  else if (e.id === "work" && state.active !== "work") {
    anime({
      targets: ".project-switch",
      translateY: "-100vh",

      delay: anime.stagger(1000), // increase delay by 100ms for each elements.
    });

    anime({
      targets: `.${state.active}-div`,
      translateY: "100vh",
      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    anime({
      targets: `.${e.id}-div`,
      translateY: "-100vh",
      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });


    if (state.project === ''){

    anime({
      targets: `#lela`,
      translateX: "120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
      
    });
    state.project = "lela";

  }

 
    state.active = e.id;



  } else {
    anime({
      targets: ".project-switch",
      translateY: "100vh",

      delay: anime.stagger(300), // increase delay by 100ms for each elements.
    });

    anime({
      targets: `.${state.active}-div`,
      translateY: "100vh",
      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    anime({
      targets: `.${e.id}-div`,
      translateY: "-100vh",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });






    state.active = e.id;
  } 
};

const switchProject = (e) => {
  console.log(state.project);

  if (state.project === "lela") {
    anime({
      targets: `#${state.project}`,
      translateX: "-120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    anime({
      targets: `#relayfy`,
      translateX: "120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    state.project = "relayfy";
  } else if (state.project === "relayfy") {
    anime({
      targets: `#${state.project}`,
      translateX: "-120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    anime({
      targets: `#onesix`,
      translateX: "120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    state.project = "onesix";
  } else if (state.project === "onesix") {
    anime({
      targets: `#${state.project}`,
      translateX: "-120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    

    anime({
      targets: `#lela`,
      translateX: "120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
    });

    state.project = "lela";
  } else {

    anime({
      targets: `#lela`,
      translateX: "120vw",
      easing: "linear",

      delay: anime.stagger(200), // increase delay by 100ms for each elements.
      
    });
    state.project = "lela";


  }
};


