```markdown
# Next.js Test

A test project simulating a dashboard using Next.js, TypeScript, and mock API routes.

## API Endpoints

- **User Signups**: `/api/signups`
  Returns a list of user signups with an `id`, `name`, `email`, and `signupDate`.

- **User Login Activity**: `/api/logins`
  Returns a list of user login activities with `userId`, `date`, and `device`.

- **Subscription Upgrades**: `/api/upgrades`
  Returns a list of subscription upgrades with `userId`, `oldPlan`, `newPlan`, and `upgradeDate`.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Objective:

Create a Next.js application to display a dashboard with mock user activity data, such as user signups, login activities, and subscription upgrades, fetched from mock API endpoints.

## Test Requirements:

### **Dashboard Home Page (/):**

- Display a summary showing the number of new signups, logins, and upgrades.
- Display a list of recent user signups showcasing the user's name and signup date.
- Each user name in the list should be clickable and redirect to a detailed activity page for the user.

### **User Activity Page (/users/[id]):**

- Display the user's name, email, and signup date.
- Show a list of login activities for the user, specifying the date and device used.
- Show a list of subscription upgrades for the user, detailing the old plan, new plan, and upgrade date.

### **Best Practices & Technologies:**

- Use styled-components for all styling. Follow a clear theme with consistent spacing, coloring, and typography.
- Incorporate TypeScript types for all components, API responses, and data structures.
- Use getStaticProps or getServerSideProps appropriately for data fetching.
- Implement error handling for invalid user IDs or missing data.
- Ensure the layout is responsive.

## Instructions for Submission

Once you've completed the tasks:

1. Commit and push your changes to your own GitHub repository.
2. Make sure to provide read access to the GitHub handle `@tilen-babnik` so your solution can be reviewed.
3. Send an email to `tilen@samwell.ai` with:
   - A link to your GitHub repository containing the solution.
   - Any additional notes or comments you'd like to add about your submission.

Thank you for participating in this test! We're excited to review your work.

**Note:**
I have made changes in the following directories:
- `/SubscriptionUpgrades`
- `/UserLoginActivity`
- `/UserSignUp`
```
```markdown
4. Ensure that the project is well-documented. Include a README.md file that provides clear instructions on how to run the application locally.

## How to Run the Application Locally:

1. Clone the repository:

   ```bash
   git clone <your_repository_url>
   cd <your_project_directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

   This will start the development server, and you can access the application at [http://localhost:3000](http://localhost:3000).

4. Open your web browser and navigate to the provided URL to interact with the dashboard.

## Additional Notes:

- **Styling:** The styling of the application is implemented using styled-components, ensuring a consistent and visually appealing design.

- **TypeScript:** TypeScript is utilized for type safety, providing a more robust development experience and reducing potential runtime errors.

- **Data Fetching:** The application uses `getStaticProps` or `getServerSideProps` for efficient data fetching, enhancing performance and providing a better user experience.

- **Error Handling:** Proper error handling is implemented, ensuring that the application gracefully handles invalid user IDs or missing data.

- **Responsiveness:** The layout is designed to be responsive, providing a seamless user experience across different devices and screen sizes.

Thank you for reviewing my submission. If you have any questions or feedback, feel free to reach out.

Best regards,
[Your Name]
```

This addition to the README.md provides instructions on running the application locally, highlights key aspects of the project, and invites feedback from the reviewer. Ensure to replace `<your_repository_url>` and `[Your Name]` with the actual repository URL and your name, respectively.
