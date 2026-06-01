export class MySDK {
  private apiKey: string | null = null;

  init(config: { apiKey: string }) {
    this.apiKey = config.apiKey;

    console.log("SDK initialized");
  }

  track(event: string) {
    console.log("Tracked:", event);
  }
}