# 🌙 Vi no Sekai

Blog pessoal de reviews de anime, dorama e kdrama — tom íntimo, visual "yumekawaii" (pastel dos sonhos), feito com **Eleventy** + **Decap CMS** + **Netlify Identity**, pra você postar sem tocar em código.

---

## 🧠 Como o projeto é organizado

```
vi-no-sekai/
├── admin/                → Painel de administração (Decap CMS)
│   ├── index.html
│   └── config.yml        → Aqui define os campos de cada review
├── src/
│   ├── _includes/
│   │   ├── layouts/       → base.njk (layout geral) e post.njk (layout de review)
│   │   └── partials/      → header, footer, card de review
│   ├── posts/             → CADA REVIEW É UM ARQUIVO .md AQUI
│   ├── uploads/           → onde vão as imagens de capa enviadas pelo painel
│   ├── css/style.css      → todo o design do blog
│   ├── js/main.js         → filtro de categorias + animações
│   ├── index.njk          → página inicial
│   ├── sobre.md           → página "Sobre"
│   └── 404.njk
├── .eleventy.js           → configuração do gerador de site
├── netlify.toml           → configuração de build da Netlify
└── package.json
```

---

## 🚀 Passo a passo: subir pro GitHub e Netlify

### 1. Suba o projeto pro GitHub

Dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "primeiro commit: Vi no Sekai"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/vi-no-sekai.git
git push -u origin main
```

(Troque `SEU-USUARIO` pelo seu nome de usuário do GitHub. Se preferir, crie o repositório vazio primeiro no site do GitHub e copie a URL que ele te dá.)

### 2. Conecte o repositório na Netlify

1. Acesse [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. Escolha **GitHub** e selecione o repositório `vi-no-sekai`
3. As configurações de build já vêm prontas do `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
4. Clique em **Deploy site**

Em 1-2 minutos seu blog já está no ar em uma URL tipo `nome-aleatorio.netlify.app`. Você pode trocar esse nome em **Site settings → Change site name**.

### 3. Ative o Netlify Identity + Git Gateway (pra poder logar no painel)

Isso é o que permite você **escrever posts direto do navegador**, sem editar código:

1. No painel da Netlify, vá em **Site configuration → Identity → Enable Identity**
2. Em **Identity → Registration**, deixe como **Invite only** (assim só você pode se cadastrar)
3. Em **Identity → Services → Git Gateway**, clique em **Enable Git Gateway**
4. Volte pra aba **Identity** e clique em **Invite users** → coloque seu próprio e-mail
5. Você vai receber um e-mail de convite. Clique nele, defina sua senha.

### 4. Ajuste a URL no arquivo do painel

Abra `admin/config.yml` e troque `https://SEU-SITE.netlify.app` pela URL real do seu site (nos 3 lugares onde aparece). Depois:

```bash
git add admin/config.yml
git commit -m "ajusta URL do site no admin"
git push
```

A Netlify vai fazer o novo deploy automaticamente.

### 5. Acesse o painel e comece a postar 🎉

Vá em `https://SEU-SITE.netlify.app/admin/`, faça login com o e-mail/senha que você criou, e clique em **New Review**. Preencha:

- **Título**
- **Imagem de capa** (upload direto)
- **Categoria** (Anime / Dorama / Kdrama)
- **Nota** (1 a 5)
- **Contém spoiler?**
- **Tags**
- **Resumo curto**
- **Data**
- **Texto da review** (editor com markdown — negrito, títulos, citações, etc.)

Clique em **Publish** e em ~1 minuto a review já aparece no blog, sem você precisar tocar em nenhum código.

---

## 💻 Rodando localmente (opcional, pra testar antes de publicar)

```bash
npm install
npm run serve
```

Abre em `http://localhost:8080`.

---

## 🎨 Sobre o design

- **Paleta:** fundo roxo-crepúsculo (`#201a2e`) com acentos pastel-neon em rosa (`#ffb6d9`), lavanda (`#c9a7ff`) e azul-céu (`#9fe0ff`) — clima "yumekawaii", fofo mas elegante.
- **Tipografia:** Fredoka (títulos, arredondada e com personalidade) + Nunito (corpo, limpa e legível) + Caveat (detalhes manuscritos, tipo "diário").
- **Categorias** têm cor própria: Anime = rosa, Dorama = lavanda, Kdrama = azul.
- **Sistema de nota** em estrelas com preenchimento neon, ao invés de só número.
- Cards com glow suave no hover, header com underline neon animado, tudo responsivo mobile-first.

Quer mudar as cores? Edite as variáveis no topo de `src/css/style.css` (seção `:root`) — tudo no site herda delas.

---

Feito com ✦ para quem sente as histórias antes de analisá-las.
