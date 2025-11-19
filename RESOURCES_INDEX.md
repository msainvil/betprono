# 📚 BetProno - Index des Ressources

> Guide complet de toutes les ressources de design et développement

---

## 🎨 Documentation de Design

### Fichiers Principaux

| Fichier | Description | Taille | Lien |
|---------|-------------|--------|------|
| **README.md** | Index principal et quick start | 8 KB | [Voir →](./README.md) |
| **DESIGN_SYSTEM.md** | Design system complet (couleurs, typographie, spacing, etc.) | 78 KB | [Voir →](./DESIGN_SYSTEM.md) |
| **COMPONENTS.md** | Bibliothèque de 20+ composants UI | 36 KB | [Voir →](./COMPONENTS.md) |
| **SCREENS.md** | Wireframes détaillés de tous les écrans | 62 KB | [Voir →](./SCREENS.md) |
| **design-tokens.ts** | Tokens TypeScript pour React Native | 21 KB | [Voir →](./design-tokens.ts) |

**Total Design** : ~205 KB de documentation

---

## 🚀 Guides d'Implémentation

### Fichiers de Développement

| Fichier | Description | Utilité | Lien |
|---------|-------------|---------|------|
| **IMPLEMENTATION_GUIDE.md** | Guide étape par étape pour implémenter l'app | Setup projet, navigation, state management, déploiement | [Voir →](./IMPLEMENTATION_GUIDE.md) |
| **COMPONENT_EXAMPLES.md** | Exemples de code React Native pour 8 composants | Button, Badge, CardMatch, IssueSelector, AmountInput, etc. | [Voir →](./COMPONENT_EXAMPLES.md) |

---

## ⚡ Outils de Productivité

### VS Code Configuration

| Fichier | Description | Lien |
|---------|-------------|------|
| **.vscode/betprono-snippets.code-snippets** | 35+ snippets personnalisés pour accélérer le dev | [Voir →](./.vscode/betprono-snippets.code-snippets) |
| **.vscode/SNIPPETS_GUIDE.md** | Documentation complète des snippets | [Voir →](./.vscode/SNIPPETS_GUIDE.md) |
| **.vscode/extensions.json** | Extensions VS Code recommandées | [Voir →](./.vscode/extensions.json) |
| **.vscode/settings.json** | Configuration VS Code optimisée pour le projet | [Voir →](./.vscode/settings.json) |

---

## 📖 Par Où Commencer ?

### 🎨 Pour Designer / Comprendre le Projet

1. **README.md** - Vision globale en 5 minutes
2. **DESIGN_SYSTEM.md** - Approfondir l'identité visuelle
3. **SCREENS.md** - Visualiser tous les écrans
4. **COMPONENTS.md** - Comprendre les briques UI

### 👨‍💻 Pour Développer

1. **IMPLEMENTATION_GUIDE.md** - Setup et roadmap
2. **design-tokens.ts** - Intégrer dans le code
3. **COMPONENT_EXAMPLES.md** - Copier-coller du code
4. **.vscode/SNIPPETS_GUIDE.md** - Accélérer avec les snippets

---

## 🎯 Navigation Rapide

### Par Type de Ressource

