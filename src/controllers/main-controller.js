

const mainController = {
  home: (req, res) => {
    //res.sendFile(path.join(__dirname, "../views/home.html"));
    res.render("home",{

    });
  },
  login: (req, res) => {
    //res.sendFile(path.join(__dirname, "../views/login.html"));
    res.render("login");
  },
  register: (req, res) => {
    //res.sendFile(path.join(__dirname, "../views/register.html"));
    res.render("register");
},
detail:(req,res)=>{
  res.render("detail");
}
};

module.exports = mainController;