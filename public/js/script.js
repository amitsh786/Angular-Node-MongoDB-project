// $(document).ready(function()
// {
var User=function(fname,lname,email,password,mobile)
{
  this.fname=fname;
  this.lname=lname;
  this.email=email;
  this.password=password;
  this.mobile=mobile;
};
var Login=function(email,password)
{
  this.email=email;
  this.password=password;
};
$(document).ready(function()
{
$(document).on("click","#register",function()
  {
    console.log("2");
    var fname=$("#fname").val();
    var lname=$("#lname").val();
    var email=$("#email").val();
    var password=$("#password").val();
    var mobile=$("#mobile").val();
    var userObject=new User(fname,lname,email,password,mobile);

console.log(userObject);
    $.ajax({
    url:" http://localhost:8081/api/signup",
    datatype:"json",
      type:"POST",
    data:JSON.stringify(userObject),
    contentType:'application/json',
    success:function(data)
    {
       console.log(data);
       if(data.status){
          console.log("this is the response");
        }
        else {
        console.log("this is the else part");
      }
    },
    });
  });
// });
////////////////
// ////////////////
  // $(document).ready(function(){
  // console.log("1");
  $(document).on("click","#login",function()
  {
    // console.log("2");
    var email=$("#email1").val();
    var password=$("#password1").val();
      console.log(email);
    console.log(password);
    var loginUser = new Login(email,password);
    console.log(loginUser);
     $.ajax({
    url:"http://localhost:8081/api/login",
    datatype:"json",
      type:"POST",
    data:JSON.stringify(loginUser),
    contentType:'application/json',
    success:function(data)
    {
      if(data.success){
        dashBoard();
         console.log("valid user");
}
      else
        {
            console.log("you are the invalid user");
        }
    },
    });
  });
 // });
 function dashBoard()
{
  $.ajax({
      url:"dashBoard.html",
      type:"GET",
      datatype:"text",
      //  contentType:'application/json',
      success:function(res)
      {
        if(res){
        console.log("hiiii");
          $("#b1").html(res);
        }else {
          console.log("the res value is not there");
          }
        }
      });
}
///////////////code for the hiding the data
// $(document).ready(function()
// {
    $("#msgbox").hide();
    $(document).on("click","#clickHere",function()
    {
             $("#clickHere").hide();
             $("#msgbox").show();
          });
 });
 ///////////////code for the saving the card data
// $(document).ready(function(){
var note = function (i2,i3){
  this.i2 = i2;
  this.i3 = i3;
};
$(document).on("click","#done",function()
{
      var i2=$("#i2").val();
      var i3=$("#i3").val();

      var userNote=new note(i2,i3);
      // console.log(userNote);
    $.ajax({
      url:"http://localhost:8081/api/saveDashboard",
      datatype:"json",
        type:"POST",
      data:userNote,
        success:function(data)
      {
        console.log(data);
         if(data.status){
            noteMsg="<h1>"+data.msg.i2+"<br>"+data.msg.i3+"</h1><br>";
            newDiv=$('<div class="col-md-3" style="1px solid;word-wrap:break-word;margin:2px;border:1px solid black;margin:8px:margin-left=20px;overflow-x:hidden;height:100px;"'+noteMsg+'</div>')
                  arrangeDiv();
             $("#boxcreate").prepend(newDiv);
            console.log("saved");
          }
            else {

                  console.log("not saved");
              }
      },
    });
  });
// });

///////////////////////////////code for the loading al the data from the database always
// $(document).ready(function(){

    $.ajax({
      url:"http://localhost:8081/api/fetchDashboard",
      datatype:"json",
      type:"POST",
      success:function(data)
      {
          console.log(data);
          console.log(data.msg.length);
          if(data.status){
            for(var i=0;i<data.msg.length;i++)
            {
              noteMsg="<h1>"+data.msg[i].i2+"<br>"+data.msg[i].i3+"</h1><br>";
              newDiv=$('<div class="col-md-3" style="1px solid;word-wrap:break-word;margin:2px;border:1px solid black;margin:8px:margin-left=20px;overflow-x:hidden;height:100px;"'+noteMsg+'</div>')


              $("#boxcreate").prepend(newDiv);
           }
        console.log("data is present");
    }
//         else {
//         console.log("data is not present");
//         }
 },
});
// });
////////////////code for fetching the data from the data base
// $(document).ready(function(){
  $(document).on("click","#done",function()
  {
      $("#boxcreate").empty();
    $.ajax({
      url:"http://localhost:8081/api/fetchDashboard",
      datatype:"json",
      type:"POST",
      success:function(data)
      {
          console.log(data);
          console.log(data.msg.length);
          if(data.status){
            for(var i=0;i<data.msg.length;i++)
            {
                noteMsg="<h1>"+data.msg[i].i2+"<br>"+data.msg[i].i3+"</h1><br>";
                newDiv=$('<div class="col-md-3" style="1px solid; box-shadow: 0px 0px 5px #888888;word-wrap:break-word;margin:2px;border:none;margin:8px;margin-left:20px;overflow-x:hidden;min-height:100px;"'+noteMsg+'</div>')
                  arrangeDiv();
                $("#boxcreate").prepend(newDiv);


           }
    }
        else {
        console.log("data is not present");
        }
},
});
});
// });
// $(document).ready(function(){
  $(document).on("click","#logout",function(){
    $.ajax({
      url:"http://localhost:8081/api/logout",
      datatype:"json",
      type:"GET",
      success:function(data)
      {
          if(data.status){
            console.log("welcomepage");
              welcomepage();

          }

        },
});
});
// });
function welcomepage()
{
  console.log("i am inside welcomepage");
  $.ajax({
    url:"index.html",
    datatype:"json",
    type:"GET",
    success:function(res)
    {
      console.log("i am inside welcomepage and response is here");

            $("#b1").html(res);
    }
  });
}
function arrangeDiv()
{
  var elem = document.querySelector('.main');
var pckry = new Packery( elem, {
  itemSelector: '.boxcreate',
  gutter: 10
});
var pckry = new Packery( '.main', {
});
}
// });///end of the ready
