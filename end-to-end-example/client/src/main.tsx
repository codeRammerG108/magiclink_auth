/**
 * Copyright Amazon.com, Inc. and its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Passwordless } from "amazon-cognito-passwordless-auth";
import {
  PasswordlessContextProvider,
  Passwordless as PasswordlessComponent,
  Fido2Toast,
} from "amazon-cognito-passwordless-auth/react";
import "amazon-cognito-passwordless-auth/passwordless.css";
import "@cloudscape-design/global-styles/index.css";

console.debug("App built at:", import.meta.env.VITE_APP_BUILD_DATE);

Passwordless.configure({
  cognitoIdpEndpoint: import.meta.env.VITE_COGNITO_IDP_ENDPOINT,
  clientId: import.meta.env.VITE_CLIENT_ID,
  fido2: {
    baseUrl: import.meta.env.VITE_FIDO2_BASE_URL,
    authenticatorSelection: {
      userVerification: "required",
    },
  },
  debug: console.debug,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PasswordlessContextProvider enableLocalUserCache={true}>
    <PasswordlessComponent
      brand={{
        backgroundImageUrl:
          "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        customerName: "Tricon Infotech",
        customerLogoUrl:
          "https://res.cloudinary.com/ddyro9bha/image/upload/v1704378810/Tricon-logo_yuub2v.jpg",
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PasswordlessComponent>
    <Fido2Toast /> {/* Add Fido2Toast below App so it is rendered on top */}
  </PasswordlessContextProvider>
);
