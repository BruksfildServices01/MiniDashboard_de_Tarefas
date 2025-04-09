# 🧩 MiniDashboard de Tarefas

O **MiniDashboard de Tarefas** é um aplicativo desenvolvido com **Angular** e **Angular Material**, feito para facilitar o gerenciamento das suas tarefas diárias com um visual limpo, moderno e intuitivo.

Com este projeto, você pode adicionar tarefas, marcar como concluídas, remover itens e ainda manter tudo salvo no armazenamento local do navegador — mesmo após fechar a aba.

---

## 💡 Funcionalidades

- ✅ **Adicionar tarefas** com rapidez
- ✅ **Marcar como concluída** com apenas um clique
- ✅ **Remover tarefas** facilmente
- ✅ **Persistência local** com `localStorage`
- ✅ Design responsivo usando **Angular Material**
- ✅ Interface leve e intuitiva

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (gerenciador de pacotes que já vem com o Node.js)
- Angular CLI (instale com o comando abaixo)

```bash
npm install -g @angular/cli
```

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SeuUsuario/MiniDashboard_de_Tarefas.git
```

### 2. Instale as dependências

```bash
cd MiniDashboard_de_Tarefas
npm install
```

### 3. Rode o servidor de desenvolvimento

```bash
npm start
```

> A aplicação será aberta automaticamente no navegador em:  
> **http://localhost:4200**

---

## 💻 Como Usar

### ➕ Adicionar uma tarefa

Digite o nome da tarefa no campo de entrada e clique em **"Adicionar"**.

### ✅ Marcar como concluída

Clique no checkbox ao lado da tarefa para marcá-la como feita. O texto ficará riscado.

### 🗑️ Remover uma tarefa

Clique no ícone de lixeira para excluir a tarefa.

### 🔄 As tarefas permanecem salvas

Mesmo que você feche a aba ou o navegador, suas tarefas continuam lá, graças ao `localStorage`.

---

## 🎨 Personalização

Quer deixar o projeto com a sua cara?

- Modifique as cores e tipografia no arquivo `src/styles.scss`
- Edite os componentes:
  - `src/app/components/task-form/task-form.component.html`
  - `src/app/components/task-list/task-list.component.html`
- Adicione animações, novos ícones ou responsividade avançada com Angular Material ou CSS puro

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Para isso:

1. Faça um **fork** deste repositório
2. Crie uma nova branch:

```bash
git checkout -b minha-nova-feature
```

3. Faça suas alterações
4. Commit e push:

```bash
git commit -m "Adicionei uma nova funcionalidade"
git push origin minha-nova-feature
```

5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [GitHub](https://github.com/)
- Você, por visitar este projeto!

---

> Feito com 💙 por [Lucas bezerra](https://github.com/BruksfildServices01?tab=repositories)
