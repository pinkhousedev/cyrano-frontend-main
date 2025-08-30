/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
  LogRocket?: {
    init: (appId: string) => void;
  };
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}