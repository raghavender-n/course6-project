// Get the modal

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function opeSignupCloseSignin() {  
  closeModal("signinModal");
  openModal("signupModal");
}



var header = `<header>
<div class="header">
  <div class="hr-left-container">
    <span class="heading">ScriBBler</span>
    <span class="subheading">Explore, Imagine, Create</span>
  </div>
  <div class="hr-right-container">
    <button onclick="openModal('signupModal')">
      Sign Up
    </button>
    <button onclick="openModal('signinModal')">Sign In</button>
  </div>
</div>
</header>
<section>
<div class=""></div>
</section>

<div id="signupModal" class="modal">
<div class="modal-header">
  <span>Get Started</span>
  <span class="close" onclick="closeModal('signupModal')">&times;</span>
</div>
<div class="modal-content">
  <form>
    <div class="input-box-container">
      <label>
        Name
      </label>
      <input type="text" id="name" placeholder="Enter your name" required />
    </div>

    <div class="input-box-container">
      <label>
        Username
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your Username"
        required
      />
    </div>

    <div class="input-box-container">
      <label>
        Password
      </label>
      <input type="password" id="name" placeholder="Enter your Password" />
    </div>

    <div class="input-box-container">
      <label>
        Confirm Password
      </label>
      <input
        type="password"
        id="name"
        placeholder="Enter your Confirm Password"
      />
    </div>
    <button class="form-submit-btn" type="submit">Sign Up</button>
  </form>
</div>
</div>

<div id="signinModal" class="modal">
<div class="modal-header">
  <span>Get Started</span>
  <span class="close" onclick="closeModal('signinModal')">&times;</span>
</div>
<div class="modal-content">
  <form>
    <div class="input-box-container">
      <label>
        Username
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your Username"
        required
      />
    </div>

    <div class="input-box-container">
      <label>
        Password
      </label>
      <input
        type="password"
        id="name"
        placeholder="Enter your Password"
        required
      />
    </div>
    <button class="form-submit-btn" type="submit">Sign In</button>
  </form>
  <div class="signup-link-container">
    <span>Not a member?</span>
    <span class="signup-link" onclick="opeSignupCloseSignin()">Sign Up</span>
  </div>
</div>
</div>`;