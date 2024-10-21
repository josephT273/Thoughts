import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";
import database from "./config/database.js";
import Notes from "./model/NotesModal.js";
import {cors} from 'hono/cors'

const db = database();

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use('/*', cors());

app.post("/api/v1/note", async (c) => {
  const { note, displayName } = await c.req.json();

  if (!note)
    return c.json({
      success: false,
      message: "You have to write text on the note",
    });

  const n = await Notes.create({
    note,
    displayName,
  });

  return c.json({
    success: true,
    message: "Note Saved successfully",
  });
});

app.get("/api/v1/note", async (c) => {
  const n = await Notes.find({}).select("-__v").sort({createdAt: -1});

  return c.json({
    success: true,
    data: n,
  });
});

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});

const port = Number.parseInt(process.env.PORT!);
console.log(`Server is running on port ${port}`);

db.on("error", console.error.bind(console, "Mongodb Error: "));
db.on("open", () => {
  console.info("Database is connected");
  serve({
    fetch: app.fetch,
    port,
  });
  console.info("⚙️ App running on the port http://localhost:%d", port);
});
