
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function (e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
// JavaScript function to insert default message
function newChat() {
  $('#new-messages div').empty();
  const newMessagesContainer = document.getElementById("new-messages");
  // Create a new chat message element
  const userMessage = document.createElement("div");
  // Append the message element to the new-messages container
  newMessagesContainer.appendChild(userMessage);
  // Clear the user input field
  document.getElementById("user-input-field").value = "";
  // Simulate a bot response with a delay 
  setTimeout(function () {

    // Create a bot message element
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot-message", "animate__fadeIn"); // Add CSS classes for animations
    botMessage.innerHTML = `     <div class="row gpt-chat-box"><div id="accordion" class="w-100"></div>
        <div class="col-chat-left">
            <img class="rounded-circle user-image chatgpt-icon" class="chatgpt-icon" src="assets/img/Ai-icon.gif" />
          </div>
          <div class="chat-txt col-md-11">
            <br>
            <h1>Hello again</h1>
            <p>Tell me what’s on your mind, or pick a suggestion. I have limitations and won’t always get it right, but your feedback will help me improve.</p>
    <div class="row">
    <div class="card "style="width:250px; margin: 10px;" >
        <div class="card-body" >
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>          
          </div>
        </div>
        <div class="card" style="width:250px; margin: 10px;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="list-group">              
              <a href="#" class="list-group-item list-group-item-action">A second link item</a>
              <a href="#" class="list-group-item list-group-item-action">A third link item</a>
              <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>            
            </div>            
            </div>
          </div>
          <div class="card" style="width:250px; margin: 10px;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>               
              </ul>              
              </div>
            </div> </div>      
    </div>
    <div class="alert alert-primary" role="alert">
      Human reviewers may process your Bard conversations for quality purposes. Don't enter sensitive info.
      </div>
    </div>`;

    // Append the bot message element to the new-messages container
    newMessagesContainer.appendChild(botMessage);

    // Scroll to the bottom of the chat-content-area with smooth animation
    document.getElementById("chat-content-area").scrollTo({
      top: newMessagesContainer.scrollHeight,
      behavior: "smooth"
    });

    hideLoadingMessage();
  }, 1000); // Delay for simulating the bot response
}


// JavaScript function to Simulate a bot response
function sendMessage() {
  const element = document.getElementById("accordion");
  element.remove();
  const userInput = document.getElementById("user-input-field").value;
  const newMessagesContainer = document.getElementById("new-messages");
  // Create a new chat message element
  const userMessage = document.createElement("div");
  userMessage.classList.add("chat-message", "user-message");
  userMessage.innerHTML = ` <div class="row user-chat-box">
            <div class=" chat-icon col-chat-left">
              <div >
              <img class="rounded-circle user-image chatgpt-icon" src="assets/img/profile-img.jpg" /></div>
            </div>
            <div class="chat-txt col-md-11">${userInput}</div>
                </div>`;
  // Append the message element to the new-messages container
  newMessagesContainer.appendChild(userMessage);
  // Clear the user input field
  document.getElementById("user-input-field").value = "";
  // Simulate a bot response with a delay (you can replace this with your actual logic)
  setTimeout(function () {
    // Create a bot message element
    const randomId = generateRandomId(8);
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot-message", "animate__fadeIn"); // Add CSS classes for animations
    botMessage.innerHTML = ` <div class="row gpt-chat-box">
          <div id="accordion" class="w-100">
                  <div class="collapsible-card">
                    <div  id="headingOne" class="col-md-12  text-right">                          
     <div class="row"><div class="col-md-12 text-end">         
<button type="button" class="btn btn-light collapsed draftbtn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
  View other drafts <i class="fas fa-caret-down ml-2"></i></button>
</div> </div>       
                    </div>                
                    <div id="collapseOne" class="collapse mt-2" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                      <div class="row"> <div class="card small-card" style="width: 18rem;">
                          <div class="card-body ">
                            <h5 class="card-title">Draft-1</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                          </div>
                        </div>
                        <div class="card small-card" style="width: 18rem;">
                          <div class="card-body ">
                            <h5 class="card-title">Draft-2</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                          </div>
                        </div>
                        <div class="card small-card" style="width: 18rem;">
                          <div class="card-body ">
                            <h5 class="card-title">Draft-3</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                          </div>
                        </div>
                      </div>                      
                                            </div>
                    </div>
                  </div></div>
                  <div class="row">
            <div class="col-chat-left">
                    <img class="rounded-circle user-image chatgpt-icon" class="chatgpt-icon" src="assets/img/Ai-icon.gif" />
                  </div>
                  <div class="chat-txt col-md-11">
                   <p> I am ChatGPT, a large language model developed by OpenAI. I am
                    an artificial intelligence designed to process and generate
                    human-like text based on the input provided to me. I am here to
                    assist you with any questions or tasks you may have to the best
                    of my abilities!</p>                    
                    Chat GPT can be used in the classroom to help students develop skills like writing, reading comprehension, and vocabulary building. Teachers can use Chat GPT to help students develop these skills.
                    <br> 
                    <br> 
                    <div class="mt-3"><strong>Learn more:</strong>
                    <button type="button" class="btn btn-primary btn-sm moreInfo-button ">1. smallcase.com</button>
                    <button type="button" class="btn btn-primary btn-sm moreInfo-button ">2. cnn.com</button>
                    <button type="button" class="btn btn-primary btn-sm moreInfo-button ">3. cnn.com</button>
                    <button type="button" class="btn btn-primary btn-sm moreInfo-button ">4. marketbeat.com</button>
                    <button type="button" class="btn btn-primary btn-sm moreInfo-button ">+2 more</button>
                    </div>
                    <br>
                    <div class="mt-3 row"> <div class="col-md-11">
                        <!-- Button with a thumbs-up icon -->
                        <div class="custom-tooltip">
            <button class="btn btn-sm btn-outline-primary mr-2">
                <i class="fas fa-thumbs-up text-blue"></i>
            </button>
            <span class="custom-tooltiptext">Good response</span>
</div>
            <!-- Button with a thumbs-down icon -->
            <div class="custom-tooltip">
            <button class="btn btn-sm btn-outline-danger mr-2">
                <i class="fas fa-thumbs-down text-blue"></i>
            </button>
            <span class="custom-tooltiptext">Bad response</span>
</div>
            <!-- Button with an upload icon -->
            <div class="custom-tooltip">
            <button class="btn btn-sm btn-outline-success mr-2">
                <i class="fas fa-upload text-blue"></i>
            </button>
            <span class="custom-tooltiptext">Export to Docs</span>
</div>
            <div class="custom-tooltip">
            <!-- Button with a Google logo and label 'Google It' -->
            <a href="#${randomId}" class="btn btn-sm btn-outline-secondary" data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="${randomId}">
    
                <img src="assets/img/google-logo.png" alt="Google Logo" class="google-logo" style="width: 25px; height: 25px;"/>
                Google It
            </a><span class="custom-tooltiptext">Related searches</span>
</div></div><div class="col-md-1 text-end"><div class="custom-tooltip"><a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-grip-vertical"></i>
          </a>  <span class="custom-tooltiptext">more info</span><ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
           
            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-copy"></i>
                <span>Copy</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-file-earmark-bar-graph"></i>
                <span>Report legal issue</span>
              </a>
            </li>
            <li></ul></div>     
                    </div></div>               
                         </div> </div>

                <div class="collapse" id="${randomId}">
  <div class="card card-body">
    <h3 class="p-1">Search related topics</h3>
    <hr class="bg-danger border-2 border-top border-danger" />
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    <div class="container mt-4">
    <div class="row">
      <div class="col">
            <a href="#" class="btn btn-primary btn-block btn-transparent w-100 text-start">
                <div class="row">
                    <div class="col-2 text-end">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="col-10">
                        <strong> New technologies in software development </strong>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
<div class="container mt-4">
    <div class="row">
      <div class="col">
            <a href="#" class="btn btn-primary btn-block btn-transparent w-100 text-start">
                <div class="row">
                    <div class="col-2 text-end">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="col-10">
                        <strong> New technologies in software development </strong>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="row">
      <div class="col">
            <a href="#" class="btn btn-primary btn-block btn-transparent w-100 text-start">
                <div class="row">
                    <div class="col-2 text-end">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="col-10">
                        <strong> New technologies in software development </strong>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>


  </div>
</div>

`;

    // Append the bot message element to the new-messages container
    newMessagesContainer.appendChild(botMessage);

    // Scroll to the bottom of the chat-content-area with smooth animation
    document.getElementById("chat-content-area").scrollTo({
      top: newMessagesContainer.scrollHeight,
      behavior: "smooth"
    });
    hideLoadingMessage();
  }, 1000); // Delay for simulating the bot response
}
// Function to show the loading message
const showLoadingMessage = function () {
  const loadingMessage = document.getElementById("loading-message");
  loadingMessage.style.display = "block";
};

// Function to hide the loading message
const hideLoadingMessage = function () {
  const loadingMessage = document.getElementById("loading-message");
  loadingMessage.style.display = "none";
};

function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector('#user-input-field');
  const osoButton = document.querySelector('#button-addon2');

  inputField.addEventListener('input', () => {
    if (inputField.value.trim()) {
      osoButton.disabled = false;
    } else {
      osoButton.disabled = true;
    }
  });
});

