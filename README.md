```
# Next.js Test

A test project simulating a dashboard using Next.js, TypeScript, and mock API routes.

## API Endpoints

- User Signups: `/api/signups`
  Returns a list of user signups with an `id`, `name`, `email`, and `signupDate`.

- User Login Activity: `/api/logins`
  Returns a list of user login activities with `userId`, `date`, and `device`.

- Subscription Upgrades: `/api/upgrades`
  Returns a list of subscription upgrades with `userId`, `oldPlan`, `newPlan`, and `upgradeDate`.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
## Screenshots of the project:


![Screenshot 2023-10-12 at 3 09 47 PM](https://github.com/thriver652/nextjs-test/assets/74093651/c05931cd-aa18-4afd-af4b-5c0d2dbe9ce4)
![Screenshot 2023-10-12 at 3 09 59 PM](https://github.com/thriver652/nextjs-test/assets/74093651/1bfca500-18e1-4362-9aa1-eeab378bb10c)
![Screenshot 2023-10-12 at 3 10 13 PM](https://github.com/thriver652/nextjs-test/assets/74093651/2a45f6dd-a546-4cbe-9a11-3ea6c0c16281)
![Screenshot 2023-10-12 at 3 10 26 PM](https://github.com/thriver652/nextjs-test/assets/74093651/8698b9e2-3009-4b46-bc5e-8c2f22614081)


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

## How to Run the Application Locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/thriver652/nextjs-test
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

   This will start the development server, and you can access the application at [http://localhost:3000](http://localhost:<your-server-number>(3000 or 3001 or 3002)).

4. Open your web browser and navigate to the provided URL to interact with the dashboard and as provided above you can navigate to

   - `/SubscriptionUpgrades`
   - `/UserLoginActivity`
   - `/UserSignUp`
    
   

Best regards,
Sai Praneeth

