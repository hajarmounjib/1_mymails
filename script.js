var messagesCount = $('p').length;
$('#count').text(messagesCount);
        $('.trash').click(
        function(){
            this.parentNode.remove();
            var messagesCount = $('p').length;
            $('#count').text(messagesCount);});

$('#btn-add').click(
    function(){
        var messages = $('#add-message').val();
        $('body').append(`
        <div class="row">
        <img class="avatar" src="avatar-1.jpg">
        <div>
            <h6>Noel Paganelli</h6>
            <p>${messages}</p>
        </div>
        <img class="trash" src="trash.png">
        </div>`)
    
        
        var messagesCount = $('p').length;
        $('#count').text(messagesCount);
 
        $('.trash').click(
        function(){
            $(this).parent().remove();
            var messagesCount = $('p').length;
            $('#count').text(messagesCount);})
    }
) 

$('#btn-search').click(
    function(){
        var search = $('#search-message').val();
        $('h6').each(
            function() {
                $(this).parent().parent().show();
            }
        );
        $('h6').each(
            function() {
              if($(this).text()!== search){
                    console.log($(this).parent().parent());
                  $(this).parent().parent().hide(); 
              }
             
              $('#search-message').val("");
            }
           );  
    });


/* <body>
    <div class="row">
        Messages total: <span id="count">0</span>
    </div>
    <div class="row">
        <input id="add-message" type="text" placeholder="new message">
        <button type="button" id="btn-add">Add</button> 
    </div> */