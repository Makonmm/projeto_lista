$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaAtividade = $('#nome-Atividade').val().trim();
        const novaData = $('#nome-Data').val();
        
        if(novaAtividade === '' && novaData === ''){
            alert('Por favor, preencha devidamente os campos!')
            return;
        }

        const addTarefa = $('<li>').text(`Atividade: ${novaAtividade}, Data - ${novaData}`);

        $('#addTarefa').append(addTarefa);

        $('#nome-Atividade').val('');
        $('#nome-Data').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    })

    $('#limpar-tarefas').click(function() {
        $('#addTarefa').empty();
    });


})

        