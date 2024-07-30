$(document).ready(function(){
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            endereco: {
                required: true
            },
            termos: {
                required: true
            },
        },
        messages: {
            nome:'Por favor, insira o seu nome.',
            email: 'Precisamos de um e-mail válido para contato.',
            mensagem: 'Digite sua mensagem.',
            termos: 'É preciso aceitar os termos para continuar.',
        },
        submitHandler: function (form) {
            alert("Suas informações foram enviadas para análise. Em breve iremos entrar em contato por e-mail!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir!");
        }
    })
})