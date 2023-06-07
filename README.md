# Fireward (ระวังฟืนระวังไฟ)

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase)
![Serverless](https://img.shields.io/badge/serverless-%23FD5750.svg?style=flat&logo=serverless)

Fireward is a Firebase serverless function that periodically runs health checks on a target website. It ensures that the website is up and running, providing valuable insights into its availability and performance.

## Functionality

The Fireward repository contains a serverless function developed using Firebase Functions. This function is responsible for periodically checking the health of a target website by sending HTTP requests and verifying the responses. The checks can be customized according to specific requirements and can include various metrics, such as response time, status codes, and content validation.

The function runs at predefined intervals and can be configured to send notifications or trigger alerts when issues are detected. These alerts can be sent to various channels, such as email, SMS, or a messaging service.

## Setup and Configuration

To use the Fireward serverless function, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/fireward.git
   ```

2. Install the required dependencies by navigating to the project directory and running:

   ```bash
   cd fireward
   npm install
   ```

3. Set up a Firebase project and configure it locally by running:

   ```bash
   firebase login
   firebase use --add
   ```

   Follow the interactive prompts to log in to your Firebase account and select or create a project.

4. Configure the target website and health checks by modifying the `config.js` file:

   ```javascript
   module.exports = {
     targetWebsite: 'https://example.com', // Specify the target website URL
     interval: 'every 5 minutes', // Set the interval for health checks (e.g., every 5 minutes)
     notifications: {
       email: 'your-email@example.com', // Configure the email address for notifications
       sms: '+1234567890', // (Optional) Configure the phone number for SMS notifications
       // Add more notification channels as needed (e.g., Slack, Discord, etc.)
     },
     // Configure other health check options, such as response time thresholds, status codes, etc.
   };
   ```

5. Deploy the serverless function to Firebase by running:

   ```bash
   firebase deploy --only functions
   ```

   This command will deploy the function to your Firebase project, making it operational.

6. Monitor the health checks and receive notifications as configured in the `config.js` file.

## Customization and Advanced Configuration

The Fireward serverless function can be customized to meet your specific requirements. Here are a few customization options:

- **Health Check Metrics**: Modify the function code in `index.js` to include additional health check metrics or modify the existing ones. You can track response times, verify specific response content, or even integrate with external monitoring services.

- **Notification Channels**: Expand the `notifications` object in the `config.js` file to include additional channels for notifications. You can configure alerts to be sent via various services such as Slack, Discord, or custom webhooks.

- **Advanced Scheduling**: Firebase Functions use the [Firebase Cloud Scheduler](https://firebase.google.com/docs/functions/schedule-functions) to trigger the function at predefined intervals. You can explore the scheduling documentation to customize the frequency and timing of the health checks.

- **Integration with Monitoring Systems**: Extend the functionality of Fireward by integrating it with monitoring and incident management systems. For example, you can trigger automated incident tickets or update monitoring dashboards when issues are detected.



## Contributing

Contributions to the Fireward repository are welcome! If you encounter any bugs, have suggestions for improvements, or would like to add new features, please open an issue or submit a pull request. Make sure to follow the project's coding standards and include appropriate tests for your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code according to the terms of this license.

## Acknowledgements

The Fireward project was inspired by the need for a simple and lightweight website health monitoring solution. It utilizes the power of Firebase Functions and serverless architecture to provide an easily deployable and customizable solution.
