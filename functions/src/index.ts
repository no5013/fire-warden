import * as functions from "firebase-functions";
import axios from "axios";
import config from "./config";

export const healthCheck = functions.region("asia-southeast1").pubsub
  .schedule(config.interval)
  .onRun(async (context) => {
    try {
      const response = await axios.get(config.targetWebsite);
      const {status} = response;

      // Perform additional health check validations here
      // For example, check response time, status codes, or content validation

      // Send notifications if issues are detected
      if (status !== 200) {
        sendNotification(`Website is down with status code: ${status}`);
      }

      console.log("Health check completed successfully.");
    } catch (error) {
      console.error("Health check failed:", error);
      sendNotification("Health check failed. Please investigate.");
    }

    return null;
  });

/**
 * Blah blah blah
 * @param {string} message blah blah blah
 */
function sendNotification(message: string): void {
  // Send notifications to configured channels (e.g., email, SMS, etc.)
  console.log("Sending notification:", message);
  // Implement your notification logic here
}
