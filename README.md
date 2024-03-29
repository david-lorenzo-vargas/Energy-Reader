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
On the right hand side of the screen there is a list of previous readings with date and value. The list is sorted by date in descending order, being the most recent one at the top. Under the list of previous readings there is an estimation of how much will be the next usage based on the last 4 entries.
<br><br>
The user can decide to use the predicted value or to enter a value manualy using the pad. In both cases before the new entry is sent, a warning modal is rendered asking the users to confirm the amount to be sent. Once accepted, the last entryis added to the top of the list as it is the most recent entry entered.
<br><br>
If the new reading entered is less than 5 digits long, the following error message appears: `Reading must be 5 digits long`. In case the value entered is 5 digits long but the amount is less than the last entry, an error message gets rendered: `The reading must be higher than the last one`.
<br><br>
`Add` button stays deisabled until both conditions are met.

## API

A mock API call has been implemented via Promise that returns an array of mock data readings for initial values.

## Meter

![Mar-07-2024 15-47-10](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/6f787376-c4df-4aac-ab07-695e78f8c0f9)

## Readings

![Mar-07-2024 15-48-14](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/159cc590-bc57-400d-8875-6871bf03624c)

## Add predicted reading

![Mar-07-2024 15-49-29](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/833fd56a-3ada-466a-a572-ce5ec75f027a)

## Stack

<ul>
  <li>React</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
</ul>
  
## Types

All types and enums have been declared in `types.ts`.

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Testing

Jest and React Testing Library have been used for testing. Testing has been added for all components and utilities but, as further implementation, it would be necessary to add more unit and integration testing for new functionalities and components.

To run tests: `npm run test`

## Accessibility

Native HTML tags with WAI-ARIA Roles have been used for accessibility which would allow screen readers to navigate through the page.

An 100 overall score achieved in Lighthouse tool

![Screenshot 2024-03-07 at 15 29 14](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/ea7fbc22-b1e3-43f6-aec5-1c4cd57211b5)


## Responsiveness

The app is responsive and adjusts to desktop and mobile viewports, some media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

<table>
<tr>
<td width="50%"">
  
![Screenshot 2024-03-07 at 15 22 35](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/22cd210e-add8-4d24-9044-2e3aff8706fa)

</td>
<td width="50%">

![Screenshot 2024-03-07 at 15 22 49](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/459bd00f-ceab-456f-873b-a35b2ee3afcd)

</td>
</tr>
</table>

### Desktop

![Screenshot 2024-03-07 at 15 24 28](https://github.com/david-lorenzo-vargas/Energy-Reader/assets/72414745/b41556f6-4386-4876-a847-01bec0348867)


## Further implementation

<ul>
  <li>
    Pagination for the list of previous readings
  </li>
  <li>
    API integration for fetching readings and posting new readings
  </li>
</ul>



