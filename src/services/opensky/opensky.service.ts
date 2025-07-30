import axios from "axios";
import type { IOpenskyResponse } from "./opensky.types";

class OpenSkyService {
  private apiUrl: string;
  private token: string;
  private clientId: string;

  constructor() {
    this.apiUrl = "https://opensky-network.org/api";
    this.token = import.meta.env.VITE_API_OPENSKY_CLIENT_SECRET;
    this.clientId = import.meta.env.VITE_API_OPENSKY_CLIENT_ID;
  }

  private async getOpenSkyToken(): Promise<string> {
    const response = await axios.post(
      this.apiUrl +
        "https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: this.clientId,
        client_secret: this.token,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    return response.data.access_token;
  }

  async fetchLiveFlights() {
    try {
      const token = await this.getOpenSkyToken();
      const params = new URLSearchParams();
      const response = await axios.get<IOpenskyResponse>(
        `${this.apiUrl}/states/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params,
        }
      );

      if (response.status !== 200 || !response.data.states) {
        throw new Error("OpenSky API reterned invalid response");
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new OpenSkyService();
