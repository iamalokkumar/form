import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test("present elements or not",()=>{
  render(<App/>)
  let displayValue=screen.getByTestId("counter-value",{exact:true})
  expect(displayValue).toBeInTheDocument()
  let addButton=screen.getByRole("button",{name:"ADD"})
  expect(addButton).toBeInTheDocument()
  let removeButton=screen.getByRole("button",{name:"REMOVE"})
  expect(removeButton).toBeInTheDocument()

})

test("check it's working or not ",()=>{
  render(<App/>)
  let displayValues=screen.getByTestId("counter-value",{exact:false})
  let addButton=screen.getByRole("button",{name:"ADD"})
  let removeButton=screen.getByRole("button",{name:"REMOVE"})
  expect(displayValues.textContent).toBe("0")


  fireEvent.click(addButton)
expect(displayValues.textContent).toBe("1")
fireEvent.click(addButton)
expect(displayValues.textContent).toBe("2")

fireEvent.click(removeButton)

expect(displayValues.textContent).toBe("1")
fireEvent.click(removeButton)
expect(displayValues.textContent).toBe("0")

})
