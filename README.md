# Login Google avec Next.js et NextAuth

Ce projet est une application Next.js intégrant un système d'authentification basé sur Google à l'aide de NextAuth.js et Prisma.

---

## **Pré-requis**

Assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [SQLite](https://sqlite.org/) (ou une autre base de données si nécessaire)

---

## **Installation**

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/Epf-Mattis/Login_Google.git
   cd Login_Google
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez votre base de données avec Prisma :

   ```bash
   npx prisma migrate dev --name init
   ```

4. Créez un fichier `.env` à la racine du projet avec les variables suivantes :

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_SECRET=your-random-secret-key
   DATABASE_URL=file:./prisma/dev.db
   ```

   - **GOOGLE_CLIENT_ID** : Obtenez cela depuis la [Google Cloud Console](https://console.cloud.google.com/).
   - **GOOGLE_CLIENT_SECRET** : Obtenez cela depuis la [Google Cloud Console](https://console.cloud.google.com/).
   - **NEXTAUTH_SECRET** : Une clé aléatoire générée pour sécuriser les sessions (voir ci-dessous pour la génération).
   - **DATABASE_URL** : URL de la base de données (par défaut pour SQLite).

---

## **Génération de `NEXTAUTH_SECRET`**

Pour générer une clé sécurisée pour `NEXTAUTH_SECRET`, utilisez l'une des méthodes suivantes :

### **Avec Node.js**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### **Avec OpenSSL**

```bash
openssl rand -base64 32
```

---

## **Lancer le projet**

1. Démarrez le serveur de développement :

   ```bash
   npm run dev
   ```

2. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000).

---

## **Fonctionnalités**

- Authentification via Google.
- Gestion des sessions sécurisée avec NextAuth.js.
- Base de données SQLite gérée avec Prisma.

---

## **Dépendances**

Les principales dépendances utilisées dans ce projet :

- **[Next.js](https://nextjs.org/)** : Framework React pour les applications web.
- **[NextAuth.js](https://next-auth.js.org/)** : Solution complète d'authentification.
- **[Prisma](https://www.prisma.io/)** : ORM moderne pour les bases de données.

---

## **Arborescence du projet**

Voici une vue simplifiée de l'arborescence du projet :

```
.
├── prisma/
│   ├── dev.db                 # Base de données SQLite
│   └── schema.prisma          # Modèles Prisma
├── src/
│   ├── app/
│   │   ├── layout.js          # Layout global avec SessionProvider
│   │   ├── login/page.js      # Page de connexion
│   │   └── globals.css        # Styles globaux
│   ├── components/
│   │   └── AuthButton.js      # Bouton pour se connecter et se déconnecter
│   └── pages/api/auth/
│       └── [...nextauth].js   # Configuration NextAuth
├── .env                       # Variables d'environnement
├── package.json               # Dépendances et scripts
├── README.md                  # Documentation du projet
```

---

## **Configuration Google OAuth**

1. Accédez à la [Google Cloud Console](https://console.cloud.google.com/).
2. Créez un projet ou sélectionnez un projet existant.
3. Accédez à **API & Services > Identifiants**.
4. Créez un **ID client OAuth** :
   - **Type d'application** : Application Web.
   - **Origines JavaScript autorisées** : `http://localhost:3000`.
   - **URI de redirection autorisé** : `http://localhost:3000/api/auth/callback/google`.

5. Copiez le **Client ID** et le **Client Secret**, et ajoutez-les à votre fichier `.env`.

---

## **Contribution**

Si vous souhaitez contribuer à ce projet :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```
3. Soumettez une pull request.

---

## **Licence**

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
