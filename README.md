# SettlUp

SettleUp is a tool designed to make splitting shared expenses quick and painless.

Use it anonymously as a calculator and then create an account to save your work!

Sign in, link your Venmo? Paypal? Cashapp? account, and create a tab between you and a friend. Enter your expenses on one side, and your friend will do the same. When the time comes to split the bills, just click the button that says SettlUp! Your friend will be able to approve or deny the request and the funds will be transferred automatically! You'll see the SettleUp transaction in both expense lists, and all transactions up tothat point will be marked as settled.


SettleUp is built with [RedwoodJs.](https://redwoodjs.com) Run your own instance by cloning this repository and running the two commands below.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
