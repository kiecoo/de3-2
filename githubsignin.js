
module.exports = makeSigninButton

function makeSigninButton (GITHUB_CLIENT_ID) {
  
  var scopes = ['gist'].join(',')
  var githubURL = 'https://github.com/login/oauth/authorize'
  var URL = `${githubURL}?client_id=${GITHUB_CLIENT_ID}&scope=${scopes}`

  var css = csjs`
  .btn {
      margin: 25px;
      width: 80%;
      min-width: 184px;
      max-width: 184px;
      height: 42px;
      background-color: #fcfcfc;
      border-radius: 2px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);
      cursor: pointer;
      cursor: hand;
      align-self: center;
      user-select: none;
      transition: all 400ms ease 0s;
      display: flex;
  }
  .iconwrapper {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      user-select: none
  }
  .btntext {
      margin: 11px 14px 40px 40px;
      color: #757575;
      font-size: 14px;
      letter-spacing: .2px;
      font-family: Roboto;
      user-select: none
  }
  .btn:active {
      box-shadow: 0 1px 1px #757575;
      background: #F8F8F8;
      color: #fff;
      user-select: none
  }
  .cardSocial {
    color: black;
    padding: .3em ;
    transform:scale(2);
  }
`
  
  var signupButton = bel`
    <div class="${css.btn}" onclick=${login}>
      <div class="${css.iconwrapper}">
        <i class="${css.cardSocial} fa fa-github" aria-hidden="true"></i>
      </div>
      <p class="${css.btntext}"><b>Sign in with Github</b></p>
    </div>`
  function login (event) {
    console.log(URL)
    var x = window.open(URL)
  }
  return signupButton
}
