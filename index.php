<?php
  require_once('db_connect.php');
  require_once('functions.php');

  $page_id = 1;
  $visitor_ip = $_SERVER['REMOTE_ADDR'];
  add_view($conn, $visitor_ip, $page_id);
 ?>

<!DOCTYPE html>
<html lang="pt" dir="ltr" ng-app="developerPortfolio" ng-cloak>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>João Moutinho | Web Developer</title>
    <link rel="icon" href="images/logo-jm.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body ng-controller="mainCtrl">
    <nav id="nav" class="navbar navbar-expand-lg">
      <div class="container">
        <a id="site-logo" class="navbar-brand" href="index.php"><span class="capital">J</span>oão<span class="capital">M</span>outinho</a>
        <div id="style-underline"></div>

        <button id="navbarToggle" type="button" class="navbar-toggle collapsed hidden-l hidden-m" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false" ng-mouseover="animateNavButton()" ng-mouseleave="deanimateNavButton()">
          <hr id="left-tilted-bar">
          <hr id="vertical-bar">
          <hr id="right-tilted-bar">
        </button>

        <div id="collapsable-nav" class="navbar-collapse collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a id="nav-link-about" class="nav-link lang" href="#about-scroll-anchor">Sobre</a>
              <div class="nav-underline"></div>
            </li>
            <li class="nav-item">
            <a id="nav-link-projects" class="nav-link lang" href="#projects-scroll-anchor">Projetos</a>
            <div class="nav-underline"></div>
            </li>
            <li class="nav-item">
              <a id="nav-link-contacts" class="nav-link lang" href="#contacts">Contactos</a>
              <div class="nav-underline"></div>
            </li>
          </ul>
        </div>

        <div class="lang-picker">
          <div class="language" ng-click="getTranslateJson('pt')">Pt</div>
          <div class="language" ng-click="getTranslateJson('en')">En</div>
        </div>

      </div>
    </nav>

    <div id="background-box-nav"></div>

    <div class="container">
      <div class="welcome-label"><label class="lang">Bem-vindo</label><span>.</span><span>.</span><span>.</span></div>
    </div>

    <div id="about-scroll-anchor"></div>

    <div id="main-content" class="container">

      <div id="about">
        <h2 class="lang">Sobre mim</h2>
        <p class="lang">Sou apaixonado pela área da programação. É um orgulho possuir o conhecimento para concretizar ideias.</p>
        <p class="lang">Originalmente formado em Engenharia e Gestão Industrial, sou totalmente autodidata no ramo da programação e optei por me dedicar, em pleno, a esta prática.</p>
        <p class="lang">Interesso-me por todo o tipo de desenvolvimento de software, mas, de momento, estou mais focado na área Web.</p>
      </div>

      <hr>

      <div id="skills">
        <h2 class="lang">Competências Tecnológicas</h2>
        <br>
        <div class="skill-block">
          <span class="prog-bar-ext"><span id="prog-bar-html" class="prog-bar-int">HTML</span><p class="skill"><img src="images/html.png" alt="HTML"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-css" class="prog-bar-int">CSS</span><p class="skill"><img src="images/css.png" alt="CSS"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-javascript" class="prog-bar-int">JavaScript</span><p class="skill"><img src="images/javascript.png" alt="JavaScript"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-python" class="prog-bar-int">Python</span><p class="skill"><img src="images/python.png" alt="Python"></p></span>
        </div>
        <div class="skill-block">
          <span class="prog-bar-ext"><span id="prog-bar-php" class="prog-bar-int">PHP</span><p class="skill"><img src="images/php.png" alt="PHP"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-sql" class="prog-bar-int">SQL</span><p class="skill"><img src="images/sql.png" alt="SQL"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-c#" class="prog-bar-int">C#</span><p class="skill"><img src="images/csharp.png" alt="C#"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-java" class="prog-bar-int">Java</span><p class="skill"><img src="images/java.png" alt="Java"></p></span>
        </div>
        <div class="skill-block">
          <span class="prog-bar-ext"><span id="prog-bar-angular" class="prog-bar-int">Angular</span><p class="skill"><img src="images/angular.png" alt="Angular"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-django" class="prog-bar-int">Django</span><p class="skill"><img src="images/django.png" alt="Django"></p></span>
          <span class="prog-bar-ext"><span id="prog-bar-bootstrap" class="prog-bar-int">Bootstrap</span><p class="skill"><img src="images/bootstrap.png" alt="Bootstrap"></p></span>
        </div>
      </div>

      <div id="projects-scroll-anchor"></div>

      <hr>

      <div id="projects">
        <h2 class="lang">Projetos</h2>

        <div class="project" id=project1>
          <h3 class="lang">Software de Apoio à Gestão da Produção</h3>
          <br>
          <div class="project-tecnologies project-block">
            <div>
              <h4 class="lang">Tecnologias</h4>
            </div>
            <ul>
              <li>Python</li>
              <li>Kivy</li>
              <li>Tkinter</li>
              <li>RegEx</li>
              <li>SQLite3</li>
              <li>PIL</li>
            </ul>
          </div>
          <div class="project-features project-block">
            <div><h4 class="lang">Funcionalidades</h4></div>
            <ul>
              <li class="lang">Menu informativo sobre o estado das encomendas em curso</li>
              <li class="lang">Importação de encomendas em formato PDF</li>
              <li class="lang">Avisos de aproximação de data de entrega</li>
              <li class="lang">Geração de tarefas, automaticamente, por materiais comuns entre encomendas</li>
              <li class="lang">Definição de informação de tempos e priorização de tarefas</li>
            </ul>
          </div>
          <div class="project-goals project-block">
            <div><h4 class="lang">Objetivos</h4></div>
            <ul>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project1"></div><span class="lang">Controlo de produção encomendas</span></li>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project1"></div><span class="lang">Aproveitamento de matérias-primas</span></li>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project1"></div><span class="lang">Redução tempos setup</span></li>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project1"></div><span class="lang">Planeamento de produção</span></li>
            </ul>
          </div>
          <div class="image-carousel">
            <button id="img-previous-project1" class="button img-previous" ng-click="switchImage('project1', 'previous')">◄</button>
            <button id="img-next-project1" class="button img-next" ng-click="switchImage('project1', 'next')">►</button>
            <div id="image-container-project1" class="image-container" ng-click="openModal('modal-image', 'project1')">
              <?php
                $dir = glob("./images/project1/*");
                $counter = 0;
                foreach ($dir as $image) {
                  $counter += 1;
                  $imgId = "project1-img-" . $counter;
                  if ($counter == 1) {
                      echo "<img id=$imgId class='image-active img-project1' src=$image>";
                  } else {
                      echo "<img id=$imgId class='img-project1' src=$image>";
                  }
                }
              ?>
            </div>
          </div>

          <div class="link-section">
              <a class="button lang" href="" target="_blank">Código</a>
          </div>
        </div>

        <div class="project" id=project2>
          <h3>Site Banda Filarmónica Alveguense</h3>
          <br>
          <div class="project-tecnologies project-block">
            <div>
              <h4 class="lang">Tecnologias</h4>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </div>
          <div class="project-features project-block">
            <div><h4 class="lang">Funcionalidades</h4></div>
            <ul>
              <li>Responsive Web App</li>
            </ul>
          </div>
          <div class="project-goals project-block">
            <div><h4 class="lang">Objetivos</h4></div>
            <ul>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project2"></div><span class="lang">Apresentação dos serviços da B.F.A.</span></li>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project2"></div><span class="lang">Exposição às camadas jovens para ingressar na B.F.A.</span></li>
            </ul>
          </div>
          <div class="image-carousel">
            <button id="img-previous-project2" class="button img-previous" ng-click="switchImage('project2', 'previous')">◄</button>
            <button id="img-next-project2" class="button img-next" ng-click="switchImage('project2', 'next')">►</button>
            <div id="image-container-project2" class="image-container" ng-click="openModal('modal-image', 'project2')">
              <?php
                $dir = glob("./images/project2/*");
                $counter = 0;
                foreach ($dir as $image) {
                  $counter += 1;
                  $imgId = "project2-img-" . $counter;
                  if ($counter == 1) {
                      echo "<img id=$imgId class='image-active img-project2' src=$image>";
                  } else {
                      echo "<img id=$imgId class='img-project2' src=$image>";
                  }
                }
              ?>
            </div>
          </div>

          <div class="link-section">
              <a class="button lang" href="https://banda-filarmonica-alveguense.herokuapp.com/index.php" target="_blank">Consultar Site</a>
              <a class="button lang" href="https://github.com/DarkMecanist/site-banda" target="_blank">Código</a>
          </div>
        </div>

        <div class="project" id=project3>
          <h3 class="lang">Web App Logística e Expedição</h3>
          <br>
          <div class="project-tecnologies project-block">
            <div>
              <h4 class="lang">Tecnologias</h4>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Django</li>
              <li>AWS</li>
            </ul>
          </div>
          <div class="project-features project-block">
            <div><h4 class="lang">Funcionalidades</h4></div>
            <ul>
              <li class="lang">Menu informativo sobre o estado das encomendas em curso</li>
              <li class="lang">Importação de encomendas em formato PDF</li>
              <li class="lang">Avisos de aproximação de data de entrega</li>
              <li class="lang">Controlo de stocks</li>
              <li class="lang">Geração de documento Word com etiquetas por artigo</li>
              <li class="lang">Geração de documento Word com listagens</li>
              <li class="lang">Carregamento de PDFS com fichas técnicas de artigos</li>
              <li class="lang">Sistema de autenticação de utilizadores</li>
            </ul>
          </div>
          <div class="project-goals project-block">
            <div><h4 class="lang">Objetivos</h4></div>
            <ul>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project3"></div><span class="lang">Controlo do estado das encomendas</span></li>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project3"></div><span class="lang">Dimunuição de erros na expedição</span></li>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project3"></div><span class="lang">Auxílio na execução de documentos contabilísticos</span></li>
            </ul>
          </div>
          <div class="image-carousel">
            <button id="img-previous-project3" class="button img-previous" ng-click="switchImage('project3', 'previous')">◄</button>
            <button id="img-next-project3" class="button img-next" ng-click="switchImage('project3', 'next')">►</button>
            <div id="image-container-project3" class="image-container" ng-click="openModal('modal-image', 'project3')">
              <?php
                $dir = glob("./images/project3/*");
                $counter = 0;
                foreach ($dir as $image) {
                  $counter += 1;
                  $imgId = "project3-img-" . $counter;
                  if ($counter == 1) {
                      echo "<img id=$imgId class='image-active img-project3' src=$image>";
                  } else {
                      echo "<img id=$imgId class='img-project3' src=$image>";
                  }
                }
              ?>
            </div>


          </div>

          <div class="link-section">
            <a class="button lang" href="https://web-app-log.herokuapp.com/" target="_blank">Consultar Site</a>
            <a class="button lang" href="https://github.com/DarkMecanist/web_app_logistica" target="_blank">Código</a>
          </div>
        </div>

        <div class="project" id=project4>
          <h3 class="lang">Este Site</h3>
          <br>
          <div class="project-tecnologies project-block">
            <div>
              <h4 class="lang">Tecnologias</h4>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>AngularJs</li>
              <li>Bootstrap</li>
              <li>PHP</li>
            </ul>
          </div>
          <div class="project-features project-block">
            <div><h4 class="lang">Funcionalidades</h4></div>
            <ul>
              <li>Responsive Web App</li>
            </ul>
          </div>
          <div class="project-goals project-block">
            <div><h4 class="lang">Objetivos</h4></div>
            <ul>
              <li><div class="checkbox"></div><img src="images/checkmark2.png" alt="checkmark"><div class="checkbox-cover checkbox-project4"></div><span class="lang">Apresentação dos meus projetos</span></li>
            </ul>
          </div>

          <div class="link-section">
            <a class="button lang" href="" target="_blank">Código</a>
          </div>
        </div>
      </div>

    </div>

    <div id="background-box-footer">
      <footer id="contacts" class="panel-footer">
          <ul>
            <li class="hidden-xs"><span class="contact-header">GitHub<img id="logo-github" class="logo-contacts" src="images/github.png" alt="logo-github"></span><a class="contact-link" href="https://github.com/DarkMecanist" target="_blank">https://github.com/DarkMecanist</a></li>
            <li class="hidden-xs"><span class="contact-header"><img id="logo-linkedin" class="logo-contacts" src="images/linkedin.png" alt="logo-linkedin"></span><a class="contact-link" href=">https://www.linkedin.com/in/jo%C3%A3o-moutinho-74725b169/" target="_blank">https://www.linkedin.com/in/jo%C3%A3o-moutinho-74725b169/</a></li>
            <li class="hidden-xs"><span class="contact-header">Email<img id="logo-email" class="logo-contacts" src="images/email.png" alt="logo-email"></span><a class="contact-link" href="mailto:jmoutinho94@gmail.com" target="_blank">jmoutinho94@gmail.com</a></li>
            <li class="hidden-xs"><span class="contact-header"><span class="lang">Telemóvel</span><img id="logo-phone" class="logo-contacts" src="images/phone.png" alt="logo-phone"></span><a class="contact-link" href="tel:965570450">(+351) 965570450</a></li>
            <li class="visible-xs"><a class="contact-header" href="https://github.com/DarkMecanist" target="_blank">GitHub<img id="logo-github" class="logo-contacts" src="images/github.png" alt="logo-github"></a></li>
            <li class="visible-xs"><a class="contact-header" href=">https://www.linkedin.com/in/jo%C3%A3o-moutinho-74725b169/" target="_blank"><img id="logo-linkedin" class="logo-contacts" src="images/linkedin.png" alt="logo-linkedin"></a></li>
            <li class="visible-xs"><a class="contact-header" href="mailto:jmoutinho94@gmail.com" target="_blank">Email<img id="logo-email" class="logo-contacts" src="images/email.png" alt="logo-email"></a></li>
            <li class="visible-xs"><a class="contact-header" href="tel:965570450"><span class="lang">Telemóvel</span><img id="logo-phone" class="logo-contacts" src="images/phone.png" alt="logo-phone"></a></li>
          </ul>
      </footer>
    </div>

    <div id="modal-image" class="modal-box">
      <div class="modal-content">
        <button type="button" class="button-close-modal" ng-click="closeModal('modal-image')">X</button>
        <div id="modal-image-container"></div>
      </div>
    </div>

    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
