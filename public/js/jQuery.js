
$(document).ready(function()
{
  $("#msgbox").hide();
    $(document).on("click","#clickHere",function()
    {
             $("#clickHere").hide();
             $("#msgbox").show();
          });
 });

  $(document).on("click","#done",function()
{
      var title=$("#i2").val();
      var note=$("#i3").val();
      console.log(title);
      console.log(note);
      var userNote={title:title,note:note};
      console.log(userNote);

      $.ajax({
      url:" http://localhost:8081/api/dashboard",
      datatype:"json",
        type:"POST",
      data:userNote,
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
