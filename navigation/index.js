/** @format */

import React from "react";

import { AuthenticatedUserProvider } from "./AuthenticatedUserProvider";
import { NewsProvider } from "./NewsProvider";
import RootNavigator from "./RootNavigator";

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <NewsProvider>
        <RootNavigator />
      </NewsProvider>
    </AuthenticatedUserProvider>
  );
}
