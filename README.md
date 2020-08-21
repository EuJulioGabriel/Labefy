# Labefy

## Aplicação com funções semelhantes ao Spotify

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e o npm como gerenciador de pacotes do NodeJS.
Sobre a divisão dos arquivos, há apenas um setor. O setor de `components` são 
os componentes em si do meu projeto (Details, Music, Playlists).

## Sobre
Esse foi um dos primeiros projetos que fiz em React.
O projeto consiste em uma página, que possui quatro grande áreas. A primeira área é responsável por criar uma playlist, que possue por sua vez um input para inserir o nome da sua playlist e um botão para enviar o nome da sua playlist ao servidor.
A segunda área é responsável por inserir uma música na sua playlist e possui: três input para inserir respectivamente o nome da música, o nome do artista da música, a url que você encontra a música, um select para você selecionar a qual playlist você quer inserir a música e um botão para enviar a música para o servidor.
A página ainda possui um botão exibir playlist que renderiza a lista de playlists que você possui, que é a terceira área, que por sua vez, é responsável por mostrar todas as playlists que você já cadastrou e também permite remover uma playlist em específico e ver mais detalhes da playlist que você clicou.
A quarta e última área do projeto consiste na exibição de todas as músicas contidas na playlist e permite você ouvir uma música em específico.

Há integrações com uma API externa nesse caso.

## Deploy com Surge

<a href="http://synonymous-cloth.surge.sh/">Labefy</a>

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `git clone https://github.com/EuJulioGabriel/Labefy.git`
2. `npm install` para instalar todas as dependências;
3. `npm run start` para rodar localmente o projeto
4. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

## Contato
Julio Gabriel<br>
juliogabriel@outlook.com<br>
<a href="https://www.linkedin.com/in/eujuliogabriel/">Linkedin</a>
