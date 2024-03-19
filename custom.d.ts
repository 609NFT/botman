interface Window {
    twttr: any; // Use a more specific type instead of any if you know the structure of the twttr object
    Jupiter: {
      init: (config: { endpoint: string }) => void;
    };
  }
  