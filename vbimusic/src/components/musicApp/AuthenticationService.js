class AuthenticationService{
    registerSuccessfulLogin(userName, password){
        sessionStorage.setItem('authenticatedUser',userName)
        console.log(this.isUserLoggedIn)
    }

    logOut(userName, password){
        
        sessionStorage.removeItem('authenticatedUser')
        
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser') 
        if(user===null) return false
        return true
    }
}

export default new AuthenticationService()