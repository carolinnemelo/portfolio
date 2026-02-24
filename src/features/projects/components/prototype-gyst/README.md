# Resumo: Dark Mode do Gyst Dashboard

## 🎯 O que é?

O dashboard do Gyst tem **dark mode próprio e independente** do resto do site.

## 📦 Arquitetura

```
GystDashboard (wrapper)
  └── GystThemeProvider (context)
        ├── theme: "light" | "dark"
        ├── toggleTheme()
        └── isDark: boolean

Componentes filhos:
  - GystNavbar
  - Toggle (muda o tema do Gyst)
  - DashboardContent
```

## 🔧 Como usar

### Dentro de qualquer componente do Gyst:

```tsx
"use client";
import { useGystTheme } from "./gyst-theme-context";

function MeuComponente() {
  const { isDark, theme, toggleTheme } = useGystTheme();
  
  return (
    <div className={isDark ? "dark-style" : "light-style"}>
      Tema: {theme}
    </div>
  );
}
```

### No Toggle:

```tsx
const { isDark, toggleTheme } = useGystTheme();

<button onClick={toggleTheme}>
  {/* Alterna entre light/dark */}
</button>
```

## ✅ Benefícios

- ✅ Dashboard tem tema independente do site
- ✅ Simples de usar (1 hook)
- ✅ Leve (só Context API)
- ✅ Sem dependências extras

## 🚫 Importante

- **NÃO** use `useTheme()` do next-themes dentro do Gyst
- **USE** `useGystTheme()` do context
- O tema **NÃO** persiste (sempre inicia em "light")
