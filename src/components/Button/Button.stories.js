import Button from "./Button";

export default {
  title: "form/Button",
  component: Button,
  // We can also add args on component level here
  args:{
    children:'Comp level args'
  }
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

// More helpful when the JSX will be complex
export const PrimaryArgs = Template.bind({});
PrimaryArgs.args = {
  variant: "primary",
  children: "Primary Args",
};

export const SecondaryArgs = Template.bind({});
SecondaryArgs.args = {
  variant: "primary",
  // children: "Secondary Args",
};
