# Burger Builder Planning

#### Component Tree

App

- Layout
  - Toolbar
    - DrawerToggle
    - Logo
    - Navigation Items
  - Side Drawer
    - Logo
    - Navigation Items
  - Backdrop
  - {props.children}
    - Different Pages
    - BurgerBuilder **essentially a page and must be stateful**
      - BuildControls
        - List of Build Controls
        - Checkout button
      - Burger
        - List of Ingredients
      - Modal
        - {props.children}

#### State

Ingredients

- {meat, meatless, vegetables, cheese, sauce}

Purchased

- {true, false}

Price

- {calculated from ingredients}

**Where will we manage the state? Inside of BurgerBuilder component.**
