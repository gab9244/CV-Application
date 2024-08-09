O que esse projeto tem que ter
1.Uma parte onde os inputs ficam e as configurações do currículo ficaram
2.Mostre o currículo ao lado dos input e cada mudança que fizemos nos input e configuções no estilo do input devem ser mostradas em tempo real

Eu quero que alguns campos possam ser adicionados mais de uma vez. Por exemplo, eu quero que o usuário possa adicionar mais de uma empressa na qual ele trabalhou, faculdade na qual ele estudou e lingua que ele sabe falar(também por que não adicionar o nivel de proficiêcia que ele possui sobre a lingua)

Como fazer com que campos fiquem escondido e só sejam mostrados caso uma ceta seja clicada?
Para fazer esse efeito de drop down vamos seguir as seguintes etapas:
1.Por padrão alguns inputs só devem mostrar o header(h3 e o botão)
2.Assim que o botão for apertado os inputs devem ser mostrados

Como usar um icone do font awesome
1.Primeiro baixe fort awesome ou use link : npm install @fortawesome/fontawesome-free; Link: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
Depois import no arquivo js e css: import '@fortawesome/fontawesome-free/css/all.min.css';

2.Para usar os icones geralmente pegamos um elemento i ou span e colocamos a classe respectiva do icone que queremos usar:
<i class="fa-solid fa-chevron-dow"></i>
ou
<span class="fas fa-home"></span>

3.Customizando icones com CSS:
3.1 para mudar o tamanho do icone usaremos : 'fa-xs, fa-sm, fa-lg, fa-2x, fa-3x, fa-4x, or fa-5x'



O que eu quero que a funcionalidade de salvar e adicionar novos campos faça: 
   .Limpe os campos dos input relacionados ao seu botão de salve
   .Quando salvamos uma parte do formulário ela não deve ser alterar por qualquer valor que colocamos nos inputs
   .Depois que valores forem colocados nos inputs, uma nova sessão deve ser adicionada ao formulário

   Sempre que ficar presso em algum problema, saia do computador e faça outra coisa
 
   Cada sessão no curriculo deve ser carregada individualmente, assim como fizemos em outros projetos, cada uma deve ter seu proprio estado
   
   Crie dois estado um para os valores já salvos e outro para os valores atuais, assim os valores atuais sempre sofreram alterações, mas os já salvas ficaram em uma array de contexto e usaremos algo como array.map para renderizar os valores salvos.
   Como os valores atuais são renderizados no contexto que é atualizado sempre que alteramos o valor de algum input, sempre que alteramos os inputs eles apareceram no valor atual
   Para renderizar cada sessão do curriculo usaremos o mesmo método que usamos para renderizar as tarefas no TaskManager, talvez seja necessário criar um contexto para cada sessão ou usar apenas uma onde criamos no contexto das sessões salvas objetos dentro de objetos, como um objeto para educação e lá colocamos as propriedades respectivas a educação