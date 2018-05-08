
module.exports = makeSigninButton

function makeSigninButton (GITHUB_CLIENT_ID) {
  
  var scopes = ['gist'].join(',')
  var githubURL = 'https://github.com/login/oauth/authorize'
  var URL = `${githubURL}?client_id=${GITHUB_CLIENT_ID}&scope=${scopes}`

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