#### 📱 Écrans
- [LoginScreen](./SCREENS.md#loginscreen)
- [HomeScreen](./SCREENS.md#homescreen)
- [MatchDetailScreen](./SCREENS.md#matchdetailscreen)
- [MyBetsScreen](./SCREENS.md#mybetsscreen)
- [NewBetScreen](./SCREENS.md#newbetscreen)
- [LeaderboardScreen](./SCREENS.md#leaderboardscreen)
- [ProfileScreen](./SCREENS.md#profilescreen)
- [SettingsScreen](./SCREENS.md#settingsscreen)

#### 🧩 Composants

**Cards**
- [CardMatch](./COMPONENTS.md#cardmatch) - [Code →](./COMPONENT_EXAMPLES.md#cardmatch)
- [CardPronostic](./COMPONENTS.md#cardpronostic)
- [CardBet](./COMPONENTS.md#cardbet)
- [CardStat](./COMPONENTS.md#cardstat)

**Badges & Pills**
- [BadgeConfiance](./COMPONENTS.md#badgeconfiance) - [Code →](./COMPONENT_EXAMPLES.md#badgeconfiance)
- [BadgeStatus](./COMPONENTS.md#badgestatus)
- [Chip](./COMPONENTS.md#chip)

**Boutons**
- [Button](./COMPONENTS.md#button) - [Code →](./COMPONENT_EXAMPLES.md#button)
- [IssueSelector](./COMPONENTS.md#issueselector) - [Code →](./COMPONENT_EXAMPLES.md#issueselector)
- [ButtonGroup](./COMPONENTS.md#buttongroup)

**Inputs**
- [Input](./COMPONENTS.md#input)
- [AmountInput](./COMPONENTS.md#amountinput) - [Code →](./COMPONENT_EXAMPLES.md#amountinput)

**Data & Feedback**
- [ProgressBar](./COMPONENTS.md#progressbar) - [Code →](./COMPONENT_EXAMPLES.md#progressbar)
- [FormIndicator](./COMPONENTS.md#formindicator)
- [LeaderboardRow](./COMPONENTS.md#leaderboardrow)
- [SkeletonCard](./COMPONENTS.md#skeletoncard) - [Code →](./COMPONENT_EXAMPLES.md#skeletoncard)
- [EmptyState](./COMPONENTS.md#emptystate)
- [Toast](./COMPONENTS.md#toast) - [Code →](./COMPONENT_EXAMPLES.md#toast)
- [Sparkline](./COMPONENTS.md#sparkline)

#### 🎨 Design Tokens

**Couleurs**
- [Palette complète](./DESIGN_SYSTEM.md#palette-de-couleurs)
- [Background](./design-tokens.ts#L14-L18)
- [Accents](./design-tokens.ts#L26-L29)
- [Texte](./design-tokens.ts#L32-L37)
- [Feedback](./design-tokens.ts#L40-L45)

**Typographie**
- [Échelle complète](./DESIGN_SYSTEM.md#typographie)
- [Fonts](./design-tokens.ts#L68-L72)
- [Typography styles](./design-tokens.ts#L74-L141)

**Spacing & Layout**
- [Spacing](./design-tokens.ts#L147-L155)
- [Border Radius](./design-tokens.ts#L169-L175)
- [Élévations](./design-tokens.ts#L182-L221)

---

## 📊 Statistiques du Projet

### Documentation

- **10 fichiers** créés
- **~230 KB** de documentation
- **8 écrans** wireframés en détail
- **20+ composants** documentés
- **8 composants** avec code complet

### Design System

- **30+ couleurs** définies
- **12 styles typographiques**
- **7 niveaux de spacing**
- **5 niveaux de border radius**
- **4 niveaux d'élévation**
- **6+ helper functions**

### Outils de Dev

- **35+ snippets** VS Code
- **20+ extensions** recommandées
- **50+ settings** VS Code configurés

---

## 🎓 Tutoriels & Guides

### Créer un Nouveau Composant

1. **Créer le fichier** dans `src/components/[category]/MyComponent.tsx`
2. **Utiliser le snippet** : Tapez `rnfc` + Tab
3. **Définir les props** dans l'interface
4. **Styler avec les tokens** : `colors`, `typography`, `spacing`
5. **Ajouter des interactions** : `haptic`, animations
6. **Tester** avec `bptest` snippet

Voir : [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md#implémentation-des-composants)

### Créer un Nouvel Écran

1. **Créer le fichier** dans `app/(tabs)/my-screen.tsx`
2. **Utiliser le snippet** : Tapez `bpscreen` + Tab
3. **Structurer le contenu** : Header, Filters, List, etc.
4. **Ajouter les composants** : `CardMatch`, `Button`, etc.
5. **Gérer les states** : Loading, Empty, Error

Voir : [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md#implémentation-des-écrans)

### Setup State Management

**Zustand** (recommandé) :
1. Créer `src/store/myStore.ts`
2. Snippet : `zustand` + Tab
3. Définir l'interface et les actions
4. Utiliser dans les composants

Voir : [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md#state-management)

### Fetch API Data

**React Query** :
1. Créer `src/hooks/useMyData.ts`
2. Snippet : `rquery` + Tab
3. Configurer l'endpoint
4. Utiliser dans les composants avec auto-refresh

Voir : [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md#api-integration)

---

## 🔗 Liens Externes Utiles

### React Native & Expo

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

### Librairies Principales

- [Zustand](https://docs.pmnd.rs/zustand) - State management
- [React Query](https://tanstack.com/query/latest) - Data fetching
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animations
- [React Hook Form](https://react-hook-form.com/) - Formulaires

### Design & UI

- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Lottie Files](https://lottiefiles.com/) - Animations
- [React Native Directory](https://reactnative.directory/) - Librairies

---

## 📝 To-Do List Projet

### Design
- [x] Design system complet
- [x] Palette de couleurs
- [x] Typographie
- [x] Composants UI (wireframes)
- [x] Écrans (wireframes)
- [x] Tokens TypeScript

### Développement
- [ ] Setup projet Expo
- [ ] Installation fonts
- [ ] Setup navigation
- [ ] Implémentation composants de base
- [ ] Implémentation cards
- [ ] Implémentation écrans
- [ ] State management (Zustand)
- [ ] API integration
- [ ] Animations (Reanimated)
- [ ] Testing
- [ ] Déploiement

---

## 🤝 Contribution

### Ajouter un Composant à la Documentation

1. Ajouter le wireframe dans `COMPONENTS.md`
2. Ajouter le code dans `COMPONENT_EXAMPLES.md`
3. Créer un snippet dans `.vscode/betprono-snippets.code-snippets`
4. Documenter dans `.vscode/SNIPPETS_GUIDE.md`

### Ajouter un Écran

1. Wireframe dans `SCREENS.md`
2. Ajouter dans la navigation (README.md)
3. Mettre à jour `IMPLEMENTATION_GUIDE.md`

---

## 📞 Support

Pour toute question :
1. Consulter d'abord la documentation pertinente
2. Vérifier les exemples de code
3. Utiliser les snippets pour gagner du temps
4. Se référer à l'implementation guide pour les problèmes de setup

---

## 📄 Licence

Design propriétaire © 2024 BetProno

---

**Dernière mise à jour** : 19 novembre 2024

**Version** : 1.0.0

**Status** : ✅ Design complet - Prêt pour implémentation

---

**Happy Building! 🚀⚽💚**
