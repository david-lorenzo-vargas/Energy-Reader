# Energy meter reader

## Getting Started

First, install node modules:

```bash
npm install
```

Then, run the development server:

```bash
npm run start
```

Required Node.js 18.16.1 or later.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

The user can enter current electricity and gas usage both via input or pad provided. The value entered must be a 5 digit long number and the current value entered must be higer than the last amount entered.
<br><br>
On the right hand side of the screen it is shown a list of previous readings with date and value. The list is sorted by date in descending order, being the most recent one at the top. Under the list of previous readings there is an estimation of how much be the next usage based on the last 4 entries.
<br>>br>
The user can decide to enter the predicted value or to enter it manualy. In both cases before the new entry is sent, a warning modal gets render asking the users if they are sure the want to add the amount selected. Once accepted the last entry gets render at the top of the list as it is the most recent entry entered.

## Meter

## Readings

## Add new reading

## Add predicted reading

## Stack

<ul>
  <li>React</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
</ul>
  
## Types

All types and enums have been declared in a `types.ts`

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Testing

Jest and React Testing Library have been used for testing. Testing has been added for some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`

## Accessibility

Native HTML tags with WAI-ARIA Roles have been used for accessibility which would allow screen readers to navigate through the page.

An 100 overall score achieved in Lighthouse tool

![Screenshot 2024-03-07 at 15 29 14](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/ea7fbc22-b1e3-43f6-aec5-1c4cd57211b5)


## Responsiveness

The app is responsive and adjusts to desktop and mobile viewports, some media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

![Screenshot 2024-03-07 at 15 22 35](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/22cd210e-add8-4d24-9044-2e3aff8706fa)

![Screenshot 2024-03-07 at 15 22 49](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/459bd00f-ceab-456f-873b-a35b2ee3afcd)

### Desktop

![Screenshot 2024-03-07 at 15 24 28](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/b41556f6-4386-4876-a847-01bec0348867)


## Further implementation

<ul>
  <li>
    Pagination for previous readings
  </li>
  <li>
    API integration for fetching readings and posting new readings
  </li>
</ul>



