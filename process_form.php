<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Configurar o e-mail de destino
  $to = "iasbertt@gmail.com";
  $subject = "Formulário de Contato - Retro Games";
  $body = "Nome: $name\nEmail: $email\nMensagem: $message";
  
  // Enviar o e-mail
  if (mail($to, $subject, $body)) {
    echo "O e-mail foi enviado com sucesso.";
  } else {
    echo "Houve um problema ao enviar o e-mail.";
  }
}
?>