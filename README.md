# Vue 3 Boilerplate 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.12.0-brightgreen.svg)](https://nodejs.org/)

Современный шаблон для быстрого старта проектов на Vue 3 с TypeScript, построенный на архитектуре Feature-Sliced Design (FSD). Разработан для опытных разработчиков, которые ценят чистый код, масштабируемость и лучшие практики.

## ✨ Особенности

- 📦 **Vue 3 + TypeScript** - Полная поддержка TypeScript из коробки
- 🏗️ **Feature-Sliced Design** - Масштабируемая архитектура для больших приложений
- 🛠️ **Современный инструментарий** - Vite, ESLint, Prettier
- 🔧 **Vue DevTools** - Продвинутая отладка приложения
- 📱 **Адаптивность** - Готовые миксины и утилиты для responsive design
- 🚀 **Производительность** - Оптимизированная конфигурация сборки
- 🔒 **Безопасность** - Настроенные правила безопасности и линтинга

## 📦 Основные зависимости

- Vue 3
- Vue Router
- @vueuse/core
- es-toolkit

## 🛠️ Dev-зависимости

- Vite
- TypeScript
- ESLint
- Prettier
- Vue DevTools

## 📂 Структура проекта (FSD)

```
src/
├── app/       # Настройки приложения, роутинг, глобальные стили
├── entities/  # Бизнес-сущности
├── features/  # Функциональные возможности
├── pages/     # Страницы приложения
├── shared/    # Общие компоненты, утилиты, стили
└── widgets/   # Независимые блоки интерфейса
```

## 🚀 Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/dyakubovskiy/boilerplate.git
cd boilerplate

# Удаление зависимости от текущего репозитория
rm -rf .git

# Инициализация нового репозитория
git init
git remote add origin https://github.com/username/new-project.git

git add .
git commit -m "Initial commit for new project"
git push -u origin main

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build
```

## 📝 Скрипты

- `npm run dev` - Запуск dev-сервера
- `npm run dev:fsd` - Запуск dev-сервера и отслеживание FSD
- `npm run build` - Сборка проекта
- `npm run preview` - Предпросмотр собранного проекта
- `npm run lint` - Проверка кода линтером
- `npm run format` - Форматирование кода
- `npm run type-check` - Проверка типов TypeScript

## 🔧 Конфигурация

- `.env` - Переменные окружения
- `vite.config.ts` - Конфигурация Vite
- `tsconfig.json` - Настройки TypeScript
- `eslint.config.ts` - Правила ESLint
- `.prettierrc.json` - Настройки Prettier

## 🤝 Contributing

1. Форкните репозиторий
2. Создайте ветку для новой функциональности (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте изменения в репозиторий (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Проект распространяется под лицензией MIT.

## 👨‍💻 Автор

**Дмитрий Якубовский / Dmitiry Yakubovskiy**

- Telegram: [@dev_cube](https://t.me/dev_cube)
- GitHub: [@dyakubovskiy](https://github.com/dyakubovskiy)

## ⭐️ Поддержка проекта

Если вам понравился проект, не забудьте поставить звезду! Это поможет другим разработчикам найти его.

---

Сделано с ❤️ для Vue-сообщества
