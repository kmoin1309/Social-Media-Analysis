import * as dotenv from "dotenv";
dotenv.config();

import express, { Application, Request, Response } from "express";
import http from "http";
import { Server, WebSocketServer } from "ws";
import axios from "axios";
import cors from "cors";

const app: Application = express();
const server: http.Server = http.createServer(app);
const wss: WebSocketServer = new WebSocketServer({ noServer: true });

const ws: WebSocket = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
  console.log("WebSocket connection established");
};

ws.onmessage = (event: WebSocket.MessageEvent) => {
  const data: any = JSON.parse(event.data);
  if (data.type === "requestId") {
    const requestId: string = data.requestId;
    console.log("Received requestId:", requestId);

    // Use this requestId in your POST request to /chat
  }
};

app.use(cors());
app.use(express.json());

const connections: Map<string, WebSocket> = new Map();

wss.on("connection", (ws: WebSocket) => {
  const requestId: string = Math.random().toString(36).substring(7);
  connections.set(requestId, ws);

  ws.on("close", () => {
    connections.delete(requestId);
  });

  ws.send(JSON.stringify({ type: "requestId", requestId }));
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

interface ChatRequest {
  input_value: string;
  requestId: string;
}

interface ChatResponse {
  message: string;
}

app.post("/chat", async (req: Request, res: Response) => {
  const { input_value, requestId }: ChatRequest = req.body;
  const ws: WebSocket | undefined = connections.get(requestId);

  if (!ws) {
    return res.status(400).json({ error: "WebSocket connection not found" });
  }

  try {
    console.log("Request:", input_value);
    const response = await axios.post(
      "https://api.langflow.astra.datastax.com/lf/542dfbea-bb87-4472-a0c0-2ac8768b70fa/api/v1/run/543b5ce5-3375-4386-bd89-49ab0f2882dd?stream=false",
      {
        input_value,
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "ChatInput-kf57n": {},
          "ParseData-fKkbe": {},
          "Prompt-gbTSt": {},
          "ChatOutput-TtdrM": {},
          "AstraDB-O2OE1": {},
          "CohereEmbeddings-stej2": {},
          "GoogleGenerativeAIModel-DhhtR": {},
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.APPLICATION_TOKEN}`,
        },
      }
    );

    const message: string =
      response.data.outputs[0].outputs[0].results.message.text;
    console.log("Response:", message);

    ws.send(JSON.stringify({ type: "response", message }));
    return res.json({ message });
  } catch (error) {
    ws.send(JSON.stringify({ type: "error", message: error.message }));
    res.status(500).json({ error: error.message });
  }
});

const PORT: number = parseInt(process.env.PORT || "3000", 10);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
