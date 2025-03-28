# 🚗 SOL Locação de Veículos

**Plataforma moderna para aluguel de veículos** desenvolvida em Angular, com foco em experiência do usuário e gestão eficiente de frota.

## ✨ Funcionalidades Principais
- 🖥️ **Página inicial atraente** com hero section interativo
- 🔍 **Filtro inteligente** por categoria de veículos (Econômico, SUV, Premium, etc.)
- 📱 **Design totalmente responsivo** (mobile, tablet, desktop)
- 🚀 **Performance otimizada** com lazy loading e trackBy
- 🎨 **Identidade visual consistente** (cores: `#004aad`, `#ffbd59`, `#ffffff`)

## 🛠️ Tecnologias Utilizadas
- **Frontend**: Angular 16+, TypeScript, SCSS
- **UI/UX**: Font Awesome, Google Fonts (Poppins)
- **Ferramentas**: Angular CLI, Git, GitHub

## 📌 Destaques do Projeto
```typescript
// Sistema de filtro dinâmico
filterByCategory(category: string): void {
  this.selectedCategory = category;
  this.filteredVehicles = category === 'Todos' 
    ? [...this.vehicles] 
    : this.vehicles.filter(v => v.category === category);
}
```

## 🎨 Layout
![Preview](https://via.placeholder.com/800x400?text=SOL+Locacao+Preview)  
*(Substitua por imagem real do projeto)*

## 🚀 Como Executar
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sol-locacao.git

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
ng serve
```

## 🌟 Próximas Etapas
- [ ] Integração com API real
- [ ] Páginas de detalhes dos veículos
- [ ] Sistema de reserva online

## 📄 Licença
MIT License - Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

💡 **Dica**: Personalize esta descrição com screenshots reais e links para o deploy!
