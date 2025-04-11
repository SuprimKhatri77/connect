import prisma from "@/library/client";
import { UserJSON } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req: Request) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      const user = evt.data as UserJSON;
      try {
        await prisma.user.create({
          data: {
            id: evt.data.id,
            username: user.username || "unknown",
            avatar: user.image_url || "/noAvatar.png",
            coverPicture: "/noCover.jpeg",
          },
        });

        return new Response("User has been created", { status: 200 });
        console.log("user created in the db");
      } catch (err) {
        console.log(err);
        return new Response("Failed to create the user!", { status: 500 });
      }
    }

    if (eventType === "user.updated") {
      const user = evt.data as UserJSON;
      try {
        await prisma.user.update({
          where: {
            id: evt.data.id,
          },
          data: {
            username: user.username || "unknown",
            avatar: user.image_url || "/noAvatar.png",
          },
        });

        return new Response("User has been updated", { status: 200 });
      } catch (err) {
        console.log(err);
        return new Response("Failed to update the user!", { status: 500 });
      }
    }
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    // console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
