
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify'

// Configuration AWS Amplify - DOIT être synchrone
const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: "eu-west-3_K0BoxUFkS",
      userPoolClientId: "1bg4vbumtfgjmro8n65ce4c859",
      identityPoolId: "eu-west-3:5fdebe79-865b-40ec-8de0-f0b04dbbae29",
      loginWith: {
        username: true,
        email: false,
        phone: false
      },
      signUpVerificationMethod: "code" as const,
      userAttributes: {
        phone_number: {
          required: false
        }
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: false,
        requireUppercase: false,
        requireNumbers: false,
        requireSpecialCharacters: false
      }
    }
  },
  API: {
    GraphQL: {
      endpoint: "https://77e55jvfordw5c6tb5bmh6loiq.appsync-api.eu-west-3.amazonaws.com/graphql",
      region: "eu-west-3",
      defaultAuthMode: "userPool" as const,
      apiKey: "da2-madtpj74mjallnjpbhca7owzym"
    },
    REST: {
      AdminQueries: {
        endpoint: "https://j49tvrfjf1.execute-api.eu-west-3.amazonaws.com/fwatcher",
        region: "eu-west-3"
      }
    }
  }
};

// Configuration SYNCHRONE d'Amplify avant le rendu
console.log('Configuration d\'Amplify...');
Amplify.configure(awsConfig, { ssr: false });
console.log('Amplify configuré avec succès');

// Démarrer l'application
createRoot(document.getElementById("root")!).render(<App />);
