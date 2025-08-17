# CM² Construções - Website Responsivo

Website da empresa CM² Construções, otimizado para dispositivos móveis com design responsivo moderno.

## 🚀 Características

- **Design Responsivo**: Otimizado para todos os dispositivos (mobile-first)
- **Performance**: Otimizações para carregamento rápido em dispositivos móveis
- **SEO**: Meta tags e estrutura semântica otimizada
- **Acessibilidade**: Navegação por teclado e leitores de tela
- **PWA Ready**: Preparado para Progressive Web App

## 📱 Otimizações para Mobile

- Breakpoints responsivos: `xs` (475px), `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Classes utilitárias para mobile: `btn-mobile`, `card-mobile`, `grid-mobile`
- Suporte a safe areas para dispositivos com notch
- Otimizações de touch para melhor experiência em dispositivos móveis
- Imagens responsivas com formatos WebP e AVIF

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com otimizações automáticas
- **Tailwind CSS** - Framework CSS utilitário com classes responsivas
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Lucide React** - Ícones vetoriais otimizados
- **Radix UI** - Componentes acessíveis e customizáveis

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd website-cm2construcoes-main
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run start` - Executa o projeto em modo produção
- `npm run analyze` - Analisa o bundle para otimizações

## 📐 Breakpoints Responsivos

```css
/* Mobile First */
xs: 475px    /* Dispositivos muito pequenos */
sm: 640px    /* Dispositivos pequenos */
md: 768px    /* Tablets */
lg: 1024px   /* Desktops pequenos */
xl: 1280px   /* Desktops médios */
2xl: 1536px  /* Desktops grandes */
3xl: 1920px  /* Desktops muito grandes */
```

## 🎨 Classes Utilitárias

### Botões
- `btn-mobile` - Botão otimizado para mobile (largura total em telas pequenas)
- `btn-mobile-large` - Botão grande otimizado para mobile

### Cards
- `card-mobile` - Padding responsivo para cards
- `grid-mobile` - Grid responsivo (1 coluna em mobile, 2 em tablet, 3 em desktop)
- `grid-mobile-2` - Grid de 2 colunas responsivo

### Seções
- `section-mobile` - Espaçamento vertical responsivo para seções
- `container-mobile` - Container com padding responsivo

## 🔧 Configurações

### Tailwind CSS
- Breakpoints customizados para melhor controle responsivo
- Cores personalizadas da marca
- Animações customizadas otimizadas para performance

### Next.js
- Otimizações de imagem automáticas
- Code splitting automático
- Compressão e cache otimizados
- Headers de segurança configurados

### PostCSS
- Autoprefixer para compatibilidade cross-browser
- CSSNano para minificação em produção
- Suporte a browsers modernos e legados

## 📱 Testando Responsividade

1. **DevTools do Navegador**
   - Pressione F12 e ative o modo dispositivo
   - Teste diferentes resoluções

2. **Dispositivos Reais**
   - Teste em smartphones e tablets reais
   - Verifique a experiência de toque

3. **Ferramentas Online**
   - [Responsive Design Checker](https://responsivedesignchecker.com/)
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta .next para o Netlify
```

### Outros
```bash
npm run build
npm run start
```

## 📊 Performance

- **Lighthouse Score**: Otimizado para 90+ em todas as métricas
- **Core Web Vitals**: LCP, FID e CLS otimizados
- **Bundle Size**: Code splitting automático para melhor performance
- **Image Optimization**: Formatos WebP/AVIF com lazy loading

## 🔒 Segurança

- Headers de segurança configurados
- CSP (Content Security Policy) implementado
- Permissions Policy para recursos sensíveis
- Proteção contra XSS e clickjacking

## 📝 Licença

Este projeto é propriedade da CM² Construções. Todos os direitos reservados.

## 🤝 Suporte

Para suporte técnico ou dúvidas sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ para CM² Construções** 
