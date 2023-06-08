const config = {
  // Specify the target website URL
  targetWebsite: "https://example.com",
  // Set the interval for health checks (e.g., every 5 minutes)
  interval: "every 1 minutes",
  notifications: {
    // Configure the email address for notifications
    email: "your-email@example.com",
    // (Optional) Configure the phone number for SMS notifications
    sms: "+1234567890",
    // Add more notification channels as needed (e.g., Slack, Discord, etc.)
  },
  // Configure other health check options,
  // such as response time thresholds, status codes, etc.
};

export default config;
